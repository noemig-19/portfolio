import Navbar from "./components/Navbar"



function App() {
  return (
    <div>
      
    <Navbar/>
      <header>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/050/907/439/small/3d-cartoon-woman-with-brown-hair-in-blue-shirt-png.png" alt=""   className="max-w-60"/>
        <h1> Noemi Guadalupe Bonilla</h1>
        <h2>frontend web developer</h2>
      </header>
      <section>
        <div>
          <p>Puoi trovarmi nei seguenti social:</p>
          <li>github</li>
          <li>linkedin</li>
          <li>istagram</li>
        </div>
      </section>
      <main>
        <div>
          <h2>Le mie competenze</h2>
          <div>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>tailwind</li>
            <li>node.js</li>
            <li>mongodb</li>
            <li>express</li>
            <li>git</li>
            <li>github</li></div>
        </div>
        <div>
          <h2>certificazioni</h2>
          <div>
            {/**
             * certificacion del bootcamp y de gitplatzi
             * <img src="" alt="" />
             *  */}
          </div>
        </div>
        <div>
          <h2>i miei progetti</h2>
          <div>
            <h3>sono ancora in costruzioni...</h3>
          </div>
        </div>
        <div>
          <h2>Chi sono io</h2>
          <span>Svilupatrice web full stack in formazione...</span>
          <p>

            Sono una sviluppatrice web e vivo in Italia da più di 15 anni; le mie origini sono salvadoregne.
            Ho imparato l'arte dello sviluppo web con curiosità e passione, e mi piace creare e collaborare su nuovi progetti, affrontando problemi complessi con un approccio pratico.

            Il mio focus principale è il frontend — lavoro con React, JavaScript e Tailwind CSS per creare interfacce interattive e accessibili. Ho anche basi solide di backend (API, database), e sto continuando a formarmi per diventare una sviluppatrice full stack completa.

            Attualmente sono aperta a opportunità freelance e remote. 
          </p>
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
  
  )
}

export default App
