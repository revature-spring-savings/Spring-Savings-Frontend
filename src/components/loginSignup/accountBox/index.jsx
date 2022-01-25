import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 320px;
  min-height: 568px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 2px rgba(162, 162, 162, 0.28);
  position: relative;
  overflow: hidden;
  //Media Queries
  //iphone 6
  @media only screen and (min-width: 375px) {
    width: 375px;
    min-height: 667px;
  }
  //iphone 6 plus
  @media only screen and (min-width: 375px) {
    width: 375px;
    min-height: 600px;
  }
  //iphone x
  @media only screen and (min-width: 375px) {
    width: 375px;
  }
  //ipad and above to Desktop
  @media only screen and (min-width: 768px) {
    width: 375px;
    min-height: 600px;
    border-radius: 19px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
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
  background: rgb(243, 117, 53);
  background: linear-gradient(
      90deg, rgba(255, 145, 0, 0.548) 0%, 
      rgb(211, 134, 19) 49%, 
      rgb(209, 126, 31) 100%);
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 25px;
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
  /* padding: 0 1.8em; */
  margin: 1em auto 0;
  //iphone 6
  @media only screen and (min-width: 375px) {
    margin: 3em auto 0;
  }
  //ipad
  @media only screen and (min-width: 768px) {
    margin: 2em auto 0;
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
  const [isExpanded, setExpanded] = useState(false);
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
              <HeaderText>Welcome To</HeaderText>
              <HeaderText>Spring</HeaderText>
              <HeaderText>Savings</HeaderText>
              
              
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
         
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