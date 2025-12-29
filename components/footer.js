class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1f2937;
                    color: #f3f4f6;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #f59e0b;
                    margin-bottom: 1rem;
                    display: block;
                }
                
                .footer-description {
                    color: #9ca3af;
                    margin-bottom: 1.5rem;
                }

                  .logo {
                    display: flex;
                    align-items: center;
                }

                .logo-img {
                    width: 160px; /* Tamanho reduzido para não quebrar */
                    height: auto;
                    max-width: 100%;
                }
                
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-links a {
                    color: #f3f4f6;
                    transition: color 0.3s;
                }
                
                .social-links a:hover {
                    color: #f59e0b;
                }
                
                .footer-heading {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: white;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-links a {
                    color: #9ca3af;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .footer-links a:hover {
                    color: #f59e0b;
                }
                
                .footer-bottom {
                    border-top: 1px solid #374151;
                    padding: 1.5rem 2rem;
                    text-align: center;
                    color: #9ca3af;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <a href="/" class="logo">
                    <img class="logo-img" src="img/LOGO-COLETIVO-BEER-AMARELO-E-BRANCO-RECUO-SEM-FUNDO.png" alt="Logo Coletivo Beer">
                </a>
                    <p class="footer-description">Tecnologia, financiamento e comunidade para fortalecer o mercado cervejeiro brasileiro.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                        <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                        <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
                        <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Links Rápidos</h3>
                    <div class="footer-links">
                        <a href="/">Home</a>
                        <a href="#manifesto">Manifesto</a>
                        <a href="#roadmap">Roadmap</a>
                        <a href="#crowdfunding">Crowdfunding</a>
                        <a href="#beerpay">BeerPay</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Institucional</h3>
                    <div class="footer-links">
                        <a href="#team">Nosso Time</a>
                        <a href="#partners">Parceiros</a>
                        <a href="#contact">Contato</a>
                        <a href="Politica-de-Privacidade/index.html">Política de Privacidade</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Contato</h3>
                    <div class="footer-links">
                        <a href="mailto:contato@coletivobeer.com.br"><i data-feather="mail" class="mr-2"></i>contato@coletivobeer.com.br</a>
                        <a><i data-feather="map-pin" class="mr-2"></i> Vila-Velha/ES </a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© ${new Date().getFullYear()} Coletivo Beer. Todos os direitos reservados. CNPJ: 46.930.910/0001-74</p>
            </div>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);