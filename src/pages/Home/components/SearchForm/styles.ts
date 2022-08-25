import styled from "styled-components";

export const SearchFormContainer = styled.section`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    input {
        padding: 0.75rem 1rem;
        background: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-border"]};
        border-radius: 6px;
        color: ${props => props.theme["base-text"]};

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`;

export const LineInfo = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${props => props.theme["base-subtitle"]};
    }

    > span {
        font-size: 0.875rem;
        text-align: right;
        color: ${props => props.theme["base-span"]};
    }
`;