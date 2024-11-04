import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  

  return (
    <> 
     <menu className='menu'>
        <Header/>
     </menu>
     <div className="content">
        <aside className='aside'>
            <Sidebar/>
        </aside>
        <main className='main'>
            <Main/>
        </main>
        <div className="emptyblock"></div>
     </div>
     
      <footer className='footer'>
        <Footer/>
      </footer>
    </>
  )
}

export default App