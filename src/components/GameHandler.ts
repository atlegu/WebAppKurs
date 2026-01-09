import { DragGameContent } from '../types/course';

export class GameHandler {
  private games: Map<string, DragGameContent> = new Map();
  private onGameComplete?: (gameId: string, score: number, total: number) => void;

  constructor(onGameComplete?: (gameId: string, score: number, total: number) => void) {
    this.onGameComplete = onGameComplete;
  }

  registerGame(game: DragGameContent): void {
    this.games.set(game.id, game);
  }

  reset(): void {
    this.games.clear();
  }

  attachEventListeners(container: HTMLElement): void {
    // Set up drag and drop for all games
    this.setupDragAndDrop(container);

    // Set up check and reset buttons
    this.setupButtons(container);
  }

  private setupDragAndDrop(container: HTMLElement): void {
    const items = container.querySelectorAll('.draggame-item');
    const dropzones = container.querySelectorAll('.draggame-category-dropzone');
    const itemPools = container.querySelectorAll('.draggame-items');

    items.forEach(item => {
      item.addEventListener('dragstart', (e) => this.handleDragStart(e as DragEvent));
      item.addEventListener('dragend', (e) => this.handleDragEnd(e as DragEvent));

      // Touch support
      item.addEventListener('touchstart', (e) => this.handleTouchStart(e as TouchEvent), { passive: false });
      item.addEventListener('touchmove', (e) => this.handleTouchMove(e as TouchEvent), { passive: false });
      item.addEventListener('touchend', (e) => this.handleTouchEnd(e as TouchEvent));
    });

    dropzones.forEach(zone => {
      zone.addEventListener('dragover', (e) => this.handleDragOver(e as DragEvent));
      zone.addEventListener('dragleave', (e) => this.handleDragLeave(e as DragEvent));
      zone.addEventListener('drop', (e) => this.handleDrop(e as DragEvent));
    });

    // Allow dropping back to pool
    itemPools.forEach(pool => {
      pool.addEventListener('dragover', (e) => this.handleDragOver(e as DragEvent));
      pool.addEventListener('dragleave', (e) => this.handleDragLeave(e as DragEvent));
      pool.addEventListener('drop', (e) => this.handleDropToPool(e as DragEvent));
    });
  }

