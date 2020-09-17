import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

import {
  ButtonText,
  ButtonTextSocialNetworks,
  ButtonSingIn,
  ButtonSingInFacebook,
  ButtonSingInGoogle,
  Container,
  ContainerLogin,
  InputUser,
  InputPassword,
  SafeArea,
} from './styles';

const Login = () => {
  return (
    <>
      <SafeArea />
      <Container>
        <ContainerLogin>
          <InputUser autoCapitalize="none" placeholder="Nome de usuário" />
          <InputPassword secureTextEntry placeholder="Senha" />
        </ContainerLogin>
        <ButtonSingIn>
          <ButtonText>ENTRAR</ButtonText>
        </ButtonSingIn>
        <ButtonSingInFacebook>
          <ButtonTextSocialNetworks>
            ENTRA COM FACEBOOK
          </ButtonTextSocialNetworks>
        </ButtonSingInFacebook>
        <ButtonSingInGoogle>
          <ButtonTextSocialNetworks>ENTRA COM GOOGLE</ButtonTextSocialNetworks>
        </ButtonSingInGoogle>
      </Container>
    </>
  );
};

export default Login;
