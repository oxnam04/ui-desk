import React, {useState} from "react";
import {BiSearch} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import {IoCloseSharp} from "react-icons/io5";
import {GrClose} from "react-icons/gr";

const Header = ({getDark, dark}) => {

    const [search, setSearch] = useState(false)

    const time = out => {
        setTimeout(() => {
            return out
        },500)
    }

    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <div className="logo">
                            <NavLink to={'/'}>
                                <h1>UI.desk</h1>
                            </NavLink>
                        </div>
                        <div className="navBar">
                            <NavLink to={'/'}><p>Home</p></NavLink>
                            <NavLink to={'/hero'}><p>Why choose</p></NavLink>
                            <NavLink to={'/about'}><p>About</p></NavLink>

                            <NavLink to={"/another-love"}>WEB.FOLIO</NavLink>
                        </div>
                        <div className="search">
                            <div className="dadSearch">
                                <input style={{
                                    display: search ? "block" : setTimeout(() => {
                                       "none"
                                    },500),
                                    transition: ".4s",
                                    transform: !search ? "translateX(400px)" : "",
                                }} type="text" className={`search--input ${search ? "open-search" : "close-search" }`} placeholder="search..."/>
                                {
                                    search ? <GrClose onClick={() => setSearch(false)} className="icon-search"/>: <BiSearch onClick={() => setSearch(true)} className="icon-search" AiOutlineSearch fontSize={20}/>

                                }
                            </div>
                            <AiOutlineShoppingCart AiOutlineShoppingCart fontSize={20}/>
                            <button onClick={() => getDark(!dark)} className="btn-Sign">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;