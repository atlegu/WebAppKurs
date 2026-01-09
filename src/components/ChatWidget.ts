// ChatWidget.ts - Floating chat widget UI component

import { ChatService, ChatContext } from '../services/ChatService';

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
      <!-- Floating button -->
      <button class="chat-fab" aria-label="Åpne finansbot">
        <svg class="chat-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <svg class="chat-fab-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <!-- Chat panel -->
      <div class="chat-panel">
        <div class="chat-header">
          <div class="chat-header-info">
            <span class="chat-bot-avatar">🤖</span>
            <div class="chat-header-text">
              <span class="chat-bot-name">Finansbot</span>
              <span class="chat-bot-status">Klar til å hjelpe</span>
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
            <div class="chat-welcome-icon">💰</div>
            <h3>Hei! Jeg er Finansboten</h3>
            <p>Jeg kan hjelpe deg med spørsmål om:</p>
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
          <div class="chat-welcome-icon">💰</div>
          <h3>Hei! Jeg er Finansboten</h3>
          <p>Jeg kan hjelpe deg med spørsmål om:</p>
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

    // Parse markdown-like formatting
    const formattedContent = this.formatMessage(content);

    messageEl.innerHTML = `
      <div class="chat-message-content">
        ${formattedContent}
      </div>
    `;

    this.messagesContainer.appendChild(messageEl);
    this.scrollToBottom();
  }

  private formatMessage(content: string): string {
    // Convert **bold** to <strong>
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Convert *italic* to <em>
    content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Convert newlines to <br>
    content = content.replace(/\n/g, '<br>');

    // Convert bullet points
    content = content.replace(/^- (.+)$/gm, '• $1');

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
