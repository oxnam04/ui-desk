import React from 'react';
import blog from "../../img/blog.svg"
import outTwo from "../../img/outtwo.svg"
import design from "../../img/design.svg"
import point from "../../img/point.svg"
import jungle from "../../img/jungle.svg"
const Blog = () => {
    return (
        <div id="blog">
            <div className="container">
                <div className="blog">
                    <div className="blog-tittle">
                        <div>
                            <img src={blog} alt=""/>
                            <h1>Words On Design, Tech <br/> & Other Things I Love</h1>
                        </div>
                        <div>
                            <button>Explore all posts <img  src={outTwo} alt=""/></button>
                        </div>
                    </div>
                    <div className="img-vlog">
                        <img src={design} alt=""/>
                        <img className="jungle" src={point} alt=""/>
                        <img src={jungle} alt=""/>
                    </div>
                    <div className="work"></div>
                </div>
            </div>
        </div>
    );
};

export default Blog;