import styled from "styled-components";

export const SearchPostsContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:0;
    background-color:#F6F6F6;
`;

export const SearchPostsContent = styled.div`
    padding:64px 0px;
    align-self:center;
`;

export const SearchAlertContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:rgba(252,201,24,1);
    border-radius:10px;
    color:#08244B;
    padding:32px;
`;

export const SearchAlertTilteContainer = styled.div`
    display:flex;
    flex-direction:row;
    font-weight:800;
    font-size:25px;
    align-items:center;
    gap:16px;
`;

export const SearchAlertTilte = styled.h4`
    display:flex;
    flex-direction:row;
    font-weight:800;
    font-size:32px;
    margin:unset;
`;