import React from "react"
import "./LoginPage.css"
import axios from "axios"
import { BASE_URL } from "../../../Api/base"


export class LoginPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pageVersion: false,
            adress: '',
            password: '',
            validateAddresError: '',
        }

        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    createNewUser = async (newUser) => {
        try{
            await axios.post(`${BASE_URL}/user/create`, newUser)
        }catch {
            console.error("Не удалось зарегистрировать нового пользователя!")
        }
        console.log("front",this.state.validateAddresError)
        
    }

    login = async (user) => {
        try{
           await axios.post(`${BASE_URL}/user/login`, user)
           .then(res => {
                localStorage.setItem("currentUserId", JSON.stringify(res.data.id))
                localStorage.setItem("currentUserAdress", JSON.stringify(res.data.address))
            })
        }catch {
            console.error("Не удалось войти в аккаунт!")
        }
    }

    handlerSubmit(event) {
        
        const user = {
            address: this.state.adress,
            password: this.state.password
        }
        const newUser = {
            address: this.state.adress,
            password: this.state.password
        }

        if(this.state.pageVersion === true) {
            this.createNewUser(newUser)
        }

        if(this.state.pageVersion === false) {
            this.login(user)
        }
        event.preventDefault()
    }

render() {
    return(   
        <div className="wrapper_login">
            <form className="login" onSubmit={this.handlerSubmit}>
                <div className="login_logo"><span>YO</span>mail</div>
                <input
                    type="text"
                    placeholder="Введите адресс"
                    value={this.state.adress}
                    onChange={(event) => this.setState({adress: event.target.value})}>
                </input>
                {this.state.validateAddresError && <div>{this.state.validateAddresError}</div>}
                <input 
                    placeholder="Введите пароль" 
                    type="password"
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})}></input>
                <button 
                    className="login_button" 
                    type="submit">{this.state.pageVersion ? "Зарегистрироваться" : "Войти" }
                </button>
                <div
                    onClick={() => this.setState({pageVersion: !this.state.pageVersion})}
                    className="login_registration">{this.state.pageVersion ? "Войти" : "Зарегистрироваться"}
                </div>
            </form>
           <img className="login_exit" src="./icons/close.svg" alt=""></img>
        </div>
    )
}
    
}