import styled from "styled-components";

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
  }
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: #ee7a0d;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
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
  &::placeholder {
    color: rgba(200, 200, 200, 1);
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
  background: rgb(236, 121, 14);
    background: linear-gradient(90deg,
         #e49217 0%, 
         #e6b927 49%, 
         #eeca2a 100%);
  );
  &:hover {
    filter: brightness(1.03);
  }
`;