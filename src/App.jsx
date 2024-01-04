import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './css/style.css'

function App() {

  return (
    <div className='App'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
