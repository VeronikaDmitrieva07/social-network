import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div className={s.dialog + ' ' + s.active}>Veronica</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Victor</div>

            </div>

            <div className={s.messages}>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What are you doing tonight?</div>
            </div>

        </div>
    )
}

