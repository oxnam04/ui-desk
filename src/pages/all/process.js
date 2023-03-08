import React from 'react';
import img from "../../../src/img/process.svg"
import image from "../../../src/img/shop.svg"

const Process = () => {
    return (
        <div id="process">
            <div className="container">
                <div className="process">
                    <div className="process-tittle">
                        <img src={img} alt=""/>

                        <div className="text-process">
                            <h1>Getting started <br/> is easy.</h1>
                            <h4>I've developed a structure that saves <br/> time (and money) while making the <br/> most
                                of our interactions.</h4>
                        </div>
                    </div>
                    <div className="listen-ideate">
                        <div>
                            <h1 style={{color:"darkblue"}}>[1]</h1>
                            <h2>Listen</h2>
                            <h4 style={{color:"black"}}>I get to know you and your company, your goals and <br/> expectations.</h4>
                        </div>
                        <div>
                            <h1 style={{color:"darkblue"}}>[2]</h1>
                            <h2>Ideate</h2>
                            <h4 style={{color:"black"}}>I create a couple of pitches based on the project brief <br/> and goals.</h4>
                        </div>

                        <div>
                            <h1 style={{color:"darkblue"}}>[3]</h1>
                            <h2>Execute</h2>
                            <h4 style={{color:"black"}}>I work on the approved plan while keeping <br/> you in the loop until we have a
                                finished <br/> project.</h4>
                        </div>
                    </div>
                    <img className="line--shop" src={image} alt=""/>
                </div>
            </div>

        </div>
    );
};

export default Process;