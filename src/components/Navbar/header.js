import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./header.module.css";
import logo from "../../public/shortcut-script-app.png"

function Navbar() {
    return (
        <div className={style.navbar}>
            <nav className={style.header}>
                <img className={style.logo} src={logo}/>
                <NavLink className={style.button} to='/shopAssistant'>shop assistant</NavLink>
                <NavLink className={style.button} to='/buyer'>buyer</NavLink>
            </nav>
        </div>
    )
};
export default Navbar;