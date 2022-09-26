import React from "react"
import "./LoginPage.css"


export const LoginPage = () => {
    const currentUser = true
    return(
    
        <div className="wrapper_login">
            {currentUser ? (
            <form className="login">
                <div className="login_logo"><span>YO</span>mail</div>
                <input type="text" placeholder="Введите адресс"></input>
                <input placeholder="Введите пароль" type="password"></input>
                <button className="login_button" type="submit">Войти</button>
            </form>
            ):(
            <form className="login">
                <div><span>YO</span>mail</div>
                <input disabled={currentUser} value={currentUser.adress} type="text"></input>
                <input placeholder="Введите пароль" type="password"></input>
                <button type="submit">Зарегистрироваться</button>
            </form>   
            )}
           <img className="login_exit" src="./icons/close.svg" alt=""></img>
        </div>
    )
}