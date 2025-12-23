class CustomTeamCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const image = this.getAttribute('image') || 'https://via.placeholder.com/300x400?text=Team+Member';
    const name = this.getAttribute('name') || 'Team Member';
    const role = this.getAttribute('role') || 'Role';
    const description = this.getAttribute('description') || 'Team member description goes here.';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .team-card {
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        .team-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .team-content { padding: 1.5rem; }
        .team-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #92400e;
        }
        .team-role {
          color: #d97706;
          font-weight: 500;
          margin-bottom: 1rem;
          display: block;
        }
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
