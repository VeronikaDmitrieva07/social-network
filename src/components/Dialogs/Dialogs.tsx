import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";
import type {DialogType, MessageType} from "../../App.tsx";

type DialogsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const Dialogs = ({dialogs, messages}: DialogsType) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>

            <div className={s.messages}>
                {messages.map(m => <Message message={m.message}/>)}
            </div>

        </div>
    )
}

