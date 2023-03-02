import React from "react";
import img from "../img/Image 03.png"
import image from "../img/Image 01.png"
import photo from "../img/Image 02.png"
import group from "../img/Group 4114.png"
import cook from "../img/Image & bg elements.png"
import {FcApproval} from "react-icons/fc"

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="about">
                    <div className="about-us">
                        <h1>About US</h1>
                        <h4>Organic food is grown without the use of <br/> synthetic chemicals, such as
                            human-made <br/> pesticides and fertilizers, and does not contain <br/> genetically modified
                            organisms (GMOs). <br/> Organic foods include fresh produce, meats, <br/> and dairy products
                            as well as processed foods <br/> such as crackers, drinks, and frozen meals.</h4>
                        <button>Learn More</button>
                    </div>

                    <div className="about-text">
                        <div className="image">
                            <img src={image} alt=""/>
                            <img className="photo" src={photo} alt=""/>
                        </div>
                        <img src={img} alt=""/>
                    </div>
                    <div className="fresh-mik">
                        <h1>Fresh Vegetables <br/>
                            Every Day</h1>
                        <h4>Healthy life as informed declared we enjoy the <br/> margaret. Joy horrible moreover man
                            feelings <br/> own shy. Request norland neither mistake for yet. <br/> Between the for
                            morning assured country believe.</h4>
                        <button>Learn More</button>
                    </div>
                    <div className="fresh">
                        <img src={group} alt=""/>
                    </div>
                    <div className="cook">
                        <img src={cook} alt=""/>
                    </div>
                    <div className="cook-text">
                        <h1>Cooked by the <br/>
                            Best Chefs</h1>
                        <h4>Believing neglected so so allowance existence <br/> departure in. In design active temper
                            be <br/> uneasy. Thirty for remove plenty regard you <br/> summer though. He preference
                            connection <br/> astonished on of ye.</h4>
                    <div className="icons">
                        <div className="icon">
                            <FcApproval fontSize={25}/>
                            <h5>A guaranteed delicious meal</h5>
                        </div>
                        <div className="icon2">
                            <FcApproval fontSize={25}/>
                            <h5>Food is guaranteed hygienic</h5>
                        </div>
                        <div className="icon3">
                            <FcApproval fontSize={25}/>
                            <h5>Cooked quickly</h5>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;