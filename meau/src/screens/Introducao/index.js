import React from 'react';
import {StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationDrawer, SafeArea} from '../../components';

import {
  Button,
  ButtonLogin,
  ButtonLoginText,
  ButtonText,
  Container,
  ContainerMessages,
  Image,
  Message,
  Title,
} from './styles';

const Introducao = ({navigation}) => {
  function navigateToLogin() {
    navigation.navigate('Login');
  }

  function navigateToCadastroAnimal() {
    navigation.navigate('CadastroAnimal');
  }

  return (
    <>
      <SafeArea color="#fafafa" />
      <NavigationDrawer backgroundColor="#fafafa" color="#88c9bf" />
      <StatusBar barStyle="dark-content" />
      <ScrollView>
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
          <Button onPress={navigateToCadastroAnimal}>
            <ButtonText>CADASTRAR ANIMAL</ButtonText>
          </Button>
          <ButtonLogin onPress={navigateToLogin}>
            <ButtonLoginText>login</ButtonLoginText>
          </ButtonLogin>
          <Image
            source={require('../../assets/images/Introducao/Meau_marca.png')}
          />
        </Container>
      </ScrollView>
    </>
  );
};

export default Introducao;
