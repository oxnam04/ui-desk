import React from "react";
import img from "../img/eat.png"
import image from  "../img/beef.png"
import images from "../img/nut.png"
const Special = () => {
    return(
        <div id="special">
            <div className="container">
                <div className="special-text">
                    <h1>Special Dishes for you</h1>
                    <h4>Made with premium & 100% Organic ingredients</h4>
                </div>
                <div className="special">
                    <div className="green">
                        <img src={img} alt=""/>
                        <h1>Green Salad</h1>
                        <h5>A salad combined witha delicious <br/>
                            cut of bacon and mixed with tasty <br/>
                            and fresh sesome oil.</h5>
                    </div>
                    <div className="beef">
                        <img src={image} alt=""/>
                        <h1>Beef Salad</h1>
                        <h5>A salad combined witha delicious <br/>
                            cut of bacon and mixed with tasty <br/>
                            and fresh sesome oil.</h5>
                        <button  className="btn-view">View All</button>
                        <h1 className="says">Happy Clients Says</h1>
                    </div>
                    <div className="nut">
                        <img src={images} alt=""/>
                        <h1>Nut Salad</h1>
                        <h5>A salad combined witha delicious <br/>
                            cut of bacon and mixed with tasty <br/>
                            and fresh sesome oil.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Special;