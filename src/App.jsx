
import './App.css'


import Navbar from '../src/Component/Navbar/Navbar.jsx'
import Body from './Component/Body/Body.jsx'
import Sidebar from './Component/Sidebar/Sidebar.jsx'
import Artical from './Component/Artical/Artical.jsx'
import Footer from './Component/Footer/Footer.jsx'



function App() {



  return (
    <>
    <section>
    <Navbar/>
    </section>
    <Body/>
    <main style={{display:'flex'}}>
      <section style={{width:250,padding:10}}><Sidebar/></section>
      <section><Artical/></section>
    </main>
    <div style={{marginTop:70}}>
      <Footer/>
  
    </div>

    </>
  )
}

export default App
