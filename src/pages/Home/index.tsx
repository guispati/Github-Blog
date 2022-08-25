import { useCallback, useEffect, useState } from "react";
import { api, githubUsername, githubRepo } from "../../lib/axios";
import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer, PostList } from "./styles";

export interface PostInterface {
    number: number;
    title: string;
    created_at: string;
    body: string;
}

export function Home() {
    const [posts, setPosts] = useState<PostInterface[]>([]);

    const fetchPosts = useCallback(async (query: string = "") => {
        const response = await api.get(`search/issues?q=${query}%20repo:${githubUsername}/${githubRepo}`);

        setPosts(response.data.items);
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <HomeContainer>
            <Profile />

            <SearchForm postsNumber={posts.length} fetchPosts={fetchPosts} />
            <PostList>
                {posts.map(post => {
                    return (
                        <PostCard key={post.number} post={post} />
                    )
                })}
            </PostList>
        </HomeContainer>
    )
}