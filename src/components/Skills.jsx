import { FiCode, FiDatabase, FiServer, FiSmartphone } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS/SCSS', level: 85 },
        { name: 'HTML5', level: 95 }
      ]
    },
    {
      icon: FiServer,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 70 }
      ]
    },
    {
      icon: FiDatabase,
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 80 }
      ]
    },
    {
      icon: FiSmartphone,
      title: 'Ferramentas',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'Vite', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Competências</h2>
          <p className="section-subtitle">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card skill-card">
              <div className="category-header">
                <category.icon className="category-icon" />
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
