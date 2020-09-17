import React from 'react';
import {View, TextInput} from 'react-native';
import {Buttons, NavigationDrawer} from '../../components';

import {
  BoxAction,
  BoxForm,
  BoxInput,
  BoxNav,
  Container,
  SafeArea,
  TextTitle,
  TextButton,
} from './styles';

const Login = () => {
  return (
    <>
      <BoxNav />
      <BoxAction>
        <NavigationDrawer color="#434343" backgroundColor="#cfe9e5" />
        <TextTitle>Login</TextTitle>
      </BoxAction>
      <SafeArea />

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
          <Buttons.Rectangular color="#88c9bf" mtop="52px" mbottom="72px">
            <TextButton color="#434343">ENTRAR</TextButton>
          </Buttons.Rectangular>
          <Buttons.Rectangular color="#194f7c" mtop="0px" mbottom="0px">
            <TextButton>ENTRAR COM FACEBOOK</TextButton>
          </Buttons.Rectangular>
          <Buttons.Rectangular color="#f15f5c" mtop="8px" mbottom="0px">
            <TextButton>ENTRAR COM GOOGLE</TextButton>
          </Buttons.Rectangular>
        </View>
      </Container>
    </>
  );
};

export default Login;
