import React from "react"
import "./Home.css"
import { SEND_MESAGES } from "../../mocks"
import { MesageItems } from "./Home_mesageItems"

export const HomePage = () => {
    return(
        <div className="home">
            {SEND_MESAGES.mesages.map(mesage => <MesageItems key={mesage.id} mesage={mesage}/>)}
        </div>
    )
}