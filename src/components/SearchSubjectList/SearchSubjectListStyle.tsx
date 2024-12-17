import styled from "styled-components";


export const SubjectList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self:center;
    column-gap:21px;
    row-gap:15px;
    margin-top:32px;
    margin-bottom:32px;
`;

export const SubjectButton = styled.a`
    background-color: #FCC918;
    color: #1E4071;
    border: 0px solid #1E4071;
    border-radius: 25px; 
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s ease;
    width: 201px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;
    &:hover{
        background-color:#08244B;
        color:#FCC918;
        border: 0px solid #FCC918;

    }

`;