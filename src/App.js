import './App.css';
import Header from "./components/Header";
import Section from "./components/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import Special from "./components/Special";
import Line from "./components/Line";
import Home from "./components/Home";
import Foot from "./components/Foot";
import {Routes , Route} from "react-router-dom"
import Index from "./pages";

function App() {

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/'} element={<Section/>}/>
            <Route path={'/hero'} element={<Hero />}/>
            <Route path={'/about'} element={<About />}/>
            <Route path={'/special'} element={<Special/>}/>
            <Route path={'/line'} element={<Line />}/>
            <Route path={'/'} element={<Foot/>}/>
            <Route path={"/another-love"} element={<Index/>}/>
        </Routes>
    </div>
  );
}

export default App;
