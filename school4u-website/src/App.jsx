import { useState } from 'react'
import laptop from './images/Laptop.png'
import logo from './images/logo512.png'
import './styles/App.css'
import { Layout } from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <div>
        <header className="header">
          <div className="links">
            <p><a href="zsem.edu.pl" className="windows" target="_blank"><i class="fa-brands fa-windows "></i> Windows</a></p>
            <p><a href="zsem.edu.pl" className="macos" target="_blank"><i class="fa-brands fa-apple"></i> Mac OS</a></p>
            <p><a href="zsem.edu.pl" className="linux" target="_blank"><i class="fa-brands fa-linux"></i> Linux</a></p>
          </div>
          <img src={laptop} className="laptop" alt="laptop" />
          <img src={logo} className="logo" alt="logo" />
        </header>
        <footer className="footer">
          <p className="footer-text">© B&P Coders {new Date().getFullYear()}</p>
        </footer>
      </div>
    </Layout>
  )
}

export default App
