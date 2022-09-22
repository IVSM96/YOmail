import React from "react"


export const MenuItems = ({item}) => {
    return(
        <div className="menuItem">
            <img width="20" height="20" src={item.url} alt=""></img>
            <div>{item.title}</div>
            <div className="menuItem_count">{item.count}</div>
        </div>
    )
}