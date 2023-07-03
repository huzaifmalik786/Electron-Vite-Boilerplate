import React from 'react'
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="*" element={<div>404</div>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
