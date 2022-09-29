import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
import {MenuItems} from "./NavBar_menuItems"



export const NavBar = ({incomingCount, sendCount}) => {

const MENUITEMS = [
    {url: "./icons/incoming.svg", title: "Входящие", count: incomingCount,  link: "/incoming"},
    {url: "./icons/send.svg", title: "Отправленные", count: sendCount, link: "/sent"  },
    {url: "./icons/folder.svg", title: "Архив", count: '', link: "/archive"},
    {url: "./icons/delete.svg", title: "Удаленные", count: '', link: "/remote"},
    {url: "./icons/cancel.svg", title: "Спам", count: '', link: "/spam" },
    {url: "./icons/drafts.svg", title: "Черновики", count: '', link: "/drafts" }
    ]

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
            {MENUITEMS.map(item => <Link className="navBar_link" to={item.link} key={item.title}><MenuItems item={item}/></Link>)}
        </wrapper>
    </div>
)
}
