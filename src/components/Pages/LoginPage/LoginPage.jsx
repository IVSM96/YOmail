import React from "react"
import "./LoginPage.css"

export class LoginPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            createNewUser: props.createNewUser,
            login: props.login,
            pageVersion: false,
            adress: '',
            password: '',
            validateAddresError: '',
            error: '',
        }

        this.handlerSubmit = this.handlerSubmit.bind(this)
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
            this.state.createNewUser(newUser)
        }

        if(this.state.pageVersion === false) {
            this.state.login(user)
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
        </div>
    )
}
    
}