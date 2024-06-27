import { GetPost } from '../../types';
import React from 'react';
import ShowChoiceDeleteOrEditItem from "./ShowChoiceDeleteOrEditItem";

interface Props {
    Posts: GetPost[];
    onRemovePost: React.MouseEventHandler;
}

const ShowChoiceDeleteOrEdit: React.FC<Props> = ({ Posts, onRemovePost }) => {
    return (
        <>
            {Posts.map(post => (
                <ShowChoiceDeleteOrEditItem key={post.id} Post={post} onRemovePost={onRemovePost} />
            ))}
        </>
    );
};

export default ShowChoiceDeleteOrEdit;
