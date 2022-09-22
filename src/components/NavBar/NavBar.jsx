import React from "react"
import "./NavBar.css"
import { MenuItems } from "./NavBar_menuItems"
import { MENUITEMS } from "../../mocks"
import { Link } from "react-router-dom"


export const NavBar = () => {
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
            {MENUITEMS.map(item => <MenuItems key={item.url} item={item}/>)}
        </wrapper>
    </div>
)
}
