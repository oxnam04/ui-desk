import React from "react";
import img from "../img/header Image.png"
import image from "../img/bg elements.png"
const Section = () => {
    return(
        <div id="section">
            <div className="container">
                <div className="section">
                    <div className="section-text">
                        <h1>Just <span style={{color: "green"}}>Eat healthy</span> <br/> food to live a <br/> healthier life</h1>
                        <h4>Enjoy a healthy life by eating healthy foods  that have extraordinary flavors that make your life healthier for today and in the future</h4>
                        <button className="btn-order">Order Now</button>
                        <div className="image">
                            <img src={img} alt=""/>
                            <img src={image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section;