import s from "./MyPosts.module.css";
import {Post} from "./Post/Post.tsx";
import type {PostType} from "../../../App.tsx";

type MyPosts = {
    posts: PostType[]
}

export const MyPosts = ({posts}: MyPosts) => {
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
            {posts.map(p => <Post message={p.message} count={p.likesCount}/>)}
        </div>
    </>
}
