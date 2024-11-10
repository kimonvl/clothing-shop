import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: grid;                 
    grid-template-columns: auto auto;
    gap: 10%;
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    transform: translateY(50px); /* Adjust this value as needed */
    h2{
        margin: 10px 0;
    }
`;
