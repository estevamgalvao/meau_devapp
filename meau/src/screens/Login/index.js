import React from 'react';
import {View, TextInput} from 'react-native';
import {Buttons, NavigationDrawer, SafeArea} from '../../components';

import {
  BoxAction,
  BoxForm,
  BoxInput,
  BoxNav,
  Container,
  TextTitle,
  TextButton,
} from './styles';

const Login = () => {
  return (
    <>
      <SafeArea color="#cfe9e5" />
      <BoxNav />
      <BoxAction>
        <NavigationDrawer color="#434343" backgroundColor="#cfe9e5" />
        <TextTitle>Login</TextTitle>
      </BoxAction>

      <Container>
        <BoxForm>
          <BoxInput>
            <TextInput
              placeholder="Nome de usuário"
              fontFamily="Roboto-Regular"
            />
          </BoxInput>
          <BoxInput>
            <TextInput
              placeholder="Senha"
              secureTextEntry
              fontFamily="Roboto-Regular"
            />
          </BoxInput>
        </BoxForm>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Buttons.Rectangular
            color="#88c9bf"
            marginTop="52px"
            marginBottom="72px">
            <TextButton color="#434343">ENTRAR</TextButton>
          </Buttons.Rectangular>
          <Buttons.Rectangular
            color="#194f7c"
            marginTop="0px"
            marginBottom="0px">
            <TextButton>ENTRAR COM FACEBOOK</TextButton>
          </Buttons.Rectangular>
          <Buttons.Rectangular
            color="#f15f5c"
            marginTop="8px"
            marginBottom="0px">
            <TextButton>ENTRAR COM GOOGLE</TextButton>
          </Buttons.Rectangular>
        </View>
      </Container>
    </>
  );
};

export default Login;
