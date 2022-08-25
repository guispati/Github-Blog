import { useParams } from "react-router-dom";
import { PostContainer } from "./styles";

export function Post() {
    const { id } = useParams();
    console.log(id);

    return (
        <PostContainer>
            <h1>Post</h1>
        </PostContainer>
    )
}