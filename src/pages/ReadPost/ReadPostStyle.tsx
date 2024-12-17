import styled from "styled-components";
import PostBannerImage from "../../assets/generic-post-image.png";

export const ReadPostContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:0;
    margin:0;
    background-color:#F6F6F6;
`;

export const ReadPostContent = styled.div`
    padding:0px 0px 64px 0px;
    align-self:center;
`;


export const PostBanner = styled.div`
    background-image: url(${PostBannerImage});
    background-size: cover;
    background-position:center;
    width:100%;
    display:flex;
    justify-content: center;
`;

export const PostBannerContent =styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    padding:48px;
`;

export const DescriptionContainer = styled.div`
`;

export const ContentContainer = styled.div`
`;

export const ObservationsContainer = styled.div`
`;

export const PostTitle = styled.h1`
    margin:unset;
    color:#FCC918;
    font-size:64px;
    font-weight:600;
`;

export const PostInfo = styled.span`
    margin:unset;
    color:#F6F6F6;
    font-size:16px;
    font-weight:600;
`;