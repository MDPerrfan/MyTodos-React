import { useState } from 'react'
import './Style.css'
import Navbar from './Componenst/Navbar'
import Footer from './Componenst/Footer'
import Todo from './Componenst/Todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Todo/>
    <Footer/>
    </>
  )
}

export default App
