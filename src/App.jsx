import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardGrid from './components/Grid';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CardGrid />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export  default App
