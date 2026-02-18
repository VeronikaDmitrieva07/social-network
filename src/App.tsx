import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Dialogs} from "./components/Dialogs/Dialogs.tsx";
import {Route, Routes} from "react-router";
import {Profile} from "./components/Profile/Profile.tsx";
import {News} from "./components/News/News.tsx";
import {Music} from "./components/Music/Music.tsx";
import {Settings} from "./components/Settings/Settings.tsx";


export const App = () => {

    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
            <Routes>
                <Route path={'/dialogs'} element={<Dialogs/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
            </Routes>

        </div>

    </div>

}


