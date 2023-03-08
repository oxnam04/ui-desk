import React from 'react';
import img from "../../../src/img/img.svg"
import image from "../../../src/img/photo.svg"
import web from "../../../src/img/website.svg"
import webOt from "../../../src/img/otsuka.svg"
import webUi from "../../../src/img/ui.svg"
import webVi from "../../../src/img/view.svg"
const Design = () => {
    return (
        <div id="design">
            <div className="container">
                <div className="design">
                    <div className="design-tittle">
                        <h1>Bringing stellar results for every client.</h1>
                    </div>
                    <div className="img--design">
                        <div className="img--design">
                            <img src={img} alt=""/>
                            <img  src={image} alt=""/>
                        </div>
                    </div>
                    <div className="web">
                        <img src={web} alt=""/>
                    </div>
                    <div>
                        <div className="img--design">
                            <img src={webOt} alt=""/>
                            <img src={webUi} alt=""/>
                        </div>
                    </div>
                    <div className="web-vi">
                        <img src={webVi} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;