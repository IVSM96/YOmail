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
    count: 8,
    mesages: [
        {
            title: "Закладки....",
            id: 1,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 2,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 3,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 4,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 5,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 6,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 7,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        },
        {
            title: "Закладки....",
            id: 8,
            sender: "cloudMan@yomail.ru",
            recipient: "test@yomail.ru",
            dateTime: "15.10.2020",
            read: false
        }
    ]
}
export const MENUITEMS = [
    {url: "./icons/incoming.svg", title: "Входящие", count: INCOMING_MESAGES.count, link: "/incoming"},
    {url: "./icons/send.svg", title: "Отправленные", count: '', link: "/sent"  },
    {url: "./icons/delete.svg", title: "Удаленные", count: '', link: "/remote"},
    {url: "./icons/cancel.svg", title: "Спам", count: '', link: "/spam" },
    {url: "./icons/drafts.svg", title: "Черновики", count: '', link: "/drafts" }
]
