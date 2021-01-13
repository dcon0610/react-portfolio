import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="background" style={{'backgroundImage': 'url(./assets/pietro-jeng-n6B49lTx7NM-unsplash.jpg)'}}>
        <div>
  <Navbar/>
  <div className="bottom-wrapper">
   <Home/>
    <br />
   
   <About/>
   <Skills />
   <Projects /> 
  </div>  
  <Contact />

  <div className="column is-2">
  </div>
  <Footer />
</div>
  </main>
  );
}

export default App;
