import React, {useState} from "react";
import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Logo from '../../assets/logo.png';
import { Firebase_Auth} from '../../FirebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {Container, NoAccountContainer, LogoImage, Title, BoldText, SubHeader, ButtonContainer, Button, ContinueBtn, ButtonText, InputBarContainer, InputField, SignUpText, NoAccountText} from './SignIn_Styles';

const SignIn = ({profile, setProfile}) => {
  const [logIn, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false)
  const [profilePage, setProfilePage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = Firebase_Auth;

  const sendProfileData = async () => {
    try {
      const endpoint = '/ENDPOINT';

      const config = {
        headers: {
          authorization: `${profile.idToken}`,
        },
      };

      const response = await axios.post(endpoint, profile, config);

      console.log('Response:', response.data);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const signInFunc = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      setProfile({
        ...profile,
        'firebase_uid': response.user.uid,
        'email': email,
        'idToken': response._tokenResponse.idToken
      });

      setSignUp(false);
      setLogin(false);
      setProfilePage(false);
      alert('Sign In Success')

    const config = {
      headers: {
        authorization: `${response._tokenResponse.idToken}`,
      },
    };

    const backendResponse = await axios.get('/ENDPOINT', config);

    setProfile({
      ...profile,
      ...backendResponse.data,
    });

    console.log('Profile Data from Backend:', backendResponse.data);

    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message)
    }
  }

  const signUpFunc = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      setProfile({
        ...profile,
        'firebase_uid': response.user.uid,
        'email': email,
        'idToken': response._tokenResponse.idToken
      });

      setSignUp(false);
      setLogin(false);
      setProfilePage(true);
      alert('Sign Up Success')

    } catch (error) {
      console.log(error);
      alert('Sign up failed: ' + error.message)

    }
  }

  const handleClick = (input) => {
    if (input === 'logIn') {
      setLogin(true);
      setSignUp(false);

    } else {
      setLogin(false);
      setSignUp(true);
    }

  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handlePhoneNumber = (text) => {
    const cleanedText = text.replace(/\D/g, '');

    const match = cleanedText.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
    const formattedNumber = match ? `(${match[1]})${match[2] ? ` ${match[2]}` : ''}${match[3] ? `-${match[3]}` : ''}` : '';

    return formattedNumber;
  };

  if (logIn === false && signUp === false && profilePage === false) {
     return (
      <Container>

          <LogoImage source={Logo} />
          <Title>Welcome to <BoldText>SUPERBOX</BoldText></Title>
          <SubHeader>Login to continue</SubHeader>

          <ButtonContainer>

            <Button onPress={() => {handleClick('logIn')}}>
              <ButtonText>Log In</ButtonText>
            </Button>
            <Button onPress={() => {handleClick('signUp')}}>
            <ButtonText>Sign Up</ButtonText>
          </Button>

          </ButtonContainer>

      </Container>

  )} else if (logIn === true) {
    return (
      <Container>

        <LogoImage source={Logo} />
        <Title>Welcome back</Title>

        <InputBarContainer>
            <InputField onChangeText={(text) => setEmail(text)} value={email} placeholder="Email address" autocapitalize="none"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setPassword(text)} value={password} placeholder="Password" secureTextEntry={true}/>
        </InputBarContainer>

        <ButtonContainer>
            <ContinueBtn onPress={signInFunc} ><ButtonText>Continue</ButtonText></ContinueBtn>
        </ButtonContainer>

        <NoAccountContainer>
          <NoAccountText>Don't have an account? </NoAccountText>
          <TouchableOpacity onPress={() => {handleClick('signUp')}}>
            <SignUpText> Sign Up</SignUpText>
          </TouchableOpacity>
        </NoAccountContainer>

      </Container>
    )
  } else if (signUp === true) {
    return (
      <Container>

        <LogoImage source={Logo} />
        <Title>Create your account</Title>

        <InputBarContainer>
            <InputField onChangeText={(text) => setEmail(text)} value={email} placeholder="Email address" autocapitalize="none"/>
        </InputBarContainer>
        <InputBarContainer>
            <InputField onChangeText={(text) => setPassword(text)} value={password} placeholder="Password" secureTextEntry={true}/>
        </InputBarContainer>

        <ButtonContainer>
            <ContinueBtn onPress={signUpFunc} ><ButtonText>Continue</ButtonText></ContinueBtn>
        </ButtonContainer>

        <NoAccountContainer>
          <NoAccountText>Already have an account? </NoAccountText>
          <TouchableOpacity onPress={() => {handleClick('logIn')}}>
            <SignUpText> Log in</SignUpText>
          </TouchableOpacity>
        </NoAccountContainer>

    </Container>
    )
  } else if (profilePage === true) {
    return (
    <Container>
      <LogoImage source={Logo} />
      <Title>Profile</Title>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, full_name: text })} placeholder="Name" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, username: text })} placeholder="Username" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, address_line_1: text })} placeholder="Address 1" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, address_line_2: text })} placeholder="Address 2 (apt #)" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, city: text })} placeholder="City" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, state_abbr: text })} placeholder="State Abbreviation" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, zip: text })} placeholder="Zip" autocapitalize="none" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField onChangeText={(text) => setProfile({ ...profile, interests: text })} placeholder="Interests" />
      </InputBarContainer>

      <InputBarContainer>
        <InputField
          onChangeText={(text) => {
            const formattedNumber = handlePhoneNumber(text);
            setProfile({ ...profile, Number: formattedNumber });
          }}
          placeholder="Number"
          keyboardType="phone-pad"
        />
      </InputBarContainer>

      <ContinueBtn onPress={sendProfileData}><ButtonText>Continue</ButtonText></ContinueBtn>
    </Container>
    )

  }

}
export default SignIn;