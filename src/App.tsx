import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Profile} from "./components/Profile/Profile.tsx";


export const App = () => {

    return <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>

}


