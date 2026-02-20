import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";

export const Dialogs = () => {

    const dialogs = [
        {id: "1", name: "Veronica"},
        {id: "2", name: "Sveta"},
        {id: "3", name: "Dima"},
        {id: "4", name: "Victor"},
    ]

    const messages = [
        {id: "1", message: "Hello!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "What are you doing tonight?"},
        {id: "4", message: "Hi"},
    ]

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

