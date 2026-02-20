import {MyPosts} from "./MyPosts/MyPosts.tsx";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo.tsx";
import type {profilePageType} from "../../redux/state.ts";

export type ProfileType = {
    postsState: profilePageType
}

export const Profile = ({postsState}: ProfileType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts posts={postsState.posts}/>
    </div>
}

