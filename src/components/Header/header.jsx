import React from "react"
import "./Header.css"


export const Header = () => {
    return( 
        <div className="header">
            <div className="header_logo"><span>YO</span>mail</div>
            <div className="header_user">
                <div>test@yomail.ru</div>
                <img src="./icons/account.svg" width="30" height="30" alt=""></img>
            </div>
        </div>
    )
}