import React from "react"
import "./CreateMail.css"


export const CreateMailPage = () => {
    return( 
        <div className="create">
            <form className="create_form">
                <div className="create_form__label"><label >Кому</label><input type="text"></input></div>
                <div className="create_form__label"><label >Тема</label><input type="text"></input></div>
                <textarea className="create_form__texarea" placeholder="Напишите что нибудь"></textarea>
                <button className="create_form__button" type="submit">Отправить</button>
            </form>
        </div>
    )
}