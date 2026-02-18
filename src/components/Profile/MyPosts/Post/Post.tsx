import s from "./Post.module.css";
import img from "./../../../../assets/images/images.png"
type postType = {
    message: string,
    count: number,
}

export const Post = ({message, count}: postType) => {
    return <div className={s.item}>
        <img src={img}
             alt='avatar'/>
        {message}
        <div><span>like:{count}</span></div>
    </div>
}
