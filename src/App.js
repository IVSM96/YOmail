import React from "react"
import "./App.css"
import { HomePage } from "./components/Home/Home"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CreateMailPage } from "./components/CreateMail/CreateMail"

function App() {
return(
    <div>
        <Header/>
        <div className="wrapper">
            <NavBar/>
            <Switch>
                <Route path="/create"><CreateMailPage/></Route>
                <Route path="/home"><HomePage/></Route>
            </Switch>
        </div>        
    </div>
)
} 





export default App