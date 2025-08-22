import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack',
      company: 'Tech Solutions Lda',
      location: 'Lisboa, Portugal',
      period: '2023 - Presente',
      type: 'Tempo Integral',
      description: [
        'Desenvolvimento de aplicações web completas utilizando React e Node.js',
        'Implementação de APIs RESTful e integração com bases de dados',
        'Colaboração em equipa ágil com metodologias Scrum',
        'Mentoria de desenvolvedores júnior'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 2,
      title: 'Desenvolvedor Frontend',
      company: 'Digital Agency',
      location: 'Porto, Portugal',
      period: '2022 - 2023',
      type: 'Freelance',
      description: [
        'Criação de interfaces responsivas e interativas com React',
        'Otimização de performance e SEO em aplicações web',
        'Implementação de designs complexos em código limpo',
        'Testes unitários e de integração'
      ],
      technologies: ['React', 'TypeScript', 'SASS', 'Jest', 'Figma']
    },
    {
      id: 3,
      title: 'Desenvolvedor Junior',
      company: 'StartUp Inovadora',
      location: 'Braga, Portugal',
      period: '2021 - 2022',
      type: 'Estágio',
      description: [
        'Desenvolvimento de funcionalidades frontend em React',
        'Manutenção e correção de bugs em aplicações existentes',
        'Participação em code reviews e sessões de brainstorming',
        'Aprendizagem contínua de novas tecnologias'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'MongoDB']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Licenciatura em Engenharia Informática',
      school: 'Universidade do Minho',
      location: 'Braga, Portugal',
      period: '2018 - 2021',
      description: 'Foco em desenvolvimento de software, algoritmos e estruturas de dados.'
    },
    {
      id: 2,
      degree: 'Certificação React Developer',
      school: 'Meta (Facebook)',
      location: 'Online',
      period: '2022',
      description: 'Certificação oficial em desenvolvimento React avançado.'
    }
  ]

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiência & Formação</h2>
          <p className="section-subtitle">
            A minha jornada profissional e académica
          </p>
        </div>

        <div className="experience-content">
          {/* Experiência Profissional */}
          <div className="experience-section">
            <h3 className="subsection-title">
              <FiBriefcase />
              Experiência Profissional
            </h3>
            
            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content card experience-card">
                    <div className="experience-header">
                      <h4 className="experience-title">{exp.title}</h4>
                      <span className="experience-type">{exp.type}</span>
                    </div>
                    
                    <div className="experience-meta">
                      <span className="experience-company">{exp.company}</span>
                      <div className="experience-details">
                        <span className="experience-period">
                          <FiCalendar />
                          {exp.period}
                        </span>
                        <span className="experience-location">
                          <FiMapPin />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="experience-description">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <div className="experience-technologies">
                      {exp.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formação */}
          <div className="education-section">
            <h3 className="subsection-title">
              🎓
              Formação
            </h3>
            
            <div className="education-grid">
              {education.map((edu) => (
                <div key={edu.id} className="education-card card">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <div className="education-school">{edu.school}</div>
                  <div className="education-meta">
                    <span className="education-period">
                      <FiCalendar />
                      {edu.period}
                    </span>
                    <span className="education-location">
                      <FiMapPin />
                      {edu.location}
                    </span>
                  </div>
                  <p className="education-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
