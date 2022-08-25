import { PostInterface } from "../..";
import { dateFormatterRelativeToNow } from "../../../../utils/formatter";
import { PostAbstract, PostContainer, PostInfo } from "./styles";

interface PostProps {
    post: PostInterface;
}

export function PostCard({ post }: PostProps) {
    const dateFormatted = dateFormatterRelativeToNow(post.created_at);
    return (
        <PostContainer to={`/post/${post.number}`}>
            <PostInfo>
                <strong>{post.title}</strong>
                <span>{dateFormatted}</span>
            </PostInfo>

            <PostAbstract children={post.body} />

        </PostContainer>
    );
}