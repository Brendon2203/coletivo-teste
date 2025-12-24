class CustomTeamCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

connectedCallback() {
    const image = this.getAttribute('image') || '';
    const name = this.getAttribute('name') || '';
    const role = this.getAttribute('role') || '';
    const description = this.getAttribute('description') || '';
    
    // O segredo está aqui: se você não definir nada, ele usa 'top' por padrão
    // para priorizar a cabeça em fotos verticais.
    const position = this.getAttribute('position') || 'top'; 

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .team-card {
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }
        .team-card:hover { transform: translateY(-5px); }
        .team-image {
          width: 100%;
          height: 550px;
          object-fit: cover;
          object-position: center; 
          background-color: #f9f9f9;
        }
        .team-content { padding: 1.5rem; text-align: center; }
        .team-name { font-size: 1.25rem; font-weight: 600; color: #92400e; margin: 0; }
        .team-role { color: #d97706; font-weight: 500; font-size: 0.9rem; margin-bottom: 0.5rem; display: block; }
        p { font-size: 0.9rem; color: #4b5563; line-height: 1.4; margin: 0; }
      </style>

      <div class="team-card">
        <img src="${image}" alt="${name}" class="team-image">
        <div class="team-content">
          <h3 class="team-name">${name}</h3>
          <span class="team-role">${role}</span>
          <p>${description}</p>
        </div>
      </div>
    `;

    feather.replace({ root: this.shadowRoot });
  }
}

customElements.define('custom-team-card', CustomTeamCard);
