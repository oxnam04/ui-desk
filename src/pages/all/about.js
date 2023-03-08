import React from 'react';
import img from "../../../src/img/IMAGE.png"
import {HiOutlineMail} from "react-icons/hi";
import {GiTrophyCup} from "react-icons/gi";

const About = () => {
    return (
        <div id="about-us">
            <div className="container">
                <div className="about">
                    <div className="about-tittle">
                        <div className="about-product">
                            <h1>I design digital products that make an impact.</h1>
                            <h4>Hi! I’m Alex, a product designer based in Oakland. I create user-friendly interfaces for fast-growing startups.</h4>
                            <button>Hire me!<HiOutlineMail/></button>
                            <div className="about-icon">
                                <div>
                                    <GiTrophyCup  style={{fontSize:30 , color:"white"}} className="icon-ion"/>
                                </div>
                            <div>
                                <h3>Independent Of The Year</h3>
                                <h3>Annual Awards 2020 • awards.com</h3>
                            </div>
                            </div>
                        </div>
                        <img src={img} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;