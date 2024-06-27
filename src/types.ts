export interface ApiPost{
    datetime:string;
    title:string;
    description:string;
}

export interface ApiPosts{
    [id:string]: ApiPost;
}

export interface Post extends ApiPost{
    id:string;
}

export interface PostMutation{
    datetime:string;
    title:string;
    description:string;
}

