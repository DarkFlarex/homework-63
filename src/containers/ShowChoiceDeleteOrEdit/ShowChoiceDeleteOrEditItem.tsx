import {Link} from "react-router-dom";
import {Post} from "../../types";
import React from "react";

interface Props{
    Post:Post;
    onRemovePost: React.MouseEventHandler;
}

const ShowChoiceDeleteOrEditItem:React.FC<Props> = ({Post,onRemovePost}) => {

    return (
        <div className="choiceDeleteOrEdit d-flex flex-column align-items-center">
            <h1>Вы хотите удалить или редактировать пост?</h1>
            <h3>{Post.title}</h3>
            <span className="mb-2">{Post.description}</span>
            <button onClick={onRemovePost} className="btn btn-danger mb-2 w-25">Delete</button>
            <Link to={`/edit/${Post.id}`} className="btn btn-primary w-25">Edit</Link>
        </div>
    );
};

export default ShowChoiceDeleteOrEditItem;