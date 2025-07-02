import './style.css'

interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

interface Module {
  id: string;
  title: string;
  content: string;
  order: number;
}

class SustainableFinanceApp {
  private app: HTMLElement;
  private course: Course;

  constructor() {
    this.app = document.querySelector<HTMLDivElement>('#app')!;
    this.course = {
      id: '1',
      title: 'Bærekraftig Foretaksfinans',
      description: 'Lær om bærekraftige finansstrategier for moderne foretak',
      modules: [
        {
          id: 'm1',
          title: 'Introduksjon til bærekraftig finans',
          content: 'Grunnleggende konsepter og prinsipper',
          order: 1
        },
        {
          id: 'm2',
          title: 'ESG-faktorer i foretaksfinans',
          content: 'Environmental, Social, and Governance aspekter',
          order: 2
        },
        {
          id: 'm3',
          title: 'Grønne investeringer',
          content: 'Investeringsstrategier for bærekraftig utvikling',
          order: 3
        }
      ]
    };
    
    this.render();
  }

  private render(): void {
    this.app.innerHTML = `
      <div>
        <h1>${this.course.title}</h1>
        <p class="read-the-docs">${this.course.description}</p>
        
        <div class="modules">
          <h2>Kursmoduler</h2>
          ${this.renderModules()}
        </div>
        
        <div class="card">
          <button id="start-course" type="button">Start kurset</button>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderModules(): string {
    return this.course.modules
      .sort((a, b) => a.order - b.order)
      .map(module => `
        <div class="module-card" data-module-id="${module.id}">
          <h3>${module.title}</h3>
          <p>${module.content}</p>
        </div>
      `)
      .join('');
  }

  private attachEventListeners(): void {
    const startButton = document.querySelector('#start-course');
    startButton?.addEventListener('click', () => {
      alert('Velkommen til kurset i Bærekraftig Foretaksfinans!');
    });

    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
      card.addEventListener('click', (e) => {
        const moduleId = (e.currentTarget as HTMLElement).dataset.moduleId;
        const module = this.course.modules.find(m => m.id === moduleId);
        if (module) {
          alert(`Du valgte: ${module.title}`);
        }
      });
    });
  }
}

new SustainableFinanceApp();