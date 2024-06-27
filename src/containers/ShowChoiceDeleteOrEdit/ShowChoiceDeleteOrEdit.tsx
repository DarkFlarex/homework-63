import React from 'react';
import ShowChoiceDeleteOrEditItem from './ShowChoiceDeleteOrEditItem';
import { Post } from '../../types';

interface Props {
    Posts: Post[];
    onRemovePost: React.MouseEventHandler;
}

const ShowChoiceDeleteOrEdit: React.FC<Props> = ({ Posts, onRemovePost }) => {
    return (
        <>
            {Posts.map((post) => (
                <ShowChoiceDeleteOrEditItem key={post.id} Post={post} onRemovePost={onRemovePost} />
            ))}
        </>
    );
};

export default ShowChoiceDeleteOrEdit;
