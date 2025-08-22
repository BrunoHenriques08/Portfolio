const About = () => {
  const stats = [
    { number: '5+', label: 'Anos de Experiência' },
    { number: '3+', label: 'Projetos Concluídos' },
    { number: '5+', label: 'Tecnologias' },
    { number: '100%', label: 'Dedicação' }
  ]

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Conheça um pouco mais sobre a minha jornada
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. 
              Comecei a minha jornada no mundo da programação há mais de 5 anos quando entrei no curso GPSI 
              (Gestão e Programação de Sistemas Informáticos) e desde então 
              tenho-me dedicado a aprender e aplicar desde algumas tecnologias mais antigas como as mais
              modernas.
            </p>
            <p>
              Especializo-me em desenvolvimento web com React, Node.js, e bases de dados 
              relacionais e não-relacionais. Adoro enfrentar desafios complexos e 
              transformar ideias em soluções práticas e eficientes.
            </p>
            <p>
              Quando não estou a programar, gosto de estudar novas tecnologias, 
              ler sobre inovação e IA.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number text-gradient">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
