import styled from "styled-components";

export const SavePostContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const SavePostContent = styled.div`
    padding:0px 0px 64px 0px;
    align-self:center;
    width:100%;
`;

export const SavePostTitle = styled.div`

    h1{
        font-size:48px;
        font-weight:700;
        color:#1E4071;
    }
`;

export const SavePostForm = styled.form`
    display:flex;
    flex-direction:column;
`;

export const FormGroup = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    gap:16px;
    margin-bottom:16px;
    &.small-input{
        width:45%;
    }
`;


export const FormLabel = styled.label`
    font-size:24px;
    font-family:'Maven Pro', sans-serif;
    color:#08244B;
    font-weight:600;
`;

export const FormInput = styled.input`
  border-radius:10px;
  border:2px solid #08244B;
  padding:8px 16px;
  min-height: 64px;
  font-size:18px;
  font-family:'Maven Pro', sans-serif;
`;

export const FormTextArea = styled.textarea`
    border-radius:10px;
    border:2px solid #08244B;
    padding:8px 16px;
    min-height: 64px;
    font-size:18px;
    font-family:'Maven Pro', sans-serif;
`;

export const FormAdditionalGroup = styled.div`
    display:flex;
    flex-direction:row;
`;

export const FormFooter = styled.div`
    display:flex;
    gap:16px;
    justify-content:space-between;
`;

export const FormSeparator = styled.hr`
    width:100%;
    height:2px;
    background-color: #08244B;
`;