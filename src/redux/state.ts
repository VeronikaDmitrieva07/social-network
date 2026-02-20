export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type profilePageType = {
    posts: PostType[]
}

export type dialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType

}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: "1", message: "It's my first post", likesCount: 3},
            {id: "2", message: "Hi, how are you?", likesCount: 5},
        ],

    },
    dialogsPage: {
        dialogs: [
            {id: "1", name: "Veronica"},
            {id: "2", name: "Sveta"},
            {id: "3", name: "Dima"},
            {id: "4", name: "Victor"},
        ],
        messages: [
            {id: "1", message: "Hello!"},
            {id: "2", message: "How are you?"},
            {id: "3", message: "What are you doing tonight?"},
            {id: "4", message: "Hi"},
        ]
    }
}