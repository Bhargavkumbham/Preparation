import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegForm from './components/RegisterForm';
function App() {
  return (
    <div><Navbar /><Router>
<Routes>
        <Route path="/register" element={<RegForm />} />
        <Route path="/login" element={<RegForm />} />
 </Routes>
    </Router><Body /></div>
  )
}

export default App