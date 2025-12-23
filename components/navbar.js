class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
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
                }
                
                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #d97706;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #4b5563;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .nav-links a:hover {
                    color: #d97706;
                }
                
                .cta-button {
                    background-color: #d97706;
                    color: white;
                    padding: 0.5rem 1.5rem;
                    border-radius: 9999px;
                    font-weight: 600;
                    transition: background-color 0.3s;
                }
                
                .cta-button:hover {
                    background-color: #b45309;
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                .mobile-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: white;
                    padding: 1rem;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                
                .mobile-menu.open {
                    display: block;
                }
                
                .mobile-menu a {
                    display: block;
                    padding: 0.75rem 0;
                    color: #4b5563;
                    text-decoration: none;
                }
                
                @media (max-width: 768px) {
                    .nav-links, .cta-button {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <div class="navbar-container">
                <a href="/" class="logo">Coletivo Beer</a>
                
                <div class="nav-links">
                    <a href="/">Home</a>
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
                    <i data-feather="menu"></i>
                </button>
                
                <div class="mobile-menu">
                    <a href="/">Home</a>
                    <a href="#manifesto">Manifesto</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#crowdfunding">Crowdfunding</a>
                    <a href="#beerpay">BeerPay</a>
                    <a href="#team">Time</a>
                    <a href="#partners">Parceiros</a>
                    <a href="#contact">Contato</a>
                    <a href="#beerpay" class="cta-button block mt-2">Conheça o BeerPay</a>
                </div>
            </div>
        `;
        
        // Mobile menu toggle
        const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            feather.replace();
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.shadowRoot.contains(e.target)) {
                mobileMenu.classList.remove('open');
            }
        });
        
        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);