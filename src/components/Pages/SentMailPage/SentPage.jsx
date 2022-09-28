import React from "react"
import { MesageItems } from "../../MesageItem/MesageItems"


export const SentPage = ({send}) => {
    return(
        <div className="mailPage">
            {send.messages.map(mesage => <MesageItems key={mesage.id} mesage={mesage}/>)}
        </div>
    )
}