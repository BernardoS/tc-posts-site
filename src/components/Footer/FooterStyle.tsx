import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color:#1E4071;
    border-top:2px solid #FCC918;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const FooterContent = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-self:center;
    padding:24px;
`;
export const FooterLogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:33%;
`;

export const FooterInfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

export const FooterInfoTitle = styled.h4`
    font-size:14px;
    font-weight:600;
    color:#FCC918;
    margin-bottom:8px;
`;

export const FooterInfoList = styled.ul`
    list-style:none;
    padding:unset;
    margin:unset;
`;

export const FooterInfoItem = styled.li`
    font-size:12px;
    font-weight:600;
    color:#FFFFFF;
`;

export const FooterInfoRight = styled.div`
    text-align:right;
    width:33%;
`;

export const FooterInfoLeft = styled.div`
    text-align:left;
    width:33%;
`;