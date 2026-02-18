import s from "./Header.module.css"
import img from "./../../assets/images/header.png"

export const Header = () => {
    return <header className={s.header}>
        <img src={img} alt="cat"/>
    </header>

}

