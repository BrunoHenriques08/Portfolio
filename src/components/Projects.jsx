import { FiExternalLink, FiGithub, FiCode, FiSmartphone, FiGlobe } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Uma plataforma completa de e-commerce com React, Node.js e MySQL. Inclui sistema de pagamentos, gestão de inventário e dashboard administrativo.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MySQL', 'Stripe', 'JWT'],
      liveUrl: 'https://projeto1.com',
      githubUrl: 'https://github.com/user/projeto1',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicação de gestão de tarefas com funcionalidades de colaboração em tempo real, drag & drop e notificações.',
      image: '📋',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: 'https://projeto2.com',
      githubUrl: 'https://github.com/user/projeto2',
      category: 'web'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Website pessoal responsivo com animações suaves, modo escuro/claro e otimizado para SEO.',
      image: '💼',
      technologies: ['React', 'Vite', 'CSS3', 'Framer Motion'],
      liveUrl: 'https://portfolio.com',
      githubUrl: 'https://github.com/user/portfolio',
      category: 'web'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Aplicação de clima com geolocalização, previsões detalhadas e interface intuitiva.',
      image: '🌤️',
      technologies: ['React', 'API REST', 'Geolocation', 'Charts.js'],
      liveUrl: 'https://weather.com',
      githubUrl: 'https://github.com/user/weather',
      category: 'mobile'
    }
  ]

  const categories = [
    { id: 'all', label: 'Todos', icon: FiCode },
    { id: 'web', label: 'Web', icon: FiGlobe },
    { id: 'mobile', label: 'Mobile', icon: FiSmartphone }
  ]

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">
            Alguns dos projetos que desenvolvi ao longo da minha jornada
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink />
                    Ver Projeto
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
