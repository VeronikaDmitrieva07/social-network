import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem.tsx";
import {Message} from "./Message/Message.tsx";



export const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

               <DialogItem name="Veronica" id="1"/>
               <DialogItem name="Sveta" id="2"/>
               <DialogItem name="Dima" id="3"/>
               <DialogItem name="Victor" id="4"/>

            </div>

            <div className={s.messages}>
                <Message message="Hello!"/>
                <Message message="How are you?"/>
                <Message message="What are you doing tonight?"/>
                <Message message="Hi"/>
            </div>

        </div>
    )
}

