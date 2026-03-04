import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const [active, setActive] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  // Track scroll to highlight active nav item
  useEffect(() => {
    const sections = ['home', 'about', 'works', 'contact']
    const handleScroll = () => {
      const scrollY = document.querySelector('.main-content')?.scrollTop || 0
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop - 100 <= scrollY) {
          setActive(sections[i])
          break
        }
      }
    }
    const el = document.querySelector('.main-content')
    el?.addEventListener('scroll', handleScroll)
    return () => el?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`app-root ${darkMode ? 'dark' : ''}`}>
      {/* Top cyan accent bar */}
      <div className="top-accent-bar" />

      <Sidebar
        active={active}
        onNav={setActive}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="main-content">
        <Home onNav={setActive} />
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  )
}