import React, { useContext, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);

  let navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    pass: '',
    phoneNumber: '',
    dob: ''
  });

  const handleFirstName = (event) => setValues({ ...values, firstName: event.target.value });
  const handleLastName = (event) => setValues({ ...values, lastName: event.target.value });
  const handleEmail = (event) => setValues({ ...values, email: event.target.value });
  const handleUsername = (event) => setValues({ ...values, username: event.target.value });
  const handlePassword = (event) => setValues({ ...values, pass: event.target.value });
  const handlePhoneNumber = (event) => setValues({ ...values, phoneNumber: event.target.value });
  const handleDob = (event) => setValues({ ...values, dob: event.target.value });

  const registerFormData = () => {
        let emailVer = values.email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/gi);
        let phoneVer = values.phoneNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        let passVer = values.pass.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let isValid = true;
        let alertMessage = "";

        if(values.firstName.length < 3 || values.lastName.length < 3){ //names must be more than two characters
            isValid = false;
           // document.getElementById("infoBar").append("Names must be 2 characters or more\n");
           alertMessage = alertMessage+"Names must be 2 characters or more\n";
           //set border to red
        }else{
          //set border to transparent
        }

        if(emailVer == null || values.email.length < 9){ //email must match email format and be longer than 8 chars
            isValid = false;
            //document.getElementById("infoBar").append("Email is not a valid pattern or too short\n");
            alertMessage = alertMessage+"Email is not a valid pattern or too short\n";
            //set border to red
        }else{
          //set border to transparent
        }

        if(phoneVer == null || values.phoneNumber.length < 11){ // phone number must be 10 digits
          isValid = false;
          //document.getElementById("infoBar").append("Phone number is not a valid pattern\n");
          alertMessage = alertMessage+"Phone number is not a valid pattern\n";
          //set border to red
      }else{
        //set border to transparent
      }

        if(passVer == null || values.pass.length < 6){ //passwords must match and be longer than 5
            isValid = false;
           // document.getElementById("infoBar").append("Password must include these types: abcDEF123!?# \n");
            alertMessage = alertMessage+"Password must include these types: a B 1 !?# \n";
            //set border to red
        }else{
          //set border to transparent
        }

    
if(isValid){
    axios.post('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/users/register', {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      username: values.username,
      pass: values.pass,
      phoneNumber: values.phoneNumber,
      dob: values.dob 
    }).then(response => {
        redirectTologin(response.status)
    }).catch(err => console.log(err))

    const redirectTologin = (status) => {
      if (status === 200) {
        window.location.reload(true);
        navigate("/")
      } else {
        window.location.reload(true);
        navigate("/");
      }
    }
  }else{
    alert(alertMessage);
      console.log("form was not submitted");
    }
  }


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" onChange={handleFirstName} name="firstname" placeholder="First Name..." value={values.firstName} />
        <Input type="text" onChange={handleLastName} name="lastname" placeholder="Last Name..." value={values.lastName} />
        <Input type="email" name="email" onChange={handleEmail} placeholder="Email..." value={values.email} />
        <Input type="username" name="username" onChange={handleUsername} placeholder="Username..." value={values.username} />
        <Input type="password" name="password" onChange={handlePassword} placeholder="Password..." value={values.pass} />
        <Input type="phoneNumber" name="PhoneNumber" onChange={handlePhoneNumber} placeholder="Phone Number..." value={values.phoneNumber} />
        <Input type="dob" name="dob" onChange={handleDob} placeholder="DOB..." value={values.dob} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={registerFormData}>Sign up</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          SIGN IN
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}