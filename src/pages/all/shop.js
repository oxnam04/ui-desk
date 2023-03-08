import React from 'react';
import mack from "../../img/mack.svg"
import phone from "../../img/phone.svg"
import whiteMack from "../../img/whitemack.svg"
import out from "../../img/out.svg"
const Shop = () => {
    return (
        <div id="shop">
            <div className="container">
                <div className="shop">
                    <div className="shop-tittle">
                        <div>
                            <img src={mack} alt=""/>
                            <h2 style={{color:"black"}}>Ergonomic Frozen Pants</h2>
                            <h4 style={{color:"black"}}>In et consequ</h4>
                        </div>
                        <div>
                            <img src={phone} alt=""/>
                            <h2 style={{color:"black"}}>Handmade Fresh Bike</h2>
                            <h4 style={{color:"black"}}>Qui in facere</h4>
                        </div>
                        <div>
                            <img src={whiteMack} alt=""/>
                            <h2 style={{color:"black"}}>Small Soft Pizza</h2>
                            <h4 style={{color:"black"}}>Aspernatur expli</h4>
                        </div>
                    </div>
                    <a href="">View all products <img src={out} alt=""/> </a>
                </div>
            </div>
        </div>
    );
};

export default Shop;