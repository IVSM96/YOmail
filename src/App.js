import React, {Component} from "react"
import "./App.css"
import { IncomingPage } from "./components/Pages/IncomingMailPage/IncomingPage"
import {Header} from "./components/Header/header"
import { NavBar } from "./components/NavBar/NavBar"
import { Switch, Route } from "react-router-dom"
import { CreateMailPage } from "./components/Pages/CreateMailPage/CreateMail"
import { SPAM_MESAGES, SEND_MESAGES, REMOTE_MESAGES, INCOMING_MESAGES, DRAFTS_MESAGES } from "./mocks"
import { SentPage } from "./components/Pages/SentMailPage/SentPage"
import { RemotePage } from "./components/Pages/RemoteMailPage/RemotePage"
import { SpamPage } from "./components/Pages/SpamMailPage/SpamPage"
import { DraftsPage } from "./components/Pages/DraftsMailPage/DraftsPage"
import { LoginPage } from "./components/Pages/LoginPage/LoginPage"
import axios from "axios"
import { BASE_URL } from "./Api/base"
import { ArchivePage } from "./components/Pages/ArchivePage/Archive"


class App extends Component {

    currentUserId = localStorage.getItem("currentUserId")
    currentUserAdress = localStorage.getItem("currentUserAdress")

      

    componentDidMount() {

       const FetchCurrentUserIncomingMessages = async () => {
        await axios.get(`${BASE_URL}/messages/incoming/${this.currentUserId}`)
        .then(res => this.setState({incoming: res.data}))
       }

       const FetchCurrentUserSendMessages = async () => {
        await axios.get(`${BASE_URL}/messages/sent/${this.currentUserId}`)
        .then(res => this.setState({send: res.data}))
       }

       FetchCurrentUserIncomingMessages()
       FetchCurrentUserSendMessages()
       
       console.log('componentDidMount work')
       console.log(this.currentUserAdress)
    }

    constructor() {
        super()
        this.state = {
            sender : '',
            incoming: INCOMING_MESAGES,
            send: SEND_MESAGES,
            spam: SPAM_MESAGES,
            remote: REMOTE_MESAGES,
            drafts: DRAFTS_MESAGES,       
        }
        
    }

    render() {
        return(
            <div>
                { this.currentUserId ? (
                    <div>
                        <Header/>    
                        <div className="wrapper">
                            <NavBar incomingCount={this.state.incoming.count} sendCount={this.state.send.count}/>
                            <Switch>
                                <Route path="/drafts"><DraftsPage/></Route>
                                <Route path="/spam"><SpamPage/></Route>
                                <Route path="/remote"><RemotePage/></Route>
                                <Route path="/archive"><ArchivePage/></Route>
                                <Route path="/incoming"><IncomingPage incoming={this.state.incoming}/></Route>
                                <Route path="/sent"><SentPage send={this.state.send}/></Route>
                                <Route path="/create"><CreateMailPage currentUserAdress={this.currentUserAdress}/></Route>
                            </Switch>
                        </div>        
                    </div>
                ):(
                    <div>
                        <Switch>
                            <Route path="/"><LoginPage currentUser={this.currentUser}/></Route>
                        </Switch>
                    </div>
                )}
            </div>
        )
    }
} 


export default App