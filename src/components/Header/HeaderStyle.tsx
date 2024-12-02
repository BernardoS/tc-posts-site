import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:flex;
    background-color:#1E4071;
    align-items:center;
    justify-content:center;
    width:100%;
    height:96px;
    border-bottom:2px solid #FCC918;
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LoginButon = styled.button`
    width: 240px;
    height:50px;
    border-radius:10px;
    border:1px solid #FCC918;
    background-color: transparent;
    transition:0.3s;
    color:#FCC918;
    display:flex;
    gap:8px;
    padding:12px 8px;
    align-items:center;
    justify-content:center;
    font-weight: 700;
    font-size:20px;
    font-family: "Maven Pro", sans-serif;
    cursor:pointer;
    &:hover{
        background-color:#08244B;
    }
`;

export const HomeLink = styled.a`
    height:32px;
`;