import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    margin: 7px 0;
    padding: 10px;
    border-radius: 5px;
    color: ${props => props.theme.color.warning};
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }
`;
