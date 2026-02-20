import { createRoot } from "react-dom/client"
import {App} from "./App.tsx";
import {BrowserRouter} from "react-router";
import {state} from "./redux/state"

createRoot(document.getElementById('root')!).render(<BrowserRouter><App state={state}/></BrowserRouter>)
