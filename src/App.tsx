import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Dialogs} from "./components/Dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router";
import {Profile} from "./components/Profile/Profile.tsx";
import {News} from "./components/News/News.tsx";
import {Music} from "./components/Music/Music.tsx";
import {Settings} from "./components/Settings/Settings.tsx";

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

export const App = () => {
    const posts: PostType[] = [
        {id: "1", message: "It's my first post", likesCount: 3},
        {id: "2", message: "Hi, how are you?", likesCount: 5},
    ]

    const dialogs:DialogType[] = [
        {id: "1", name: "Veronica"},
        {id: "2", name: "Sveta"},
        {id: "3", name: "Dima"},
        {id: "4", name: "Victor"},
    ]

    const messages:MessageType[] = [
        {id: "1", message: "Hello!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "What are you doing tonight?"},
        {id: "4", message: "Hi"},
    ]

    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
            <Routes>
                <Route path={'/dialogs'} element={<Dialogs dialogs={dialogs} messages={messages}/>}/>
                <Route path={'/profile'} element={<Profile posts={posts}/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
            </Routes>

        </div>

    </div>

}


