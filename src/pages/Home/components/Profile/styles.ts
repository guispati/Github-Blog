import styled from "styled-components";

export const ProfileContainer = styled.header`
    background: ${props => props.theme['base-profile']};
    margin-top: -4.875rem;
    padding: 2rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
        margin-left: 0.5rem;
    }
`;


export const ProfileInfo = styled.div`
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

        a {
            color: ${props => props.theme["blue"]};
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: ${props => props.theme["base-text"]};
    }

    ul {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;

        li {
            display: flex;
            gap: 0.5rem;
            align-items: center;

            color: ${props => props.theme["base-subtitle"]};

            svg {
                color: ${props => props.theme["base-label"]};
            }
        }
    }
`;