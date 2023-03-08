import React from 'react';
import img from "../../../src/img/line.svg"
import image from "../../../src/img/круг.svg"
import line from "../../../src/img/свет.svg"
import easy from "../../../src/img/easy.svg"
import make from "../../../src/img/make.svg"
import liner from "../../../src/img/liner.svg"

const Service = () => {
    return (
        <div  id="service">
            <div className="container">
                <div className="service">
                    <div className="service-tittle">
                        <div className="push">
                            <img src={img} alt=""/>
                            <h1>Pushing the boundaries of your potential</h1>
                        </div>
                        <div>
                            <img src={image} alt=""/>
                            <h2>Branding</h2>
                            <h4>Refresh your logo, revamp your <br/> website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</h4>
                        </div>
                        <div>
                            <img src={line} alt=""/>
                            <h2>Packaging</h2>
                            <h4>Rethink labels, boxes, signage, <br/> and everything that'll help your <br/> product make a great first <br/> impression.</h4>
                        </div>
                    </div>
                    <div className="service-text">
                        <div>
                            <img src={easy} alt=""/>
                            <h2>Memorabilia</h2>
                            <h4>Choose from easy, affordable <br/> options for merch like custom <br/> tees and sets of pins.</h4>
                        </div>
                        <div>
                            <img src={make} alt=""/>
                            <h2>Visual Aids</h2>
                            <h4>Make your point more <br/> convincingly with branded <br/> flyers, slides, catalogues, <br/> infographics.</h4>
                        </div>
                        <div>
                            <button>Start a project</button>
                        </div>
                    </div>
                    <div className="liner">
                        <img src={liner} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;