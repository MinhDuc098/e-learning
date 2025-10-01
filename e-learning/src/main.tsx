import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './Component/about.tsx'
import Intro from './Component/intro.tsx' 
import Home from './Component/home.tsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Introduction</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
