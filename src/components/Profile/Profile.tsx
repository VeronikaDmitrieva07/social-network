import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts.tsx";
import img from "./../../assets/images/main.png"

export const Profile = () => {
    return <div className={s.content}>

        <div>
            <img src= {img} alt="main"
                 width="600px"/>
        </div>

        <div>ava+description</div>
<MyPosts />
    </div>
}

