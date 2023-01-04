import styled from "styled-components";
export const Container = styled.div``;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Form = styled.form`
    width: 400px;
    height: 400px;
    padding: 30px;
    border-radius: 10px;
    margin-top: 100px;
    margin-left: 500px;
    background-color: ${props => props.theme.color.tertiary};
`;

export const FormTitle = styled.h1`
    margin-bottom: 40px;
    color: ${props => props.theme.color.white}; 
    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.color.warning};  
    }
`;