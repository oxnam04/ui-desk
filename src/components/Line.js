import React from "react";
import img from "../img/Easin Arafat.svg"
import image from  "../img/grouppa2.svg"
import vector from "../img/Vector 1.png"
import vectorLeft from "../img/Vector 2.png"
const Line = () => {
    return(
        <div id="line">
            <div className="container">
                <div className="line-text">
                    <div className="line">
                        <img src={img} alt=""/>
                        <img className="vector" src={vectorLeft} alt=""/>
                        <img src={vector} alt=""/>
                    </div>
                    <img src={image} alt=""/>
                </div>
               <div className="subscribe">
                   <h1>Subscribe to the Newsletter</h1>
                   <h4>Enter your email below to get our daily offers and news</h4>
                   <div>
                       <input placeholder="Enter your email." type="text"/>
                       <button>Get Started</button>
                   </div>
               </div>
            </div>
        </div>
    )
}
export default Line;