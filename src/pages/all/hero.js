import React from 'react';
import img from "../../../src/img/Frame.svg"
import image from "../../../src/img/Frame11.svg"
const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--tittle">
                        <img src={img} alt=""/>
                    </div>
                    <img className="img--hero" src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;