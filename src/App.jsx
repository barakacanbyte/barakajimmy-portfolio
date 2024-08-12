import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certifications from './components/Certifications'
import SocialMedia from './components/SocialMedia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <About />
        <SocialMedia/>
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App
