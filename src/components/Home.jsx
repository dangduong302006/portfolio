import { useEffect, useState } from 'react'
import './Home.css'

const TYPING_TEXTS = [
  'Backend Developer',
  'Fullstack Developer',
  'Java & TypeScript Engineer',
  'Software Engineering Student',
]

export default function Home({ onNav }) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = TYPING_TEXTS[textIndex]
    let timeout
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, textIndex])

  return (
    <section id="home" className="home-section">
      <div className="home-blob" />
      <div className="home-content">
        <div className="home-text fade-in fade-in-1">
          <p className="home-hello">Hello, I am</p>
          <h1 className="home-name">Đặng Đức Dương</h1>
          <p className="home-typing">
            I Am Passionate{' '}
            <span className="typing-word">{displayed}<span className="cursor">|</span></span>
          </p>
          <p className="home-desc">
            Second-year Software Engineering student at FPT University, seeking a Backend Developer Internship.
            My core competencies include Java and TypeScript, with proficiency in SQL Server and MongoDB.
            Also well-prepared as a Fullstack Developer with experience in React.js and Next.js.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              onNav('about')
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            About Me
          </button>
        </div>
        <div className="home-avatar-wrap fade-in fade-in-3">
          <div className="home-avatar-circle">
            <div className="home-avatar-placeholder">
              <i className="fa-solid fa-user" />
              <p>Add your photo here</p>
            </div>
          </div>
          <div className="home-avatar-ring" />
        </div>
      </div>
    </section>
  )
}