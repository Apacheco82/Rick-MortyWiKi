import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Navbar from "./components/Navbar/Navbar.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Episodes from "./Pages/Episodes.jsx"
import Locations from "./Pages/Locations.jsx"

function App(){
  return(
    <Router>
      <div className="App">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/locations" element={<Locations/>}/>
      </Routes>
    </Router>
  )
}



export default App
