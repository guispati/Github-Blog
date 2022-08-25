import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faComment, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NavigationContainer, PostHeaderContainer, PostInfo } from "./styles";
import { useNavigate } from "react-router-dom";
import { FullPost } from '../..';

interface PostHeaderProps {
    post: FullPost;
}

export function PostHeader({ post }: PostHeaderProps) {
    const navigate = useNavigate();

    return (
        <PostHeaderContainer>
            <NavigationContainer>
                <a onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Voltar</span>
                </a>
                <a href={post.html_url} target="_blank">
                    <span>Ver no github</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </NavigationContainer>
            <PostInfo>
                <h1>{post.title}</h1>

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{post.user ? post.user.login : ''}</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>{post.created_at}</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faComment} />
                        <span>{post.comments} comentários</span>
                    </li>
                </ul>
            </PostInfo>
        </PostHeaderContainer>
    )
}