  private setupButtons(container: HTMLElement): void {
    const checkButtons = container.querySelectorAll('.draggame-check');
    const resetButtons = container.querySelectorAll('.draggame-reset');

    checkButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const gameId = btn.getAttribute('data-game-id');
        if (gameId) this.checkAnswers(gameId);
      });
    });

    resetButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const gameId = btn.getAttribute('data-game-id');
        if (gameId) this.resetGame(gameId);
      });
    });
  }

  private handleDragStart(e: DragEvent): void {
    const target = e.target as HTMLElement;
    target.classList.add('dragging');
    e.dataTransfer?.setData('text/plain', target.getAttribute('data-item-id') || '');
    e.dataTransfer!.effectAllowed = 'move';
  }

  private handleDragEnd(e: DragEvent): void {
    const target = e.target as HTMLElement;
    target.classList.remove('dragging');
  }

  private handleDragOver(e: DragEvent): void {
    e.preventDefault();
    e.dataTransfer!.dropEffect = 'move';
    const target = e.currentTarget as HTMLElement;
    target.classList.add('drag-over');
  }

  private handleDragLeave(e: DragEvent): void {
    const target = e.currentTarget as HTMLElement;
    target.classList.remove('drag-over');
  }

  private handleDrop(e: DragEvent): void {
    e.preventDefault();
    const dropzone = e.currentTarget as HTMLElement;
    dropzone.classList.remove('drag-over');

    const itemId = e.dataTransfer?.getData('text/plain');
    const draggedItem = document.querySelector(`[data-item-id="${itemId}"]`);

    if (draggedItem) {
      // Remove any existing feedback classes
      draggedItem.classList.remove('correct', 'incorrect');
      dropzone.appendChild(draggedItem);
    }
  }

  private handleDropToPool(e: DragEvent): void {
    e.preventDefault();
    const pool = e.currentTarget as HTMLElement;
    pool.classList.remove('drag-over');

    const itemId = e.dataTransfer?.getData('text/plain');
    const draggedItem = document.querySelector(`[data-item-id="${itemId}"]`);

    if (draggedItem) {
      draggedItem.classList.remove('correct', 'incorrect');
      pool.appendChild(draggedItem);
    }
  }

  // Touch support for mobile
  private touchDragElement: HTMLElement | null = null;
  private touchClone: HTMLElement | null = null;

  private handleTouchStart(e: TouchEvent): void {
    const target = e.target as HTMLElement;
    if (!target.classList.contains('draggame-item')) return;

    e.preventDefault();
    this.touchDragElement = target;
    target.classList.add('dragging');

    // Create a visual clone for dragging
    this.touchClone = target.cloneNode(true) as HTMLElement;
    this.touchClone.classList.add('touch-clone');
    document.body.appendChild(this.touchClone);

    const touch = e.touches[0];
    this.updateTouchClonePosition(touch);
  }

  private handleTouchMove(e: TouchEvent): void {
    if (!this.touchDragElement || !this.touchClone) return;

    e.preventDefault();
    const touch = e.touches[0];
    this.updateTouchClonePosition(touch);

    // Highlight dropzone under touch
    const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);
    const dropzones = document.querySelectorAll('.draggame-category-dropzone, .draggame-items');

    dropzones.forEach(zone => zone.classList.remove('drag-over'));

    if (elementUnderTouch) {
      const dropzone = elementUnderTouch.closest('.draggame-category-dropzone, .draggame-items');
      if (dropzone) {
        dropzone.classList.add('drag-over');
      }
    }
  }

  private handleTouchEnd(e: TouchEvent): void {
    if (!this.touchDragElement || !this.touchClone) return;

    const touch = e.changedTouches[0];
    const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);

    // Find the dropzone
    if (elementUnderTouch) {
      const dropzone = elementUnderTouch.closest('.draggame-category-dropzone');
      const pool = elementUnderTouch.closest('.draggame-items');

      if (dropzone) {
        this.touchDragElement.classList.remove('correct', 'incorrect');
        dropzone.appendChild(this.touchDragElement);
      } else if (pool) {
        this.touchDragElement.classList.remove('correct', 'incorrect');
        pool.appendChild(this.touchDragElement);
      }
    }

    // Cleanup
    this.touchDragElement.classList.remove('dragging');
    this.touchClone.remove();
    this.touchDragElement = null;
    this.touchClone = null;

    document.querySelectorAll('.drag-over').forEach(zone => zone.classList.remove('drag-over'));
  }

  private updateTouchClonePosition(touch: Touch): void {
    if (!this.touchClone) return;
    this.touchClone.style.left = `${touch.clientX - 50}px`;
    this.touchClone.style.top = `${touch.clientY - 20}px`;
  }

  private checkAnswers(gameId: string): void {
    const game = this.games.get(gameId);
    if (!game) return;

    const gameContainer = document.querySelector(`[data-game-id="${gameId}"]`);
    if (!gameContainer) return;

    let correct = 0;
    const total = game.items.length;

    game.items.forEach(item => {
      const itemElement = gameContainer.querySelector(`[data-item-id="${item.id}"]`);
      if (!itemElement) return;

      const parentDropzone = itemElement.closest('.draggame-category-dropzone');
      const categoryId = parentDropzone?.getAttribute('data-category');

      itemElement.classList.remove('correct', 'incorrect');

      if (categoryId === item.correctCategory) {
        itemElement.classList.add('correct');
        correct++;
      } else if (parentDropzone) {
        itemElement.classList.add('incorrect');
      }
    });

    // Show feedback
    const feedbackEl = gameContainer.querySelector('.draggame-feedback');
    const scoreEl = gameContainer.querySelector('.draggame-score');
    const messageEl = gameContainer.querySelector('.draggame-message');

    if (feedbackEl && scoreEl && messageEl) {
      feedbackEl.classList.add('show');
      scoreEl.textContent = `${correct} av ${total} riktig`;

      if (correct === total) {
        feedbackEl.classList.add('success');
        feedbackEl.classList.remove('partial');
        messageEl.textContent = game.successMessage || 'Gratulerer! Du har plassert alle elementene riktig!';
      } else if (correct > 0) {
        feedbackEl.classList.add('partial');
        feedbackEl.classList.remove('success');
        messageEl.textContent = 'Bra jobbet! Se på de røde elementene og prøv igjen.';
      } else {
        feedbackEl.classList.remove('success', 'partial');
        messageEl.textContent = 'Prøv igjen! Tenk over hva som hører til hvor på balansen.';
      }
    }

    // Callback
    if (this.onGameComplete) {
      this.onGameComplete(gameId, correct, total);
    }
  }

  private resetGame(gameId: string): void {
    const gameContainer = document.querySelector(`[data-game-id="${gameId}"]`);
    if (!gameContainer) return;

    const pool = gameContainer.querySelector('.draggame-items');
    const items = gameContainer.querySelectorAll('.draggame-item');
    const feedbackEl = gameContainer.querySelector('.draggame-feedback');

    items.forEach(item => {
      item.classList.remove('correct', 'incorrect');
      pool?.appendChild(item);
    });

    if (feedbackEl) {
      feedbackEl.classList.remove('show', 'success', 'partial');
    }
  }
}
