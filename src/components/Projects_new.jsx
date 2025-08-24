import { FiCode, FiCoffee, FiHeart, FiStar, FiZap, FiTrendingUp, FiTarget, FiRocket, FiLayers, FiPlus, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projectTypes = [
    {
      id: 1,
      title: 'Aplicações Web Dinâmicas',
      description: 'Sites responsivos e aplicações web com funcionalidades avançadas',
      icon: '🌐',
      technologies: ['React', 'JavaScript', 'CSS3', 'Node.js'],
      potential: 'E-commerce, Dashboards, Portfolios',
      color: '#61dafb'
    },
    {
      id: 2,
      title: 'Automação Inteligente',
      description: 'Scripts e ferramentas para otimizar processos empresariais',
      icon: '⚙️',
      technologies: ['Python', 'PowerShell', 'APIs', 'Batch'],
      potential: 'Relatórios automáticos, Backup, Monitorização',
      color: '#f39c12'
    },
    {
      id: 3,
      title: 'Soluções de Sistema',
      description: 'Administração, configuração e manutenção de infraestruturas',
      icon: '🔧',
      technologies: ['Windows Server', 'Linux', 'MySQL', 'Networks'],
      potential: 'Servidores, Bases de dados, Redes',
      color: '#e74c3c'
    }
  ]

  const ideas = [
    { icon: '💡', text: 'Sistema de gestão escolar', category: 'web' },
    { icon: '📊', text: 'Dashboard de monitorização', category: 'automation' },
    { icon: '🛒', text: 'Loja online personalizada', category: 'web' },
    { icon: '📱', text: 'App de produtividade', category: 'mobile' },
    { icon: '🔐', text: 'Ferramenta de backup', category: 'system' },
    { icon: '📈', text: 'Análise de dados', category: 'automation' }
  ]

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <FiRocket className="title-icon" />
            Laboratório de Projetos
          </h2>
          <p className="section-subtitle">
            Onde as ideias ganham vida através da tecnologia
          </p>
        </div>

        {/* Hero Card - Estado Atual */}
        <div className="projects-hero">
          <div className="hero-card card">
            <div className="hero-animation">
              <div className="code-lines">
                <div className="code-line">
                  <span className="code-comment">// Inicializando projetos...</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">const</span> 
                  <span className="code-variable"> futureProjects</span> 
                  <span className="code-operator"> = </span>
                  <span className="code-string">'em desenvolvimento'</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">if</span>
                  <span className="code-parenthesis">(</span>
                  <span className="code-variable">ready</span>
                  <span className="code-parenthesis">)</span>
                  <span className="code-bracket"> &#123;</span>
                </div>
                <div className="code-line indent">
                  <span className="code-function">createAmazingThings</span>
                  <span className="code-parenthesis">()</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">&#125;</span>
                </div>
              </div>
            </div>
            
            <div className="hero-content">
              <h3>
                <FiCode size={24} />
                Projetos em Construção
              </h3>
              <p className="hero-description">
                Estou a construir um portfólio de soluções práticas que demonstram o meu potencial técnico. 
                Cada linha de código é uma oportunidade de aprender e inovar.
              </p>
              
              <div className="status-indicators">
                <div className="status-item">
                  <div className="status-dot developing"></div>
                  <span>Em desenvolvimento</span>
                </div>
                <div className="status-item">
                  <div className="status-dot planning"></div>
                  <span>Planeamento</span>
                </div>
                <div className="status-item">
                  <div className="status-dot ready"></div>
                  <span>Pronto para colaborar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tipos de Projetos */}
        <div className="project-types">
          <h3 className="section-subtitle">
            <FiTarget />
            O que posso criar para si
          </h3>
          <div className="types-grid">
            {projectTypes.map((type) => (
              <div key={type.id} className="type-card card" style={{'--accent-color': type.color}}>
                <div className="type-header">
                  <span className="type-icon">{type.icon}</span>
                  <h4>{type.title}</h4>
                </div>
                
                <p className="type-description">{type.description}</p>
                
                <div className="type-technologies">
                  {type.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="type-examples">
                  <small>Exemplos: {type.potential}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ideias em Movimento */}
        <div className="ideas-section">
          <h3 className="section-subtitle">
            <FiZap />
            Ideias em movimento
          </h3>
          <div className="ideas-carousel">
            {ideas.map((idea, index) => (
              <div key={index} className="idea-bubble" style={{'--delay': `${index * 0.2}s`}}>
                <span className="idea-icon">{idea.icon}</span>
                <span className="idea-text">{idea.text}</span>
              </div>
            ))}
          </div>
          <p className="ideas-note">
            Estas são apenas algumas das muitas possibilidades. Que projeto podemos criar juntos?
          </p>
        </div>

        {/* GitHub Showcase */}
        <div className="github-section">
          <div className="github-card card">
            <FiGithub size={32} />
            <h3>Código em Evolução</h3>
            <p>
              Acompanhe o meu progresso no GitHub. Cada commit é um passo em direção à excelência.
            </p>
            <div className="github-stats">
              <div className="stat-item">
                <FiCode />
                <span>Linguagens dominadas</span>
              </div>
              <div className="stat-item">
                <FiTrendingUp />
                <span>Sempre aprendendo</span>
              </div>
              <div className="stat-item">
                <FiHeart />
                <span>Paixão pelo código</span>
              </div>
            </div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
            >
              Visitar GitHub
            </a>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="projects-cta">
          <div className="cta-card card">
            <div className="cta-animation">
              <FiStar className="star star-1" />
              <FiStar className="star star-2" />
              <FiStar className="star star-3" />
            </div>
            
            <h3>
              <FiPlus />
              Vamos criar algo incrível juntos?
            </h3>
            
            <p>
              Tenho as competências técnicas, a criatividade e a determinação para transformar 
              a sua visão em realidade digital. O próximo projeto pode ser nosso!
            </p>
            
            <div className="cta-features">
              <div className="feature">
                <FiZap />
                <span>Desenvolvimento ágil</span>
              </div>
              <div className="feature">
                <FiHeart />
                <span>Atenção aos detalhes</span>
              </div>
              <div className="feature">
                <FiTrendingUp />
                <span>Crescimento contínuo</span>
              </div>
            </div>
            
            <a href="#contact" className="cta-button">
              <FiRocket />
              Começar Projeto
            </a>
          </div>
        </div>

        {/* Nota motivacional */}
        <div className="motivation-note">
          <div className="note-content">
            <FiCoffee />
            <p>
              "O melhor momento para plantar uma árvore foi há 20 anos. 
              O segundo melhor momento é agora." - Provérbio chinês
            </p>
            <small>Cada projeto é uma nova oportunidade de crescimento.</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
