import s from "./Dialogs.module.css"
import {NavLink} from "react-router";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Veronica</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Sveta</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Dima</NavLink></div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Victor</NavLink></div>

            </div>

            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What are you doing tonight?</div>
            </div>

        </div>
    )
}

