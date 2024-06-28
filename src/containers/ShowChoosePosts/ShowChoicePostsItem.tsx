import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { Post } from '../../types';

const ShowChoicePostsItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setLoading] = useState(true);

    const fetchChoicePost = useCallback(async (postId: string) => {
        try {
            const response = await axiosApi.get<Post | null>(`/posts/${postId}.json`);
            if (response.data) {
                setPost(response.data);
            }
        } catch (error) {
            console.error('Error fetching post', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (id !== undefined) {
            void fetchChoicePost(id);
        }
    }, [id, fetchChoicePost]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const removePost = async () => {
        await axiosApi.delete(`/posts/${id}.json`);
        navigate('/');
    };

    return (
        post ? (
            <div className="choiceDeleteOrEdit d-flex flex-column align-items-center">
                <h1>Вы хотите удалить или редактировать пост?</h1>
                <h3>{post.title}</h3>
                <span className="mb-2">{post.description}</span>
                <button onClick={removePost} className="btn btn-danger mb-2 w-25">Delete</button>
                <Link to={`/posts/${id}/edit`} className="btn btn-primary w-25">
                    Edit
                </Link>
            </div>
        ) : (
            <div>Пост не найден</div>
        )
    );
};

export default ShowChoicePostsItem;
