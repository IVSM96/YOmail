import React, {Component} from "react"
import "./App.css"
import { IncomingPage } from "./components/Pages/IncomingMailPage/IncomingPage"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Switch, Route } from "react-router-dom"
import { CreateMailPage } from "./components/Pages/CreateMailPage/CreateMail"
import { MENUITEMS, INCOMING_MESAGES } from "./mocks"
import { SentPage } from "./components/Pages/SentMailPage/SentPage"
import { RemotePage } from "./components/Pages/RemoteMailPage/RemotePage"
import { SpamPage } from "./components/Pages/SpamMailPage/SpamPage"
import { DraftsPage } from "./components/Pages/DraftsMailPage/DraftsPage"


class App extends Component {
    menuItems = MENUITEMS

    constructor() {
        super()
        this.state = {
            incoming: INCOMING_MESAGES       
        }
        
    }


    render() {
        return(
            <div>
                <Header/>    
                <div className="wrapper">
                    <NavBar menuItems={this.menuItems}/>
                    <Switch>
                        <Route path="/drafts"><DraftsPage/></Route>
                        <Route path="/spam"><SpamPage/></Route>
                        <Route path="/remote"><RemotePage/></Route>
                        <Route path="/incoming"><IncomingPage incoming={this.state.incoming}/></Route>
                        <Route path="/sent"><SentPage/></Route>
                        <Route path="/create"><CreateMailPage/></Route>
                    </Switch>
                </div>        
            </div>
        )
    }
} 


export default App