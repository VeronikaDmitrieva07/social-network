import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Dialogs} from "./components/Dialogs/Dialogs.tsx";


export const App = () => {

    return <div className="app-wrapper">
        <Header/>
        <Navbar/>
        {/*<Profile/>*/}
        <div className="app-wrapper-content">
            <Dialogs/>
        </div>

    </div>

}


