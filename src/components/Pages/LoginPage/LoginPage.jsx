import React from "react"
import "./LoginPage.css"


export class LoginPage extends React.Component {
    currentUser = true

    constructor() {
        super()
        this.state = {
            adress: '',
            password: '',
        }

        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handlerSubmit(event) {
        const newUser = {
            adress: this.state.adress,
            password: this.state.password
        }
        //Здесь будет отправляться на бэк
        console.log(newUser)
        event.preventDefault()
    }

render() {
    return(   
        <div className="wrapper_login">
            {this.currentUser ? (
            <form className="login" onSubmit={this.handlerSubmit}>
                <div className="login_logo"><span>YO</span>mail</div>
                <input
                    type="text"
                    placeholder="Введите адресс"
                    value={this.state.adress}
                    onChange={(event) => this.setState({adress: event.target.value})}>
                </input>
                <input 
                    placeholder="Введите пароль" 
                    type="password"
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})}></input>
                <button className="login_button" type="submit">Войти</button>
            </form>
            ):(
            <form className="login">
                <div><span>YO</span>mail</div>
                <input disabled={this.currentUser} value={this.currentUser.adress} type="text"></input>
                <input placeholder="Введите пароль" type="password"></input>
                <button type="submit">Зарегистрироваться</button>
            </form>   
            )}
           <img className="login_exit" src="./icons/close.svg" alt=""></img>
        </div>
    )
}
    
}