import React, {useState} from 'react';
import { PostMutation} from "../../types";
import {useNavigate} from "react-router-dom";
import axios from "../../axiosApi";

const NewPostItem= () => {
    const navigate = useNavigate();
    const [postMutation, setPostMutation]= useState<PostMutation>(
        {
            datetime:"",
            title:"",
            description:"",
        },
    );

    const [isLoading, setIsLoading]= useState(false);

    const onFieldChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const { name , value} = event.target;

        setPostMutation (prevState =>({
            ...prevState,
            [name]:value,
        }));
    };

    const onFormSubmit = async  (event: React.FormEvent) => {
        try {
            setIsLoading(true);
            event.preventDefault();

            const PostData = {
                ...postMutation,
                datetime: new Date().toISOString(),
            };
            await axios.post('/posts.json', PostData);
            navigate('/');
        } catch (e){
            console.error('Error happened!');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className={"AddPostForm"} onSubmit={onFormSubmit}>
            <input
                className={"AddTitleForm-input"}
                required
                type="text"
                name="title"
                value={postMutation.title}
                onChange={onFieldChange}
                   placeholder="title"/>
            <input
                className={"AddDescriptionForm-input"}
                required
                type="text"
                name="description"
                value={postMutation.description}
                onChange={onFieldChange}
                placeholder="description"/>
            <button className={"AddPostForm-btn"} type="submit" disabled={isLoading}>Add</button>
        </form>
    );
};

export default NewPostItem;