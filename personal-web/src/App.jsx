import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skill from './components/Skill'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    // Canvas Animation
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const particles = []
      const particleCount = 50

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        })
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        particles.forEach((particle, i) => {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
          ctx.fill()

          particles.forEach((particle2, j) => {
            if (i !== j) {
              const dx = particle.x - particle2.x
              const dy = particle.y - particle2.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 100) {
                ctx.beginPath()
                ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 - distance / 500})`
                ctx.lineWidth = 1
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(particle2.x, particle2.y)
                ctx.stroke()
              }
            }
          })
        })

        requestAnimationFrame(animate)
      }

      animate()

      const handleResize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Canvas Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-violet-500 rounded-full filter blur-3xl opacity-20 transition-all duration-1000"
          style={{
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Navigation />
      <Hero mousePos={mousePos} />
      <Projects />
      <Skills />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}

export default App