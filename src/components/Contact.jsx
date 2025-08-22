import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio de email
    setTimeout(() => {
      alert('Mensagem enviada com sucesso!')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'bruno.henriques135@gmail.com',
      href: 'mailto:bruno.henriques135@gmail.com'
    },
    {
      icon: FiMapPin,
      label: 'Localização',
      value: 'Vale de Cambra, Aveiro, Portugal',
      href: 'https://maps.google.com/?q=Vale+de+Cambra,+Aveiro,+Portugal'
    }
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      href: 'https://github.com/BrunoHenriques08',
      color: '#333'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bruno-henriques-556006291',
      color: '#0077b5'
    },
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:bruno.henriques135@gmail.com',
      color: '#ea4335'
    }
  ]

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vamos Trabalhar Juntos?</h2>
          <p className="section-subtitle">
            Entre em contacto comigo para discutir o seu próximo projeto
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Entre em Contacto</h3>
              <p>
                Estou sempre interessado em novos desafios e oportunidades. 
                Se tem um projeto em mente ou quer simplesmente conversar sobre tecnologia, 
                não hesite em contactar-me.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.href} className="contact-item">
                  <div className="contact-icon">
                    <info.icon />
                  </div>
                  <div className="contact-text">
                    <div className="contact-label">{info.label}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Siga-me</h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--color': link.color }}
                  >
                    <link.icon />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <h3>Envie uma Mensagem</h3>
            
            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="O seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="A sua mensagem..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              <FiSend />
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
