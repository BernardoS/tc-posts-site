import styled from "styled-components";

export const ManagePostsContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const ManagePostsContent = styled.div`
    padding:0px 0px 64px 0px;
    align-self:center;
    width:100%;
`;

export const ManagePostsTitle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    h1{
        font-size:32px;
        color:#1E4071;
        font-weight:700;
    }
    h1.main-title{
        font-size:48px;
    }
`;

export const SearchAdminInputContainer  = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    position: relative;
`;

export const SearchInputText = styled.input`
    width:100%;
    border:2px solid #08244B;
    border-radius:25px;
    height:64px;
    padding-left:32px;
    font-family:"Maven Pro", sans-serif;
    font-size:18px;
    font-weight:700;
    color:#1E4071;
`;

export const SearchButton = styled.button`
    background-color:transparent;
    border:none;
    font-size:25px;
    width:25px;
    color: #08244B;
    cursor:pointer;
    position: absolute;
    right:35px;
    transition:0.3s;
    &:hover{
        color:#1E4071;
        opacity:0.8;
    }
`;