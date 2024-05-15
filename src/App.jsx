import './Style.css'
import Navbar from './Componenst/Navbar'
import Footer from './Componenst/Footer'
import Todo from './Componenst/Todo'
import React, { useState } from 'react';
function App() {
  const [isBlackTheme, setIsBlackTheme] = useState(true);
  const toggleTheme = () => {
    setIsBlackTheme(!isBlackTheme);
  };
  return (
    <>
    <div className={`${isBlackTheme ? 'black-theme' : 'white-theme'}`}>
    <Navbar isBlackTheme={isBlackTheme} toggleTheme={toggleTheme}/>
    <Todo isBlackTheme={isBlackTheme}/>
    <Footer/>
    </div>

    </>
  )
}

export default App
