import React from "react"
import { MesageItems } from "../../MesageItem/MesageItems"


export const IncomingPage = ({incoming}) => {
    return(
        <div className="mailPage">
            {incoming.mesages.map(mesage => <MesageItems key={mesage.id} mesage={mesage}/>)}
        </div>
    )
}