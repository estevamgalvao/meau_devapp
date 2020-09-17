import React from 'react';
import {StatusBar} from 'react-native';

import {
  Button,
  ButtonLogin,
  ButtonLoginText,
  ButtonText,
  Container,
  ContainerMessages,
  Image,
  Message,
  SafeArea,
  Title,
} from './styles';

import {NavigationDrawer} from '../../components';

const Introducao = ({navigation}) => {
  function navigateToLogin() {
    navigation.navigate('Login');
  }

  return (
    <>
      <SafeArea />
      <NavigationDrawer backgroundColor="#fafafa" color="#88c9bf" />
      <StatusBar barStyle="dark-content" />
      <Container>
        <Title>Olá!</Title>
        <ContainerMessages>
          <Message>Bem vindo ao Meau!</Message>
          <Message>Aqui você pode adotar, doar e ajudar</Message>
          <Message>cães e gatos com facilidade.</Message>
          <Message>Qual o seu interesse?</Message>
        </ContainerMessages>
        <Button>
          <ButtonText>ADOTAR</ButtonText>
        </Button>
        <Button>
          <ButtonText>AJUDAR</ButtonText>
        </Button>
        <Button>
          <ButtonText>CADASTRAR ANIMAL</ButtonText>
        </Button>
        <ButtonLogin onPress={navigateToLogin}>
          <ButtonLoginText>login</ButtonLoginText>
        </ButtonLogin>
        <Image
          source={require('../../assets/images/Introducao/Meau_marca.png')}
        />
      </Container>
    </>
  );
};

export default Introducao;
