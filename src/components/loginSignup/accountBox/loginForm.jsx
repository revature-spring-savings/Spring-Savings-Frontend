import React, { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer/Marginer";
import { AccountContext } from "./accountContext";
import IdleTime from "../../IdleTime";
import {BankContext} from '../../../Context/bank-context'


//import { RestoreTwoTone } from "@material-ui/icons";

/* Dear Jeremy,
    the login sends and receives data from the backend.
    it appears to save to sessionStorage, however, I cannot access
    the sessionStorage from another page. (such as AccountByUserID)
    once that is working, we will have functionality!
    Help me, Jeremy Kenobi, you're my only hope.
    Sincerely,
    Colleen

    PS. nvm, i got it. it was redirecting before saving sessionStorage
    # i don't need no man

    PPS. jk. now i need help again
    for some reason, it will not setUserID() properly, and it
    shows up as 0 in sessionStorage, but if i hardcode 2 in,
    it DOES show up in sessionStorage on the other page
*/

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
  const loginCTX = useContext(BankContext)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    phoneNumber: '',
    dob: ''
  });
  const [name, setName] = useState("");

  let navigate = useNavigate();

  const handleUsername = (event) => {
    setValues({ ...values, username: event.target.value });
    setName(event.target.value);
  }

  const handlePassword = (event) => { setValues({ ...values, password: event.target.value }) };

  function loginFormData() {
    axios.post('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/users/login', {
      //  axios.post('http://localhost:8081/users/login', {
      ...setValues,
      username: values.username,
      pass: values.password
    }).then(res => {
      //this prints correct userID
      console.log(res.data)
      console.log("userID from response body is " + res.data.userID);

      // Setting the session storage
      
      if(res.data) {
        sessionStorage.setItem("userID", res.data.userID);
        sessionStorage.setItem("Name", name);
        loginCTX.onSetUserData(res.data)

        loginCTX.onSetIsLoggedIn(true);
        redirectToHome(res.status);

      }


    }).catch(err => console.log(err));

    function redirectToHome(status) {
      if (status === 200) navigate("/home");
      else navigate("/");
    }
  }

  return (
    <div className="image">
      <IdleTime />
      <BoxContainer>
        <FormContainer>
          <Input type="username" placeholder="Enter your Username" onChange={handleUsername} value={values.username} />
          <Input type="password" placeholder="Enter your Password" onChange={handlePassword} value={values.password} />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={loginFormData}>Login</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        {/* <MutedLink href="#">Forget your password?</MutedLink> */}
        <MutedLink href="#">
          Don't have an account?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            SIGN UP
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </div>

  );
}