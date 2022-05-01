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
            <p><a href="https://github.com/B-P-Coders/coding-night/releases/tag/1.3" className="github" target="_blank"><i class="fa-brands fa-github"></i> Github</a></p>
            <p><a href="https://github.com/B-P-Coders/coding-night/releases/download/1.3/School4u-win32-ia32.zip" download className="windows" target="_blank"><i class="fa-brands fa-windows "></i> Windows</a></p>
            <p><a href="https://github.com/B-P-Coders/coding-night/releases/download/1.3/school4u-darwin-x64.zip" download className="macos" target="_blank"><i class="fa-brands fa-apple"></i> Mac OS</a></p>
            <p><a href="https://github.com/B-P-Coders/coding-night/releases/download/1.3/School4u-linux-x64.zip" download className="linux" target="_blank"><i class="fa-brands fa-linux"></i> Linux</a></p>
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
