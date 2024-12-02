import styled from "styled-components";

export const PostCard = styled.div`
    width: 200px;
    height:200px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #08244B;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

export const PostCardImage = styled.img`
    width: 100%;
    height: 120px;
    object-fit: cover;
`;

export const PostCardContent = styled.div`
    background-color: #08244B;
    padding:8px 16px;
    height:80px;
`;

export const PostCardTitle = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: #FCC918;
    margin: 0 0 8px;
`;

export const PostCardSubjects = styled.p`
    font-size: 12px;
    color: #FFE690;
    font-weight:500;
`;

