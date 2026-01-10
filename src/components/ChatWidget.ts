// ChatWidget.ts - Floating chat widget UI component

import { ChatService, ChatContext } from '../services/ChatService';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export class ChatWidget {
  private chatService: ChatService;
  private isOpen = false;
  private isMinimized = false;
  private container: HTMLElement | null = null;
  private messagesContainer: HTMLElement | null = null;
  private inputElement: HTMLTextAreaElement | null = null;
  private currentContext: ChatContext = { type: 'general' };

  constructor(apiEndpoint?: string) {
    this.chatService = new ChatService(apiEndpoint);
    this.init();
  }

  private init(): void {
    this.createWidget();
    this.attachEventListeners();
  }

  private createWidget(): void {
    // Create main container
    this.container = document.createElement('div');
    this.container.id = 'finansbot-widget';
    this.container.className = 'chat-widget';
    this.container.innerHTML = this.getWidgetHTML();
    document.body.appendChild(this.container);

    // Cache references
    this.messagesContainer = this.container.querySelector('.chat-messages');
    this.inputElement = this.container.querySelector('.chat-input-field');
  }

  private getWidgetHTML(): string {
    return `
      <!-- Floating button - Birger the Finance Shark -->
      <button class="chat-fab" aria-label="Snakk med Birger">
        <img class="chat-fab-mascot" src="/birger.png" alt="Birger - din finanshai" />
        <svg class="chat-fab-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <!-- Chat panel -->
      <div class="chat-panel">
        <div class="chat-resize-handle" aria-label="Endre størrelse"></div>
        <div class="chat-header">
          <div class="chat-header-info">
            <img class="chat-bot-avatar-img" src="/birger.png" alt="Birger" />
            <div class="chat-header-text">
              <span class="chat-bot-name">Birger</span>
              <span class="chat-bot-status">Din finanshai 🦈</span>
            </div>
          </div>
          <div class="chat-header-actions">
            <button class="chat-btn-minimize" aria-label="Minimer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button class="chat-btn-close" aria-label="Lukk">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="chat-context-bar" style="display: none;">
          <span class="chat-context-label"></span>
          <button class="chat-context-clear">✕</button>
        </div>

        <div class="chat-messages">
          <div class="chat-welcome">
            <img class="chat-welcome-mascot" src="/birger.png" alt="Birger" />
            <h3>Hei, fremtidige finansfyrste! 🦈</h3>
            <p>Jeg er Birger - din finanshai! Klar for å dykke ned i pengeverdenen?</p>
            <div class="chat-topics">
              <span class="chat-topic" data-topic="renteregning">📊 Renteregning</span>
              <span class="chat-topic" data-topic="obligasjoner">📈 Obligasjoner</span>
              <span class="chat-topic" data-topic="aksjer">💹 Aksjer</span>
              <span class="chat-topic" data-topic="portefølje">📁 Portefølje</span>
              <span class="chat-topic" data-topic="investering">💰 Investering</span>
              <span class="chat-topic" data-topic="kapitalstruktur">🏛️ Kapitalstruktur</span>
            </div>
          </div>
        </div>

        <div class="chat-input-area">
          <textarea
            class="chat-input-field"
            placeholder="Still et spørsmål..."
            rows="1"
            maxlength="1000"
          ></textarea>
          <button class="chat-send-btn" aria-label="Send melding">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  private attachEventListeners(): void {
    if (!this.container) return;

    // FAB button
    const fab = this.container.querySelector('.chat-fab');
    fab?.addEventListener('click', () => this.toggle());

    // Close button
    const closeBtn = this.container.querySelector('.chat-btn-close');
    closeBtn?.addEventListener('click', () => this.close());

    // Minimize button
    const minBtn = this.container.querySelector('.chat-btn-minimize');
    minBtn?.addEventListener('click', () => this.minimize());

    // Send button
    const sendBtn = this.container.querySelector('.chat-send-btn');
    sendBtn?.addEventListener('click', () => this.sendMessage());

    // Input field - enter to send, shift+enter for newline
    this.inputElement?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Auto-resize textarea
    this.inputElement?.addEventListener('input', () => {
      if (this.inputElement) {
        this.inputElement.style.height = 'auto';
        this.inputElement.style.height = Math.min(this.inputElement.scrollHeight, 120) + 'px';
      }
    });

    // Topic shortcuts
    const topics = this.container.querySelectorAll('.chat-topic');
    topics.forEach(topic => {
      topic.addEventListener('click', () => {
        const topicName = topic.getAttribute('data-topic');
        if (topicName && this.inputElement) {
          this.inputElement.value = `Forklar ${topicName} for meg`;
          this.inputElement.focus();
        }
      });
    });

    // Context clear button
    const contextClear = this.container.querySelector('.chat-context-clear');
    contextClear?.addEventListener('click', () => this.clearContext());

    // Resize handle
    const resizeHandle = this.container.querySelector('.chat-resize-handle');
    const chatPanel = this.container.querySelector('.chat-panel') as HTMLElement;
    if (resizeHandle && chatPanel) {
      this.setupResize(resizeHandle as HTMLElement, chatPanel);
    }
  }

  private setupResize(handle: HTMLElement, panel: HTMLElement): void {
    let isResizing = false;
    let startX = 0;
    let startY = 0;
    let startWidth = 0;
    let startHeight = 0;

    const onMouseDown = (e: MouseEvent) => {
      isResizing = true;
      startX = e.clientX;
      startY = e.clientY;
      startWidth = panel.offsetWidth;
      startHeight = panel.offsetHeight;
      panel.classList.add('resizing');
      e.preventDefault();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      // Calculate new size (resize from top-left corner)
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;

      const newWidth = Math.max(300, Math.min(startWidth + deltaX, window.innerWidth * 0.9));
      const newHeight = Math.max(350, Math.min(startHeight + deltaY, window.innerHeight - 100));

      panel.style.width = `${newWidth}px`;
      panel.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      if (isResizing) {
        isResizing = false;
        panel.classList.remove('resizing');
      }
    };

    handle.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    // Touch support for mobile
    handle.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      onMouseDown({ clientX: touch.clientX, clientY: touch.clientY, preventDefault: () => e.preventDefault() } as MouseEvent);
    });

    document.addEventListener('touchmove', (e) => {
      if (!isResizing) return;
      const touch = e.touches[0];
      onMouseMove({ clientX: touch.clientX, clientY: touch.clientY } as MouseEvent);
    });

    document.addEventListener('touchend', onMouseUp);
  }

  toggle(): void {
    if (this.isOpen && !this.isMinimized) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    this.isOpen = true;
    this.isMinimized = false;
    this.container?.classList.add('chat-widget-open');
    this.container?.classList.remove('chat-widget-minimized');
    this.inputElement?.focus();
  }

  close(): void {
    this.isOpen = false;
    this.container?.classList.remove('chat-widget-open');
    this.container?.classList.remove('chat-widget-minimized');
  }

  minimize(): void {
    this.isMinimized = true;
    this.container?.classList.add('chat-widget-minimized');
  }

  setContext(context: ChatContext): void {
    this.currentContext = context;
    this.chatService.setContext(context);

    const contextBar = this.container?.querySelector('.chat-context-bar') as HTMLElement;
    const contextLabel = this.container?.querySelector('.chat-context-label');

    if (context.type === 'exercise' && contextBar && contextLabel) {
      contextBar.style.display = 'flex';
      contextLabel.textContent = `📝 Oppgavehjelp aktiv`;

      // Clear previous messages and show exercise context
      this.clearMessages();
      this.addMessage('assistant', `Jeg hjelper deg med denne oppgaven. Still spørsmål om hvordan du skal løse den, eller be meg forklare løsningen steg for steg.`);
    } else if (contextBar) {
      contextBar.style.display = 'none';
    }
  }

  clearContext(): void {
    this.currentContext = { type: 'general' };
    this.chatService.setContext(this.currentContext);
    this.chatService.clearHistory();

    const contextBar = this.container?.querySelector('.chat-context-bar') as HTMLElement;
    if (contextBar) {
      contextBar.style.display = 'none';
    }

    this.clearMessages();
    this.showWelcome();
  }

  private clearMessages(): void {
    if (this.messagesContainer) {
      this.messagesContainer.innerHTML = '';
    }
  }

  private showWelcome(): void {
    if (this.messagesContainer) {
      this.messagesContainer.innerHTML = `
        <div class="chat-welcome">
          <img class="chat-welcome-mascot" src="/birger.png" alt="Birger" />
          <h3>Hei, fremtidige finansfyrste! 🦈</h3>
          <p>Jeg er Birger - din finanshai! Klar for å dykke ned i pengeverdenen?</p>
          <div class="chat-topics">
            <span class="chat-topic" data-topic="renteregning">📊 Renteregning</span>
            <span class="chat-topic" data-topic="obligasjoner">📈 Obligasjoner</span>
            <span class="chat-topic" data-topic="aksjer">💹 Aksjer</span>
            <span class="chat-topic" data-topic="portefølje">📁 Portefølje</span>
            <span class="chat-topic" data-topic="investering">💰 Investering</span>
            <span class="chat-topic" data-topic="kapitalstruktur">🏛️ Kapitalstruktur</span>
          </div>
        </div>
      `;
      // Re-attach topic listeners
      const topics = this.messagesContainer.querySelectorAll('.chat-topic');
      topics.forEach(topic => {
        topic.addEventListener('click', () => {
          const topicName = topic.getAttribute('data-topic');
          if (topicName && this.inputElement) {
            this.inputElement.value = `Forklar ${topicName} for meg`;
            this.inputElement.focus();
          }
        });
      });
    }
  }

  private async sendMessage(): Promise<void> {
    if (!this.inputElement || !this.messagesContainer) return;

    const message = this.inputElement.value.trim();
    if (!message) return;

    // Clear welcome screen on first message
    const welcome = this.messagesContainer.querySelector('.chat-welcome');
    if (welcome) {
      welcome.remove();
    }

    // Add user message
    this.addMessage('user', message);

    // Clear input
    this.inputElement.value = '';
    this.inputElement.style.height = 'auto';

    // Show typing indicator
    this.showTypingIndicator();

    try {
      const response = await this.chatService.sendMessage(message);
      this.hideTypingIndicator();
      this.addMessage('assistant', response);
    } catch (error) {
      this.hideTypingIndicator();
      this.addMessage('assistant', 'Beklager, det oppstod en feil. Prøv igjen senere.');
      console.error('Chat error:', error);
    }
  }

  private addMessage(role: 'user' | 'assistant', content: string): void {
    if (!this.messagesContainer) return;

    const messageEl = document.createElement('div');
    messageEl.className = `chat-message chat-message-${role}`;

    // First render LaTeX, then format the rest
    const withLatex = this.renderLatex(content);
    const formattedContent = this.formatMessage(withLatex);

    messageEl.innerHTML = `
      <div class="chat-message-content">
        ${formattedContent}
      </div>
    `;

    this.messagesContainer.appendChild(messageEl);
    this.scrollToBottom();
  }

  private renderLatex(content: string): string {
    // Process display math first ($$...$$)
    content = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return `<div class="katex-display">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
      } catch (e) {
        console.error('KaTeX error:', e);
        return `$$${math}$$`;
      }
    });

    // Then process inline math ($...$) - be careful not to match already rendered katex
    content = content.replace(/\$([^$<>\n]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
      } catch (e) {
        console.error('KaTeX error:', e);
        return `$${math}$`;
      }
    });

    return content;
  }

  private formatMessage(content: string): string {
    // Convert **bold** to <strong> (but not inside katex spans)
    content = content.replace(/\*\*([^*<]+)\*\*/g, '<strong>$1</strong>');

    // Convert *italic* to <em> (but not inside katex spans)
    content = content.replace(/(?<![a-z])\*([^*<]+)\*(?![a-z])/g, '<em>$1</em>');

    // Convert newlines to <br>
    content = content.replace(/\n/g, '<br>');

    // Convert bullet points (only at start of line, before any HTML)
    content = content.replace(/(^|<br>)- ([^<])/g, '$1• $2');

    return content;
  }

  private showTypingIndicator(): void {
    if (!this.messagesContainer) return;

    const indicator = document.createElement('div');
    indicator.className = 'chat-typing-indicator';
    indicator.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    this.messagesContainer.appendChild(indicator);
    this.scrollToBottom();
  }

  private hideTypingIndicator(): void {
    const indicator = this.messagesContainer?.querySelector('.chat-typing-indicator');
    indicator?.remove();
  }

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  // Public method for opening with exercise context
  openWithExercise(exerciseText: string, exerciseSolution: string): void {
    this.setContext({
      type: 'exercise',
      exerciseText,
      exerciseSolution
    });
    this.open();
  }
}
