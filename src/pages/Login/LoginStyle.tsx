import styled from "styled-components";
import { device } from "../../layoutBreakpoints";


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
    flex-wrap: wrap;
    width: 100%;

    @media ${device.mobile} {
       width: 90%;
    }
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
    gap:4px;
    input{
        width:100%;
    }
`;

export const LoginForm = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
`;

export const LogoButton = styled.button`
    background-color:transparent;
    border:none;
    cursor:pointer;
    img{
        max-width: 100%;
    }
`;

export const InputLabel = styled.label`
    font-weight:700;
    font-size:16px;
    color:#FCC918;
`;

export const EmailInput = styled.input`
    background-color:#FFFFFF;
    border-radius:10px;
    border:2px solid #08244B;
    height:48px;
    padding:16px;
    box-sizing:border-box;
`;

export const PasswordContainer = styled.div`
    display:flex;
    align-items:center;
    position:relative;

    input{
        background-color:#FFFFFF;
        border-radius:10px;
        border:2px solid #08244B;
        height:48px;
        box-sizing:border-box;
        padding:16px;
    }
    span{
        position:absolute;
        right:16px;
        cursor:pointer;
    }    
`;

export const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top:16px;
    flex-wrap: wrap;
    gap: 16px;
    @media ${device.mobile} {
        flex-direction:column-reverse;
    }
`;