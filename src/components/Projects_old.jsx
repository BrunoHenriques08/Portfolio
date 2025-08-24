import { FiExternalLink, FiGithub, FiCode, FiSmartphone, FiGlobe, FiPlus, FiLayers, FiZap } from 'react-icons/fi'

const Projects = () => {
  const skillAreas = [
    {
      id: 1,
      title: 'Desenvolvimento Web',
      description: 'Preparado para criar aplicações web modernas e responsivas com as melhores práticas.',
      icon: '🌐',
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js'],
      status: 'ready'
    },
    {
      id: 2,
      title: 'Sistemas & Redes',
      description: 'Competências em administração de sistemas, redes e infraestrutura de TI.',
      icon: '�️',
      technologies: ['Windows Server', 'Linux', 'MySQL', 'Networking', 'Security'],
      status: 'ready'
    },
    {
      id: 3,
      title: 'Automação & Scripts',
      description: 'Desenvolvimento de soluções automatizadas para otimizar processos empresariais.',
      icon: '⚡',
      technologies: ['Python', 'PowerShell', 'Batch', 'APIs', 'Automation'],
      status: 'ready'
    }
  ]

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">
            Laboratório de ideias em construção - Pronto para transformar conceitos em realidade
          </p>
        </div>

        {/* Área principal de "Em Construção" */}
        <div className="projects-coming-soon">
          <div className="coming-soon-card card">
            <div className="coming-soon-icon">
              <FiCode size={48} />
            </div>
            <h3>Projetos em Desenvolvimento</h3>
            <p>
              Estou a trabalhar em projetos inovadores que demonstrarão as minhas competências técnicas. 
              Esta secção será atualizada em breve com soluções reais e impactantes.
            </p>
            <div className="coming-soon-features">
              <div className="feature-item">
                <FiLayers />
                <span>Aplicações Full Stack</span>
              </div>
              <div className="feature-item">
                <FiZap />
                <span>Automação & Scripts</span>
              </div>
              <div className="feature-item">
                <FiGlobe />
                <span>Soluções Web</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competências Técnicas */}
        <div className="skills-showcase">
          <h3 className="showcase-title">Áreas de Especialização</h3>
          <div className="skills-grid">
            {skillAreas.map((skill) => (
              <div key={skill.id} className="skill-card card">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <h4 className="skill-title">{skill.title}</h4>
                </div>
                
                <p className="skill-description">{skill.description}</p>
                
                <div className="skill-technologies">
                  {skill.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="skill-status">
                  <span className="status-badge ready">
                    ✓ Preparado para Projetos
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta">
          <div className="cta-card card">
            <FiPlus size={32} />
            <h3>Vamos Colaborar?</h3>
            <p>
              Tenho as competências e a motivação para transformar as suas ideias em soluções digitais. 
              Entre em contacto para discutirmos o seu próximo projeto.
            </p>
            <a href="#contact" className="cta-button">
              Iniciar Conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
