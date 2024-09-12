import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <div className="bg-gradient-to-r from-gray-900 to-slate-700 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
