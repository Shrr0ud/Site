import './App.css'
import './App.scss'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import emailjs from '@emailjs/browser'


export default function App() {
  return (
     <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
           </Route>
      </Routes>
    </>
  )
}

