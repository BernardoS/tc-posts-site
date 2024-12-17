import styled from "styled-components";


export const LoginContainer = styled.div`
    background-color:#1E4071;
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh;
    flex-direction:column;
`;

export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    max-width:425px;
`;

export const WhiteSeparator = styled.hr`
    width:100%;
    margin-top:64px;
    margin-bottom:32px;
`;

export const LoginTitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:5px;
    margin-bottom:16px;
`;

export const LoginTitle = styled.h1`
    color:#FCC918;
    font-size:32px;
    font-weight:700;
    margin:unset;
`;

export const LoginSubtitle = styled.h2`
    color:#FFFFFF;
    font-size:24px;
    font-weight:700;
    margin:unset;
`;
export const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    input{
        width:100%;
    }
`;

export const LoginForm = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
`;