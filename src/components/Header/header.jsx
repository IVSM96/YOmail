import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"


export const Header = () => {
    return( 
        <div className="header">
            <Link className="header_link" to="/home"><div className="header_logo"><span>YO</span>mail</div></Link>
            <Link className="header_link" to="/login">
                <div className="header_user">
                    <div>test@yomail.ru</div>
                    <img src="./icons/account.svg" width="30" height="30" alt=""></img>
                </div>
            </Link>           
        </div>
    )
}