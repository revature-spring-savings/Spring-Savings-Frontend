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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
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
  const [userID, setUserID] = useState(0);

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
      console.log("userID from response body is " + res.data.userID);
      //userID is not setting correctly
      setUserID(parseInt(res.data.userID));
      console.log("userID from session storage is " + userID); //this prints out as 0
      sessionStorageSetItem();
      redirectToHome(res.status);
    }).catch(err => console.log(err));

    function redirectToHome(status) {
      if (status === 200) navigate("/home");
      else navigate("/");
    }
    const sessionStorageSetItem = () => {
      //this saves as 0 b/c userID is not setting properly
      //sessionStorage.setItem("userID", userID);

      // the dummy way
      sessionStorage.setItem("userID", 2);
      sessionStorage.setItem("Name", name);
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