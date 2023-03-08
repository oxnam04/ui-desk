import React from 'react';
import img from "../../../src/img/client.svg"
import image from  "../../../src/img/steve.svg"
import images from  "../../../src/img/smith.svg"
import right from  "../../../src/img/strelka.svg"
import left from  "../../../src/img/left.svg"

const Client = () => {
    return (
        <div id="client">
            <div className="container">
                <div className="client">
                    <div className="client-tittle">
                        <img src={img} alt=""/>
                        <h1>Hear it directly from <br/> my clients.</h1>
                    </div>
                    <div className="client-img">
                        <img src={image} alt=""/>
                        <img src={images} alt=""/>
                    </div>
                    <div className="left-right">
                        <img src={left} alt=""/>
                        <img src={right} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Client;