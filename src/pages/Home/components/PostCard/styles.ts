import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PostContainer = styled(NavLink)`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    background: ${props => props.theme["base-post"]};
    border-radius: 10px;
    text-decoration: none;
    border: 2px solid transparent;

    > div {
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        strong {
            font-size: 1.25rem;
            font-weight: 700;
            color: ${props => props.theme["base-title"]};
        }
        
        span {
            font-size: 0.875rem;
            color: ${props => props.theme["base-span"]};
        }
    }
    
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        color: ${props => props.theme["base-text"]};
    }

    &:hover {
        border: 2px solid ${props => props.theme["base-label"]};
    }
`;