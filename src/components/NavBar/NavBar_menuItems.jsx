import React from "react"


export const MenuItems = ({item}) => {
    return(
        <div className="menuItem">
            <img width="20" height="20" src={item.url} alt=""></img>
            <div>{item.title}</div>
            {/* <div>Индикатор с бэка</div>
            <div>Счетчик с бэка</div> */}
        </div>
    )
}