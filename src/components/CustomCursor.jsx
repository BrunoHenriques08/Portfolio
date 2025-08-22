import { useState, useEffect, useRef } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const requestRef = useRef()

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    const updateCursorPosition = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      setPosition({ x: mouseX, y: mouseY })
      requestRef.current = requestAnimationFrame(animateCursor)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.matches('a, button, .btn, .card, .nav-link, .project-link, .contact-item, .social-link, input, textarea, .scroll-to-top')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.matches('a, button, .btn, .card, .nav-link, .project-link, .contact-item, .social-link, input, textarea, .scroll-to-top')) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    requestRef.current = requestAnimationFrame(animateCursor)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <>
      <div 
        className={`custom-cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div 
        className={`cursor-trail ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default CustomCursor
