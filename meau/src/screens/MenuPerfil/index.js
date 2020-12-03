import React, {useState} from 'react';
import {StatusBar, View, ScrollView} from 'react-native';
import {Container, TextButton, TextInitial} from './styles';
import {Buttons, SafeArea, NavigationDrawer} from '../../components';

const MenuPerfil = ({navigation, route}) => {
  function navigateToCadastroAnimal(username) {
    navigation.navigate('CadastroAnimal', {userLogged: username});
  }
  function navigateToListagemAnimal(username) {
    navigation.navigate('ListagemAnimal', {userLogged: username});
  }

  return (
    <>
      <ScrollView>
        <Container>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 16,
            }}>
            <TextInitial>Menu Perfil - {route.params.userLogged}</TextInitial>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Buttons.Rectangular
              color="#FFD358"
              marginTop="0px"
              marginBottom="24px"
              onPress={() => navigateToCadastroAnimal(route.params.userLogged)}>
              <TextButton color="#434343">Cadastrar Animal</TextButton>
            </Buttons.Rectangular>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Buttons.Rectangular
              color="#FFD358"
              marginTop="0px"
              marginBottom="24px"
              onPress={() => navigateToListagemAnimal(route.params.userLogged)}>
              <TextButton color="#434343">Lista de Animais</TextButton>
            </Buttons.Rectangular>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default MenuPerfil;
