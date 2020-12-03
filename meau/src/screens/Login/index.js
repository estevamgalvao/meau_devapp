import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Buttons, NavigationDrawer, SafeArea, Functions} from '../../components';

import {
  BoxAction,
  BoxForm,
  BoxInput,
  BoxNav,
  Container,
  TextTitle,
  TextButton,
} from './styles';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function navigateToMenuPerfil() {
    navigation.navigate('MenuPerfil', {userLogged: username});
  }

  const WelcomeUser = () => {
    return (
      <>
        <View>
          <TextTitle>Seja bem vindo, {username}! Você está logado.</TextTitle>
        </View>
      </>
    );
  };

  const ToLogin = async () => {
    await firestore()
      .collection('person')
      .doc(username)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          if (documentSnapshot.data().password_user === password) {
            console.log('Welcome,', username, '! Youre in.');
            navigateToMenuPerfil();
          } else {
            console.log('User or password incorrect.');
          }
        } else {
          console.log('User or password incorrect.');
        }
      });
  };

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
              onChangeText={(text) => setUsername(text)}
            />
          </BoxInput>
          <BoxInput>
            <TextInput
              placeholder="Senha"
              secureTextEntry
              fontFamily="Roboto-Regular"
              onChangeText={(text) => setPassword(text)}
            />
          </BoxInput>
        </BoxForm>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Buttons.Rectangular
            color="#88c9bf"
            marginTop="52px"
            marginBottom="72px"
            onPress={() => ToLogin()}>
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
