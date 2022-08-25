import { PostInterface } from "../..";
import { dateFormatterRelativeToNow } from "../../../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
    post: PostInterface;
}

export function PostCard({ post }: PostProps) {
    const dateFormatted = dateFormatterRelativeToNow(post.created_at);
    return (
        <PostContainer to={`/post/${post.number}`}>
            <div>
                <strong>{post.title}</strong>
                <span>{dateFormatted}</span>
            </div>

            <p>{post.body}</p>

        </PostContainer>
    );
}