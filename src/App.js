import React, {Component} from "react"
import "./App.css"
import { IncomingPage } from "./components/Pages/IncomingMailPage/IncomingPage"
import {Header} from "./components/Header/header"
import { NavBar } from "./components/NavBar/NavBar"
import { Switch, Route } from "react-router-dom"
import { CreateMailPage } from "./components/Pages/CreateMailPage/CreateMail"
import { SPAM_MESAGES, SEND_MESAGES, MENUITEMS, REMOTE_MESAGES, INCOMING_MESAGES, DRAFTS_MESAGES } from "./mocks"
import { SentPage } from "./components/Pages/SentMailPage/SentPage"
import { RemotePage } from "./components/Pages/RemoteMailPage/RemotePage"
import { SpamPage } from "./components/Pages/SpamMailPage/SpamPage"
import { DraftsPage } from "./components/Pages/DraftsMailPage/DraftsPage"
import { LoginPage } from "./components/Pages/LoginPage/LoginPage"
import axios from "axios"
import { BASE_URL } from "./Api/base"


class App extends Component {
    menuItems = MENUITEMS
    currentUser = localStorage.getItem("currentUser")

    componentDidMount() {
       const FetchCurrentUserIncomingMessages = async () => {
        await axios.get(`${BASE_URL}/messages/incoming/${this.currentUser}`)
        .then(res => this.setState({incoming: res.data}))
       }
       const FetchCurrentUserSendMessages = async () => {
        await axios.get(`${BASE_URL}/messages/sent/${this.currentUser}`)
        .then(res => this.setState({send: res.data}))
       }
       FetchCurrentUserIncomingMessages()
       FetchCurrentUserSendMessages()
    }

    constructor() {
        super()
        this.state = {
            incoming: INCOMING_MESAGES,
            send: SEND_MESAGES,
            spam: SPAM_MESAGES,
            remote: REMOTE_MESAGES,
            drafts: DRAFTS_MESAGES,       
        }
        
    }


    render() {

      if(this.currentUser) return(
            <div>
                <Header/>    
                <div className="wrapper">
                    <NavBar menuItems={this.menuItems}/>
                    <Switch>
                        <Route path="/drafts"><DraftsPage/></Route>
                        <Route path="/spam"><SpamPage/></Route>
                        <Route path="/remote"><RemotePage/></Route>
                        <Route path="/incoming"><IncomingPage incoming={this.state.incoming}/></Route>
                        <Route path="/sent"><SentPage send={this.state.send}/></Route>
                        <Route path="/create"><CreateMailPage/></Route>
                    </Switch>
                </div>        
            </div>
        )
        return(
            <div>
                <Switch>
                    <Route path="/"><LoginPage currentUser={this.currentUser}/></Route>
                </Switch>
            </div>
        )

    }
} 


export default App