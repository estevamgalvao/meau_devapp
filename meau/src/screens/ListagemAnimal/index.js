import React from 'react';
import {FlatList, StatusBar, Text, View} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {Functions, SafeArea} from '../../components';
import {Container} from '../CadastroAnimal/styles';

import {AnimalPhoto} from './styles';

const ListagemAnimal = ({navigation, route}) => {
  const state = {
    animals: [],
  };

  const reference = storage().ref('marley1.jpg');

  const ShowAnimalList = async () => {
    await firestore()
      .collection('animal')
      .where('owner', '==', route.params.userLogged)
      .get()
      .then((querySnapshot) => {
        console.log(
          'Número de animais de',
          route.params.userLogged,
          ': ',
          querySnapshot.size,
        );

        querySnapshot.forEach((documentSnapshot) => {
          state.animals.push(documentSnapshot.data().name_animal);
          console.log('Pet: ', documentSnapshot.data().name_animal);
        });
      });
  };

  ShowAnimalList();
  // console.log(state.animals);

  return (
    <>
      <SafeArea color="#ffd358" />
      <StatusBar barStyle="light-content" backgroundColor="#f7a800" />

      <Container>
        <FlatList
          data={state.animals}
          renderItem={({item}) => (
            <View
              style={{
                height: 50,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>User Name: {item}</Text>
            </View>
          )}
        />
      </Container>
    </>
  );
};

export default ListagemAnimal;
