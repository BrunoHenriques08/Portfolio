import { FiHeart, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Desenvolvido com <FiHeart className="heart" /> por{' '}
              <span className="text-gradient">Bruno</span>
            </p>
            <p className="footer-year">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          <button className="scroll-to-top" onClick={scrollToTop}>
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
