import { useEffect } from 'react'
import { FiX, FiDownload, FiPrinter } from 'react-icons/fi'

const PDFModal = ({ isOpen, onClose, pdfUrl }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleDownloadCV = async () => {
    try {
      // Buscar o conteúdo do CV
      const response = await fetch('/cv.html')
      const htmlContent = await response.text()
      
      // Criar um blob com o conteúdo
      const blob = new Blob([htmlContent], { type: 'text/html' })
      const url = window.URL.createObjectURL(blob)
      
      // Criar link temporário e fazer download
      const link = document.createElement('a')
      link.href = url
      link.download = 'Bruno_Henriques_CV.html'
      document.body.appendChild(link)
      link.click()
      
      // Limpar
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Erro ao fazer download:', error)
      // Fallback: abrir em nova aba
      window.open('/cv.html', '_blank')
    }
  }

  const handlePrintCV = () => {
    // Abrir em nova aba otimizada para impressão
    const printWindow = window.open('/cv.html', '_blank')
    
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        // Aguardar um pouco para garantir que tudo carregou
        setTimeout(() => {
          printWindow.focus()
          printWindow.print()
        }, 1500)
      })
    } else {
      // Se o popup foi bloqueado, abrir normalmente
      alert('Por favor, permita pop-ups e tente novamente, ou abra o CV em nova aba e use Ctrl+P')
    }
  }

  const handleGeneratePDF = async () => {
    try {
      // Instrução para o usuário sobre como salvar como PDF
      const newWindow = window.open('/cv.html', '_blank')
      
      if (newWindow) {
        setTimeout(() => {
          alert('Para salvar como PDF:\n\n1. Pressione Ctrl+P (ou Cmd+P no Mac)\n2. Escolha "Salvar como PDF" como destino\n3. Clique em "Salvar"\n\nA janela do CV foi aberta em uma nova aba.')
        }, 2000)
      } else {
        alert('Pop-up foi bloqueado. Por favor, abra o CV em nova aba e use Ctrl+P para salvar como PDF.')
      }
    } catch (error) {
      console.error('Erro:', error)
      window.open('/cv.html', '_blank')
    }
  }

  // Debug: vamos ver se o modal está sendo chamado
  console.log('Modal render - isOpen:', isOpen)

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Curriculum Vitae - Bruno Henriques</h3>
          <div className="modal-actions">
            <a 
              href="/cv.html" 
              target="_blank"
              rel="noopener noreferrer" 
              className="btn btn-sm btn-outline"
              title="Abrir CV em nova aba"
            >
              Abrir Nova Aba
            </a>
            <button 
              onClick={handleDownloadCV}
              className="btn btn-sm btn-primary"
              title="Download do arquivo HTML"
            >
              <FiDownload />
              Download HTML
            </button>
            <button 
              onClick={handleGeneratePDF}
              className="btn btn-sm btn-secondary"
              title="Instruções para salvar como PDF"
            >
              <FiPrinter />
              Salvar PDF
            </button>
            <button 
              onClick={onClose} 
              className="btn btn-sm btn-ghost"
              title="Fechar"
            >
              <FiX />
            </button>
          </div>
        </div>
        
        <div className="modal-body">
          <iframe
            src="/cv.html"
            width="100%"
            height="100%"
            title="CV - Bruno Henriques"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  )
}

export default PDFModal
