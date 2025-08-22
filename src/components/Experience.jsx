import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Estágio - Técnico operador das Tecnologias de Informação e Comunicação',
      company: 'MacroAlfa - Ferramentas de Precisão, LDA',
      location: 'Oliveira de Azeméis, Portugal',
      period: '2024 - Presente',
      type: 'Tempo Integral',
      description: [
        'Manutenção e configuração de sistemas informáticos e redes empresariais',
        'Gestão de servidores, bases de dados e sistemas de backup',
        'Suporte técnico aos utilizadores e resolução de problemas de TI',
        'Implementação e monitorização de sistemas de segurança informática',
        'Desenvolvimento e manutenção de aplicações internas da empresa',
        'Gestão de infraestrutura de TI e atualizações de software/hardware'
      ],
      technologies: ['Windows Server', 'Linux', 'MySQL', 'PHP', 'React', 'Node.js', 'Networking']
    },
    // {
    //   id: 2,
    //   title: 'Desenvolvedor Frontend',
    //   company: 'Digital Agency',
    //   location: 'Porto, Portugal',
    //   period: '2022 - 2023',
    //   type: 'Freelance',
    //   description: [
    //     'Criação de interfaces responsivas e interativas com React',
    //     'Otimização de performance e SEO em aplicações web',
    //     'Implementação de designs complexos em código limpo',
    //     'Testes unitários e de integração'
    //   ],
    //   technologies: ['React', 'TypeScript', 'SASS', 'Jest', 'Figma']
    // },
    // {
    //   id: 3,
    //   title: 'Desenvolvedor Junior',
    //   company: 'StartUp Inovadora',
    //   location: 'Braga, Portugal',
    //   period: '2021 - 2022',
    //   type: 'Estágio',
    //   description: [
    //     'Desenvolvimento de funcionalidades frontend em React',
    //     'Manutenção e correção de bugs em aplicações existentes',
    //     'Participação em code reviews e sessões de brainstorming',
    //     'Aprendizagem contínua de novas tecnologias'
    //   ],
    //   technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'MongoDB']
    // }
  ]

  const education = [

    {
      id: 1,
      degree: 'Curso Profissional de GPSI',
      school: 'Escola Secundária Vale de Cambra',
      location: 'Vale de Cambra, Portugal',
      period: '2019 - 2022',
      description: 'Aprendizagem de todas as bases de Programação, Redes e Sistemas de Informação'
    },
    {
      id: 2,
      degree: 'Estágio Profissional',
      school: 'VITALIS Gut Wehlitz',
      location: 'Scheuditz, Alemanha',
      period: '2022',
      description: 'Consolidação de aprendizagens durante o Curso Profissional'
    },
    {
      id: 3,
      degree: 'CTeSP em Desenvolvimento de Software',
      school: 'ESAN (Escola Superior Aveiro Norte)',
      location: 'Oliveira de Azemeis, Portugal',
      period: '2023 - 2025',
      description: 'Foco em desenvolvimento de software, algoritmos e estruturas de dados.'
    },
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
