import {MyPosts} from "./MyPosts/MyPosts.tsx";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";
import type {PostType} from "../../App.tsx";

export type ProfileType = {
    posts: PostType[],
}

export const Profile = ({posts}: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

