import img from "../../../assets/images/main.png";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return   <div>
        <div>
            <img src= {img} alt="main"
                 width="600px"/>
        </div>

        <div className={s.descriptionBlock}>ava+description</div>
    </div>
}

