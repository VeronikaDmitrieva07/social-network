import s from "./DialogItem.module.css";
import {NavLink} from "react-router";

type DialogItemProps = {
    name: string;
    id: string;
}

export const DialogItem = ({name, id}: DialogItemProps) => {
    return  <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + id}>{name}</NavLink></div>
}
