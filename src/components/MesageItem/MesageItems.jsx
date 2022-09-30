import React from "react"
import "./MesageItems.css"
import axios from "axios"
import { BASE_URL } from "../../Api/base"


export class MesageItems extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            visibleBody: false,
            mesage: props.mesage,
            body: ""
        }
        this.fetchMailBody = this.fetchMailBody.bind(this)
    }

    fetchMailBody = async () => {
        if(this.state.body.length == "") {
            await axios.get(`${BASE_URL}/message/${this.state.mesage.id}`)
            .then(res => this.setState({body: res.data.body}))
        }

        console.log("body:", this.state.body)
        this.setState({visibleBody: !this.state.visibleBody})
        console.log(this.state.body.length)
    }

    render() {
        return(
        <div className="mesageItem">
            <div className="mesageItem_wrapper__static">
               <div className="mesageItem_sender">{this.state.mesage.sender}</div>
                <div className="mesageItem_title">
                    <div>
                       {!this.state.mesage.read && <img src="./icons/dot.svg" width="20" height="20" alt=""></img>} 
                    </div>
                    {this.state.mesage.title}
                </div>
                <div className="mesageItem_wrapper">
                    <button
                        className="mesageItem_button" 
                        onClick={this.fetchMailBody}>
                        {this.state.visibleBody ? "закрыть письмо" : "открыть письмо"} 
                        <img src="./icons/arrow_drop.svg" width="20" height="20" alt=""></img>
                    </button>
                    <div className="mesageItem_date">{this.state.mesage.date}</div>   
                </div> 
            </div>
           {this.state.visibleBody && <div className="mesageItem_body">{this.state.body}</div>}
        </div>
    )
    }
}