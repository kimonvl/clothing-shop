import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    white-space: nowrap;
    letter-spacing:0.1px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer; 
    display: flex;
    justify-content: center;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing:0.1px;
    font-size: 13px;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
    letter-spacing:0.1px;
    font-size: 13px;
    &:hover {
        background-color: black; color: white;
        border: none;
    }
`;
