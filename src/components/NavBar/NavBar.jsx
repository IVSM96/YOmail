import React from "react"
import "./NavBar.css"
import { MenuItems } from "./NavBar_menuItems"
import { MENUITEMS } from "../../mocks"





export const NavBar = () => {
return(
    <div className="navBar">
        <button className="navBar_button"><img className="navBar_button__img" src="./icons/write.svg" width="20" height="20" alt=""></img>Написать</button>
        <wrapper>
            {MENUITEMS.map(item => <MenuItems key={item.url} item={item}/>)}
        </wrapper>
    </div>
)
}
