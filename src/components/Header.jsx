import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = (targetId) => {
    const element = document.querySelector(targetId)
    if (element) {
      const headerHeight = 80 // altura do header fixo
      const targetPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { href: '#home', icon: FiHome, label: 'Início' },
    { href: '#about', icon: FiUser, label: 'Sobre' },
    { href: '#skills', icon: FiCode, label: 'Competências' },
    { href: '#projects', icon: FiBriefcase, label: 'Projetos' },
    { href: '#contact', icon: FiMail, label: 'Contato' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="nav-brand">
          <span className="text-gradient">Bruno</span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <button 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo(href)
                }}
              >
                <Icon />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>

        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  )
}

export default Header
