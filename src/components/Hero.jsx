import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in-up">
              Olá, eu sou <span className="text-gradient">Bruno</span>
            </h1>
            <h2 className="hero-subtitle animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Desenvolvedor Full Stack
            </h2>
            <p className="hero-description animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Apaixonado por criar experiências digitais incríveis e soluções inovadoras. 
              Especializado em React, Node.js e tecnologias modernas de desenvolvimento web.
            </p>
            
            <div className="hero-buttons animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button onClick={handleContactClick} className="btn btn-primary">
                <FiMail />
                Contactar-me
              </button>
              <a href="/cv.pdf" className="btn btn-outline" download>
                <FiDownload />
                Download CV
              </a>
            </div>

            <div className="hero-social animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href="mailto:bruno@email.com">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="hero-image animate-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="hero-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-content">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
