import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";
import type {dialogsPageType} from "../../redux/state.ts";

type DialogsType = {
    dialogsState: dialogsPageType
}

export const Dialogs = ({dialogsState}: DialogsType) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>

            <div className={s.messages}>
                {dialogsState.messages.map(m => <Message message={m.message}/>)}
            </div>

        </div>
    )
}

