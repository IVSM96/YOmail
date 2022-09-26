import React from "react"
import "./CreateMail.css"


export class CreateMailPage extends React.Component {
        
    constructor() {
        super()
        this.state = {
            title: '',
            body: '',
            recipient: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

   

    handleSubmit(event) {
        const newMesage = {
            user_id: '',
            title: this.state.title,
            body: this.state.body,
            recipient: this.state.recipient,
            sender: '',
        }
        //Здесь будет логика отправки на бэк
        console.log(newMesage)
        event.preventDefault()
    }

render() {

    return( 
        <div className="create">
            <form onSubmit={this.handleSubmit} className="create_form">
                <div className="create_form__label">
                    <label >Кому</label>
                    <input 
                        type="text"
                        value={this.state.recipient} 
                        onChange={(event) => this.setState({recipient: event.target.value})}>
                    </input>
                </div>
                <div className="create_form__label">
                    <label >Тема</label>
                    <input 
                        type="text"
                        value={this.state.title} 
                        onChange={(event) => this.setState({title: event.target.value})}>
                    </input>
                </div>
                <textarea 
                    className="create_form__texarea" 
                    placeholder="Напишите что нибудь"
                    value={this.state.body} 
                    onChange={(event) => this.setState({body: event.target.value})}>
                </textarea>
                <button className="create_form__button" type="submit">Отправить</button>
            </form>
        </div>
    )
}
    
}