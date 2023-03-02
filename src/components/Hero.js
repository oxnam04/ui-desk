import React from "react";
import img from "../img/Icon.png"
import image from "../img/Icon1.png"
import leaf from "../img/leaf 1.png"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero-tittle">
                        <div className="tittle">
                            <h1>Why Choose US?</h1>
                            <h3>Organic food is grown without the use of synthetic chemicals</h3>
                        </div>
                        <div className="images">
                            <img src={img} alt=""/>
                            <img src={image} alt=""/>
                            <img src={leaf} alt=""/>
                        </div>
                        <div className="spans">
                            <span>Easy to order</span>
                            <span>Live Order</span>
                            <span>100% Organic</span>
                        </div>
                        <div className="text">
                            <h5>foods include fresh produce,<br/> meats as well as processed</h5>
                            <h5>Place your online Order easily <br/> and get the food instantly</h5>
                            <h5>Organic food is grown without <br/> the use of synthetic chemicals</h5>
                        </div>
                        <div className="plus">
                           <div>
                               <h1>40+</h1>
                               <h5>Food Partners</h5>
                           </div>
                            <div>
                                <h1>459+</h1>
                                <h5>Trusted Clients</h5>
                            </div>
                            <div>
                                <h1>12k+</h1>
                                <h5>Order Online</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;