import React, { useCallback, useEffect, useState } from 'react';
import { ApiPost, PostMutation } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";

const initialState: PostMutation = {
    datetime: "",
    title: "",
    description: "",
};

const NewPostItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [postMutation, setPostMutation] = useState<PostMutation>(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const fetchOnePost = useCallback(async (id: string) => {
        try {
            const response = await axiosApi.get<ApiPost>(`/posts/${id}.json`);
            if (response.data) {
                setPostMutation({
                    title: response.data.title,
                    description: response.data.description,
                    datetime: response.data.datetime,
                });
            }
        } catch (error) {
            console.error('Error fetching post', error);
        }
    }, []);

    useEffect(() => {
        if (id) {
            void fetchOnePost(id);
        } else {
            setPostMutation(initialState);
        }
    }, [id, fetchOnePost]);

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setPostMutation(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const postData = {
                ...postMutation,
                datetime: new Date().toISOString(),
            };

            if (id) {
                await axiosApi.put(`/posts/${id}.json`, postData);
            } else {
                await axiosApi.post('/posts.json', postData);
            }

            navigate('/');
        } catch (e) {
            console.error('Error happened!', e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1>{id ? 'Edit Post' : 'Add New Post'}</h1>
            <form className={"AddPostForm d-flex flex-column align-items-center justify-content-center"} onSubmit={onFormSubmit}>
                <input
                    className={"AddTitleForm-input col-10 mb-3 "}
                    required
                    type="text"
                    name="title"
                    value={postMutation.title}
                    onChange={onFieldChange}
                    placeholder="title"
                />
                <textarea
                    className={"AddDescriptionForm-input col-10"}
                    required
                    name="description"
                    value={postMutation.description}
                    onChange={onFieldChange}
                    placeholder="description"
                />
                <button className={"btn btn-primary d-flex col-2 justify-content-center mt-3 text-start"} type="submit" disabled={isLoading}>
                    {id ? 'Save' : 'Add'}
                </button>
            </form>
        </>
    );
};

export default NewPostItem;
