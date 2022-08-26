import styled from "styled-components";
import { devices } from "../../../../styles/themes/default";

export const PostHeaderContainer = styled.header`
    background: ${props => props.theme['base-profile']};
    margin-top: -4.875rem;
    padding: 2rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const NavigationContainer = styled.nav`
    display: flex;
    justify-content: space-between;

    a {
        color: ${props => props.theme["blue"]};
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > div {
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: ${props => props.theme["base-title"]};
            line-height: 1.3;
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 1rem;

        @media ${devices.tablet} {
            flex-direction: row;
            gap: 2rem;
        }

        li {
            display: flex;
            gap: 0.5rem;
            align-items: center;


            svg {
                color: ${props => props.theme["base-label"]};
            }

            span {
                color: ${props => props.theme["base-span"]};
            }
        }
    }
`;