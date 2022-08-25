import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, githubRepo, githubUsername } from "../../lib/axios";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { PostContainer } from "./styles";

export interface FullPost {
    title: string;
    created_at: string;
    comments: number;
    body: string;
    html_url: string;
    user: {
        login: string;
    }
}

export function Post() {
    const [post, setPost] = useState<FullPost>({} as FullPost);
    const { id } = useParams();

    const fetchPost = useCallback(async () => {
        const response = await api.get(`repos/${githubUsername}/${githubRepo}/issues/${id}`);

        setPost(response.data);
    }, []);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    return (
        <PostContainer>
            <PostHeader post={post} />

            <PostContent body={post.body} />
        </PostContainer>
    )
}