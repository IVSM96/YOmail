export const SEND_MESAGES = {
    count: 0,
    mesages: []
}

export const SPAM_MESAGES = {
    count: 0,
    mesages: []
}

export const REMOTE_MESAGES = {
    count: 0,
    mesages: []
}
export const DRAFTS_MESAGES = {
    count: 0,
    mesages: []
}



export const INCOMING_MESAGES = {
    count: 0,
    messages: []
}
export const MENUITEMS = [
    {url: "./icons/incoming.svg", title: "Входящие", count: INCOMING_MESAGES.count, link: "/incoming"},
    {url: "./icons/send.svg", title: "Отправленные", count: '', link: "/sent"  },
    {url: "./icons/delete.svg", title: "Удаленные", count: '', link: "/remote"},
    {url: "./icons/cancel.svg", title: "Спам", count: '', link: "/spam" },
    {url: "./icons/drafts.svg", title: "Черновики", count: '', link: "/drafts" }
]
