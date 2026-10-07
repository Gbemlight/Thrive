import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Innovations from './pages/Innovations'
import Research from './pages/Research'
import ImpactPage from './pages/ImpactPage'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import InnovationDetail from './pages/InnovationDetail'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'

export default function App(){
  return (
    <BrowserRouter>
      <div className="app min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="/innovations" element={<Innovations/>} />
            <Route path="/innovations/:id" element={<InnovationDetail/>} />
            <Route path="/research" element={<Research/>} />
            <Route path="/impact" element={<ImpactPage/>} />
            <Route path="/get-involved" element={<GetInvolved/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
