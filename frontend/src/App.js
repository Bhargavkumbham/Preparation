import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import MenuItems from './components/MenuItems'
function App() {
  return (
    <div><Navbar brandName="LoFo" menuItem={MenuItems} /><Body /></div>
  )
}

export default App