import  {useCallback, useEffect, useState} from 'react';
import {ApiPosts, Post} from "../../types";
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

const GetPostsItem = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setLoading] = useState(true)

    const fetchPosts = useCallback(async () => {
        try {
            const response = await axiosApi.get<ApiPosts | null>('/posts.json');
            const postsResponse = response.data;

            if (postsResponse !== null) {
                const posts: Post[] = Object.keys(postsResponse).map((id: string) => ({
                    ...postsResponse[id],
                    id,
                }));
                setPosts(posts);
            } else {
                setPosts([]);
            }
        }catch (error){
            console.error('Error fetchPosts', error)
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(()=>{
        void fetchPosts();
    },[fetchPosts]);

    if (isLoading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="mb-2 Post border border-dark rounded p-3">
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id} className="card row g-0 text-start p-3 mb-3">
                    <span className="Post-date">Created on: {new Date(post.datetime).toLocaleString()}</span>
                    <h3 className="Post-title">{post.title}</h3>
                    <Link to={`/posts/${post.id}`} className="btn btn-sm btn-primary w-25">Read more</Link>
                </div>
            ))}
        </div>
    );
};

export default GetPostsItem;