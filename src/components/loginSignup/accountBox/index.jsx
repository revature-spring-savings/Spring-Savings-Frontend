import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 375px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background-color: beige;
  box-shadow: 0 0 2px  rgba(136, 136, 136, 0.679);
  position: relative;
  overflow: hidden;
  border-radius: 19px;

  @media only screen and (max-width: 768px) {  
    width: 100vw;
    min-height: 568px;
    border-radius: 0px;
    height: 100vh;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* padding: 0 1.8em; */
  padding-bottom: 7em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -300px;
  left: -80px;
  /* background: rgba(243, 162, 55, 0.637);
  background: linear-gradient(
      90deg, rgba(243, 173, 81, 0.637) 0%, 
      rgb(232, 163, 61) 49%, 
      rgb(230, 131, 19) 100%); */
  background: #F26925;
  background: linear-gradient(
      90deg, #F26925 0%, 
      rgb(211, 134, 19) 49%, 
      rgb(209, 126, 31) 100%);
  );
`;

const HeaderContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 1em auto 0;
  //iphone 6
  @media only screen and (min-width: 375px) {
    margin: 1em auto 1.5em;
  }
  //ipad
  @media only screen and (min-width: 768px) {
    margin: 1em auto 1.5em;
  }
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  // This state is used for managing animation of the drop
  const [isExpanded, setExpanded] = useState(false);
  /* 
    This state is used for managing the conditional rendering of
  login and sign up page.
  */
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome To Spring Savings</HeaderText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create Account</HeaderText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}