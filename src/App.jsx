import './Style.css'
import Navbar from './Componenst/Navbar'
import Footer from './Componenst/Footer'
import Todo from './Componenst/Todo'
function App() {
  return (
    <>
    <div className="app-body">
    <Navbar/>
    <Todo/>
    <Footer/>
    </div>

    </>
  )
}

export default App
