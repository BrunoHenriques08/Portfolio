import { FiCode, FiCoffee, FiHeart, FiStar, FiZap, FiTrendingUp, FiTarget, FiLayers, FiPlus, FiGithub } from 'react-icons/fi'

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
    }
  ]


  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <FiZap className="title-icon" />
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
                  <span className="code-comment">// A Iniciar projetos...</span>
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
          </div>
          
          {/* Segunda Card - Projetos em Construção e Tipos */}
          <div className="hero-card card" style={{ marginTop: '2rem' }}>
            <div className="hero-content">
              <h3>
                <FiCode size={24} /> &nbsp;
                Projetos em Construção
              </h3>
              <p className="hero-description">
                Estou a construir um portfólio de soluções práticas que demonstram o meu potencial técnico. 
                Cada linha de código é uma oportunidade de aprender e inovar.
              </p>
              


              {/* Tipos de Projetos dentro da mesma card */}
              <div className="project-types" style={{ marginTop: '3rem' }}>
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
                </div>
                              {/* Status Indicators - Separados dos tipos de projetos */}
              <div className="status-indicators">
                <div className="status-item">
                  <div className="status-dot developing"></div>
                  <span>Desenvolvimento</span>
                </div>
                <div className="status-item">
                  <div className="status-dot planning"></div>
                  <span>Planeamento</span>
                </div>
              </div>
              </div>
              
            </div>


        {/* Ideias em Movimento - Comentada temporariamente
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
        </div> */}


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
