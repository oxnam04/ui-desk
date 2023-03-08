import React from 'react';
import Hero from "./all/hero";
import About from "./all/about";
import Contact from "./all/contact";
import Design from "./all/design";
import Service from "./all/service";
import Client from "./all/client";
import Process from "./all/process";
import Shop from "./all/shop";
import Blog from "./all/blog";
import Footer from "./all/footer";

const Index = () => {
    return (
        <div>
            <About/>
            <Hero/>
            <Contact/>
            <Design/>
            <Service/>
            <Client/>
            <Process/>
            <Shop/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Index;