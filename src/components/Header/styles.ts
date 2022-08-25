import styled from "styled-components";
import bgCover from '../../assets/bgCover.png';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: url(${bgCover}) no-repeat center;
    background-size: cover;

    img {
        margin-top: 4rem;
    }
`;