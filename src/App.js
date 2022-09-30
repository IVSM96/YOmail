import React, {Component} from "react"
import "./App.css"
import { IncomingPage } from "./components/Pages/IncomingMailPage/IncomingPage"
import {Header} from "./components/Header/header"
import { NavBar } from "./components/NavBar/NavBar"
import { Switch, Route, } from "react-router-dom"
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
    
      constructor() {
        super()
        this.state = {
            currentUserId : '',
            currentUserIdInLocalStorage: localStorage.getItem("currentUserId"),
            sender : '',
            incoming: INCOMING_MESAGES,
            send: SEND_MESAGES,
            spam: SPAM_MESAGES,
            remote: REMOTE_MESAGES,
            drafts: DRAFTS_MESAGES,       
        }
        this.FetchCurrentUserIncomingMessages = this.FetchCurrentUserIncomingMessages.bind(this)
        this.FetchCurrentUserSendMessages = this.FetchCurrentUserSendMessages.bind(this)
        this.FetchCurrentUserAddress = this.FetchCurrentUserAddress.bind(this)
        this.login = this.login.bind(this)
        this.createNewUser = this.createNewUser.bind(this)
        
    }

    FetchCurrentUserIncomingMessages = async () => {
        await axios.get(`${BASE_URL}/messages/incoming/${this.state.currentUserIdInLocalStorage}`)
        .then(res => this.setState({incoming: res.data}))
       }

    FetchCurrentUserSendMessages = async () => {
        await axios.get(`${BASE_URL}/messages/sent/${this.state.currentUserIdInLocalStorage}`)
        .then(res => this.setState({send: res.data}))
       }
    FetchCurrentUserAddress = async () => {
        await axios.get(`${BASE_URL}/user/address/${this.state.currentUserIdInLocalStorage}`)
        .then(res => this.setState({sender: res.data}))
    }

    createNewUser = async (newUser) => {
        await axios.post(`${BASE_URL}/user/create`, newUser)
        .catch(error => console.log("Error", error))
    }

    login = async (user) => {
        await axios.post(`${BASE_URL}/user/login`, user)
        .then(res => {
            this.setState({currentUserId: res.data.id})
            localStorage.setItem("currentUserId", JSON.stringify(res.data.id))
        })
    }

    componentDidMount() {

       if(this.state.currentUserIdInLocalStorage) {
            this.FetchCurrentUserIncomingMessages()
            this.FetchCurrentUserSendMessages()
            this.FetchCurrentUserAddress()
       }

    }

    render() {

        return(

            <div>
                { !this.state.currentUserId && 
                    <LoginPage 
                        createNewUser={this.createNewUser}
                        login={this.login}
                    />
                }
                <div>
                    <Header currentUserName={this.state.sender}/>    
                    <div className="wrapper">
                        <NavBar 
                            incomingCount={this.state.incoming.count} 
                            sendCount={this.state.send.count}
                        />
                        <Switch>
                            <Route path="/drafts"><DraftsPage/></Route>
                            <Route path="/spam"><SpamPage/></Route>
                            <Route path="/remote"><RemotePage/></Route>
                            <Route path="/archive"><ArchivePage/></Route>
                            <Route path="/incoming"><IncomingPage incoming={this.state.incoming}/></Route>
                            <Route path="/sent"><SentPage send={this.state.send}/></Route>
                            <Route path="/create"><CreateMailPage sender={this.state.sender}/></Route>
                        </Switch>
                    </div>        
                </div>
            </div>
        )
    }
} 


export default App