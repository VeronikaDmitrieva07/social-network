import s from "./Post.module.css";

type postType = {
    message: string,
    count: number,
}

export const Post = ({message, count}: postType) => {
    return <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPiPvfTFIVBGRSFNRFNWMoGk_dVR0Ul8_yg&s'
             alt='avatar'/>
        {message}
        <div><span>like:{count}</span></div>
    </div>
}
