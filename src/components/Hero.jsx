import { useState } from 'react'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiX } from 'react-icons/fi'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const handleCVClick = (e) => {
    e.preventDefault()
    console.log('CV button clicked!')
    setIsModalOpen(true)
    console.log('Modal should be open now')
  }

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title animate-fade-in-up">
                Olá, o meu nome é <span className="text-gradient">Bruno Henriques</span>
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
                {/* <button onClick={handleCVClick} className="btn btn-outline">
                  <FiDownload />
                  Ver CV
                </button> */}
              </div>

              <div className="hero-social animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <a href="https://github.com/BrunoHenriques08" target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/bruno-henriques-556006291" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin />
                </a>
                <a href="mailto:bruno.henriques135@gmail.com">
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

      {/* Modal Inline */}
      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999999
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            style={{
              width: '90%',
              height: '90%',
              maxWidth: '1000px',
              maxHeight: '800px',
              backgroundColor: 'white',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              padding: '1rem',
              borderBottom: '1px solid #e0e0e0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f8f9fa'
            }}>
              <h3 style={{ margin: 0, color: '#333' }}>Curriculum Vitae - Bruno Henriques</h3>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'none',
                    border: '1px solid #007acc',
                    borderRadius: '4px',
                    padding: '0.5rem 0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    textDecoration: 'none',
                    color: '#007acc',
                    fontSize: '0.875rem'
                  }}
                  title="Abrir CV em nova aba"
                >
                  Abrir Nova Aba
                </a>
                <a
                  href="/cv-print.html?print=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#007acc',
                    border: '1px solid #007acc',
                    borderRadius: '4px',
                    padding: '0.5rem 0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}
                  title="Imprimir/Salvar como PDF"
                >
                  <FiDownload />
                  Imprimir/PDF
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: 'none',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: '#666'
                  }}
                  title="Fechar modal"
                >
                  <FiX />
                </button>
              </div>
            </div>
            
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <iframe
                src="/cv.html"
                width="100%"
                height="100%"
                title="CV - Bruno Henriques"
                frameBorder="0"
                style={{ border: 'none', background: 'white' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero
