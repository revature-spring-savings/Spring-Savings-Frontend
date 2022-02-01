import React from 'react';
import styled from 'styled-components';
import { AccountBox } from '../../components/loginSignup/accountBox';
//this is from index.js

const LoginSignContainer = styled.div`
    width: 100%;
    height: 100%;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    /* @media only screen and (min-width: 375px) {
        height: fit-content;    
    } */
`;

function LoginSignUp() {
    return (
        <LoginSignContainer >
            <AccountBox/>
        </LoginSignContainer>
    )
}

export default LoginSignUp
