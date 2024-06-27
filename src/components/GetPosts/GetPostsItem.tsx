import React from 'react';
import {GetPost} from "../../types";
import {Link} from "react-router-dom";

interface Props {
    Post:GetPost;
}

const GetPostsItem:React.FC <Props> = ({Post}) => {
    return (
        <div className="card mb-2 Post">
            <div className="row g-0 text-start p-3">
                <span className="Post-date">Create on: {new Date(Post.datetime).toLocaleString()}</span>
                <h3 className="Post-title">{Post.title}</h3>
                <Link to={'/posts/' + Post.id} className="btn btn-sm btn-primary w-25">Read more</Link>
            </div>
        </div>
    );
};

export default GetPostsItem;