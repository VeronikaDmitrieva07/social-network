import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts.tsx";

export const Profile = () => {
    return <div className={s.content}>

        <div>
            <img src={"https://cs6.pikabu.ru/post_img/big/2015/04/26/6/1430037626_1786129976.jpg"} alt="card"
                 width="600px"/>
        </div>

        <div>ava+description</div>
<MyPosts/>
    </div>
}

