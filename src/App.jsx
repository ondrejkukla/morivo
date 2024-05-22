/* import Header from './components/Header/Header'; */
import Hero from './components/Hero/Hero';
import Slider from "./components/Slider/Slider";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import We from './components/We/We';
import Benefits from './components/Benefits/Benefits';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {


  return (
    <>
    <Navbar />
      {/* <Header /> */}
      <Hero />
      <Slider />
      <About />
      <Projects />
      <We />
      <Benefits />
      <Faq />
      <Footer />
    </>
  )
}

export default App;
