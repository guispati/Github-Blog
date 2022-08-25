import reactMarkdown from "react-markdown";
import styled from "styled-components";

export const PostContentContainer = styled.div`
    padding: 2.5rem 2rem;
`;

export const MarkdownContent = styled(reactMarkdown)`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    a {
        color: ${props => props.theme['blue']};
        line-height: 1.6;
    }
`;