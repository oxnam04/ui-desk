import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import Special from "./components/Special";
import Line from "./components/Line";
import Home from "./components/Home";
import Foot from "./components/Foot";

function App() {
  return (
    <div className="App">
        <Header/>
        <Section/>
        <Hero/>
        <About/>
        <Special/>
        <Line/>
        <Home/>
        <Foot/>
    </div>
  );
}

export default App;
