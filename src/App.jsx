import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Home"
import Calc from "./Calc"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        
  </Routes>
    </BrowserRouter>
  )
}

export default App
