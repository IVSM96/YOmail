import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
import {MenuItems} from "./NavBar_menuItems"


export const NavBar = ({menuItems}) => {
return(
    <div className="navBar">
        <Link className="navBar_link" to="/create">
            <button className="navBar_button">
                <img 
                    className="navBar_button__img" 
                    src="./icons/write.svg" 
                    width="20" 
                    height="20" 
                    alt="">
                </img>Написать</button>
        </Link>
        <wrapper>
            {menuItems.map(item => <Link className="navBar_link" to={item.link} key={item.title}><MenuItems item={item}/></Link>)}
        </wrapper>
    </div>
)
}
