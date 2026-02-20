import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";

export const Dialogs = () => {

    const dialogsData = [
        {id: "1", name: "Veronica"},
        {id: "2", name: "Sveta"},
        {id: "3", name: "Dima"},
        {id: "4", name: "Victor"},
    ]

    const messagesData = [
        {id: "1", message: "Hello!"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "What are you doing tonight?"},
        {id: "4", message: "Hi"},
    ]

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>

        </div>
    )
}

