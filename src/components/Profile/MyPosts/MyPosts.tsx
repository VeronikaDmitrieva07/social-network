import s from "./MyPosts.module.css";
import {Post} from "./Post/Post.tsx";

export const MyPosts = () => {
    const postsData = [
        {id: "1", message: "It's my first post", likesCount: 3},
        {id: "2", message: "Hi, how are you?", likesCount: 5},
    ]

    return <>
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
        </div>
        <div className={s.posts}>

            <Post message={postsData[0].message} count={postsData[0].likesCount}/>
            <Post message={postsData[1].message} count={postsData[1].likesCount}/>

        </div>
    </>
}
