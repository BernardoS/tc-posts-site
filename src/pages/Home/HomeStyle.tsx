import styled from "styled-components";
import BannerHome from '../../assets/banner-home.png';

export const HomePageContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const HeaderContainer = styled.div`
    display:flex;
    background-color:#1E4071;
    align-items:center;
    justify-content:center;
    width:100%;
    height:96px;
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
    &:hover{
        background-color:#08244B;
    }
`;

export const HomeLink = styled.a`
    height:32px;
`;


export const BannerContainer = styled.div`
    background-color:#808A96;
    height:500px;
    display:flex;
    justify-content:center;
    background-image: url(${BannerHome});
    background-size: cover;
    background-position:center;
    h1{
        font-size:54px;
        color:#FFFFFF;
        b{
            font-size:94px;
            color:#FCC918;
            margin-right:8px;
        }
    }
`;

export const BannerContent = styled.div`
    width: 100%;
`;

export const SearchInputContainer  = styled.div`
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
    position:relative;
    right:70px;
    transition:0.3s;
    &:hover{
        color:#1E4071;
        opacity:0.8;
    }
`;
