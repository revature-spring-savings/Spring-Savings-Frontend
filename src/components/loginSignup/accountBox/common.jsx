import styled from "styled-components";

/*
  These are JSX elements created to render different html elements
inside this jsx file. They are styled-components rendered components.
They are being imported into loginForm.jsx and signupForm.jsx.
You can utilized regular CSS or even SASS syntax within the backticks.
*/

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MutedLink = styled.a`
  font-size: 13px;
  color: rgb(119, 119, 119);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 13px;
  color: #a76c00;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  /* border: orange 1px solid; */
  padding: 4px 8px;
  /* border-radius: 10px;
  background: #F26925;
    background: linear-gradient(90deg,
        #F26925 0%, 
         #e6b927 49%, 
         #FCB414 100%);
  transition: all .5s ease-in-out; */
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  padding: 1px 9px;
  border-bottom: 1px solid rgba(238, 238, 238, 0.104);
  transition: all 200ms ease-in-out;
  font-size: 12px;
  background-color: beige;

  &::placeholder {
    color: #8f8f8f;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(230, 155, 69);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #F26925;
    background: linear-gradient(90deg,
        #F26925 0%, 
         #e6b927 49%, 
         #FCB414 100%);
  );
  &:hover {
    filter: brightness(1.03);
  }
`;