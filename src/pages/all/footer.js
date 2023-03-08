import React from 'react';
import img  from    "../../img/connect.svg"
import image from "../../img/foot-linear.svg"
const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer-tittle">
                        <img src={img} alt=""/>
                    </div>
                    <div className="foot">
                        <div>
                            <a href="mailto:baiaman20031@gmail.com">alexsmith@example.com</a>
                        </div>
                        <div >
                            <a href="">Work</a>
                            <a href="">About</a>
                            <a href="">Shop</a>
                            <a href="">Blog</a>
                            <a href="">Contact</a>
                        </div>
                        <div>
                            <a href="">Twitter</a>
                            <a href="">LinkedIn</a>
                            <a href="">Behance</a>
                            <a href="">GitHub</a>
                            <a href="">Dribbble</a>
                        </div>
                        <div>
                            <h3 style={{color:"white"}}>Subscribe to my weekly newsletter</h3>
                            <div className="foot-btn">
                                <input type="text"/>
                                <button className="btn-foot">View-All</button>
                            </div>
                        </div>
                    </div>
                    <div className="line-foot"></div>
                    <div className="footer-foot">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;