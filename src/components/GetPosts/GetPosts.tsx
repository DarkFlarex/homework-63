import React from 'react';
import GetPostsItem from "./GetPostsItem";
import {GetPost} from "../../types";

interface  Props{
    Posts:GetPost[];
}

const GetPosts:React.FC <Props> = ({Posts}) => {
    return (
        <>
            {Posts.map((post) => (
                <GetPostsItem key={post.id} Post={post}/>
            ))}
        </>
    );
};

export default GetPosts;