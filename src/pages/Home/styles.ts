import styled from "styled-components";
import { devices } from "../../styles/themes/default";

export const HomeContainer = styled.main`
    margin-bottom: 10rem;
`;

export const PostList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media ${devices.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;