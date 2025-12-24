class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: white;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    font-family: sans-serif;
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 60px;
                }
                
                .logo-img {
                    width: 140px;
                    height: auto;
                    display: block;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.2rem;
                }
                
                .nav-links a {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.9rem;
                    transition: color 0.3s;
                }
                
                .nav-links a:hover {
                    color: #d97706;
                }
                
                .cta-button {
                    background-color: #d97706;
                    color: white;
                    padding: 0.5rem 1.2rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    font-size: 0.85rem;
                    text-decoration: none;
                    white-space: nowrap;
                }

                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #4b5563;
                }
                
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background-color: white;
                    padding: 1rem;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    flex-direction: column;
                }
                
                .mobile-menu.open {
                    display: flex;
                }
                
                .mobile-menu a {
                    padding: 0.75rem 1rem;
                    color: #4b5563;
                    text-decoration: none;
                    border-radius: 8px;
                }

                @media (max-width: 1024px) {
                    .nav-links, .cta-button:not(.mobile-cta) {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <div class="navbar-container">
                <a href="#hero" class="logo">
                    <img class="logo-img" src="img/LOGO-COLETIVO-BEER-AMARELO-E-PRETO-RECUO-SEM-FUNDO.png" alt="Logo">
                </a>
                
                <div class="nav-links">
                    <a href="#hero">Home</a>
                    <a href="#manifesto">Manifesto</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#crowdfunding">Crowdfunding</a>
                    <a href="#beerpay">BeerPay</a>
                    <a href="#team">Time</a>
                    <a href="#partners">Parceiros</a>
                    <a href="#contact">Contato</a>
                </div>
                
                <a href="#beerpay" class="cta-button">Conheça o BeerPay</a>
                
                <button class="mobile-menu-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                
                <div class="mobile-menu">
                    <a href="#hero">Home</a>
                    <a href="#manifesto">Manifesto</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#crowdfunding">Crowdfunding</a>
                    <a href="#beerpay">BeerPay</a>
                    <a href="#team">Time</a>
                    <a href="#partners">Parceiros</a>
                    <a href="#contact">Contato</a>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        const allLinks = this.shadowRoot.querySelectorAll('a[href^="#"]');
        
        // Abre/Fecha Menu
        menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('open');
        });

        // Scroll Suave para todos os links da Navbar
        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    mobileMenu.classList.remove('open'); // Fecha o menu se for mobile

                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Fecha ao clicar fora
        document.addEventListener('click', (e) => {
            if (!this.shadowRoot.contains(e.target)) {
                mobileMenu.classList.remove('open');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);