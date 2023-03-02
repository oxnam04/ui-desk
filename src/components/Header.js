import React  from "react";
import {BiSearch} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                  <div className="header-logo">
                      <div className="logo">
                          <h1>UI.desk</h1>
                      </div>
                      <a style={{color:"green"}} href="">Home</a>
                      <a href="">About</a>
                      <a href="">Contact</a>
                      <a href="">Testimonials</a>
                      <div className="search">
                          <BiSearch className="icon-search" AiOutlineSearch fontSize={20} />
                          <AiOutlineShoppingCart AiOutlineShoppingCart fontSize={20}/>
                          <button className="btn-Sign">Order Now</button>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
export default Header;