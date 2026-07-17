import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./pages/About"
import Skills from "./pages/Skills"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <div>
        <div className="fixed inset-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       
          <Navbar />
          <Header />
        
        <main>

          <div>
            <h2>i miei progetti</h2>
            <div>
              <h3>sono ancora in costruzioni...</h3>
            </div>
          </div>

          <div>
            <h2>contatto</h2>
            <form>
              <label htmlFor="" >nomi:</label>
              <input type="text" />
              <label htmlFor="" >email:</label>
              <input type="text" />
              <div>
                <label htmlFor="">descrizione</label>
                <input type="message" />
                <button>invia</button>
              </div>
            </form>
          </div>
          <div>
            <h2>curriculum</h2>

          </div>
        </main>
      </div>
    </BrowserRouter>


  )
}

export default App
