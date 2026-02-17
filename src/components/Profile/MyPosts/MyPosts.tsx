import s from "./MyPosts.module.css";
import {Post} from "./Post/Post.tsx";

export const MyPosts = () => {
    return <>
        <div> my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>

            <Post message="It's my first post" count={3}/>
            <Post message="Hi, how are you?" count={5}/>


        </div>
    </>
}
