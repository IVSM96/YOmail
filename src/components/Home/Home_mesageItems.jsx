import React from "react"


export const MesageItems = ({mesage}) => {
    return(
        <div className="mesageItem">
           <div className="mesageItem_sender">{mesage.sender}</div>
            <div className="mesageItem_title">
                {!mesage.read && <img src="./icons/dot.svg" width="20" height="20" alt=""></img>}
                {mesage.title}
            </div>
            <div className="mesageItem_wrapper">
                <button className="mesageItem_button">Открыть письмо <img src="./icons/arrow_drop.svg" width="20" height="20" alt=""></img></button>
                <div className="mesageItem_date">{mesage.dateTime}</div>   
            </div>
           
        </div>
    )
}