import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, TextInput, ScrollView, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {doc} from 'prettier';
import {Buttons, NavigationDrawer, SafeArea} from '../../components';

import {
  BoxAction,
  BoxForm,
  BoxHeader,
  BoxImage,
  BoxInput,
  BoxNav,
  BoxText,
  Container,
  TextButton,
  TextDesc,
  TextHeader,
  TextImage,
  TextTitle,
} from './styles';

const CadastroPessoal = () => {
  // Declarando variáveis para acomodarem as entradas de texto
  const [namePerson, setNamePerson] = useState('');
  const [birthPerson, setbirthPerson] = useState(-1);
  const [emailPerson, setEmailPerson] = useState('');
  const [statePerson, setStatePerson] = useState('');
  const [cityPerson, setCityPerson] = useState('');
  const [cepPerson, setCepPerson] = useState('');
  const [phonePerson, setPhonePerson] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const AddPersonData = async () => {
    if (password === passwordConfirmation) {
      await firestore()
        .collection('person')
        .doc(username)
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            console.log('User already exists');
          } else {
            firestore()
              .collection('person')
              .doc(username)
              .set({
                birth: birthPerson,
                email: emailPerson,
                name_person: namePerson,
                state: statePerson,
                city: cityPerson,
                CEP: cepPerson,
                phone: phonePerson,
                password_user: password,
              })
              .then(() => {
                console.log('User added!');
              });
          }
        });
    } else {
      console.log('Passwords are not the same');
    }
  };

  return (
    <>
      <SafeArea color="#cfe9e5" />
      <BoxNav />
      <BoxAction>
        <NavigationDrawer color="#434343" backgroundColor="#cfe9e5" />
        <TextTitle>Cadastro Pessoal</TextTitle>
      </BoxAction>
      <ScrollView>
        <Container>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <BoxText>
              <TextDesc>
                As informações preenchidas serão divulgadas apenas para a pessoa
                com a qual você irá realizar o processo de adoção e/ou
                apadrinhamento, após a formalização do processo.
              </TextDesc>
            </BoxText>
          </View>

          <BoxForm>
            <BoxHeader>
              <TextHeader>INFORMAÇÕES PESSOAIS</TextHeader>
            </BoxHeader>
            <BoxInput>
              <TextInput
                placeholder="Nome completo"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setNamePerson(text)}
              />
            </BoxInput>
            <BoxInput>
              <TextInput
                placeholder="Data de nascimento"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setbirthPerson(text)}
              />
            </BoxInput>
            <BoxInput>
              <TextInput
                placeholder="E-mail"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setEmailPerson(text)}
              />
            </BoxInput>
            <BoxInput>
              <TextInput
                placeholder="Estado"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setStatePerson(text)}
              />
            </BoxInput>
            <BoxInput>
              <TextInput
                placeholder="Cidade"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setCityPerson(text)}
              />
            </BoxInput>
            <BoxInput>
              <TextInput
                placeholder="CEP"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setCepPerson(text)}
              />
            </BoxInput>
            <BoxInput>
              <TextInput
                placeholder="Telefone"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setPhonePerson(text)}
              />
            </BoxInput>

            <BoxHeader>
              <TextHeader>INFORMAÇÕES DE PERFIL</TextHeader>
            </BoxHeader>
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
            <BoxInput>
              <TextInput
                placeholder="Confirmação de senha"
                secureTextEntry
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setPasswordConfirmation(text)}
              />
            </BoxInput>
            <BoxHeader>
              <TextHeader>FOTO DE PERFIL</TextHeader>
            </BoxHeader>
          </BoxForm>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <BoxImage>
              <Icon name="control-point" size={30} color="#757575" />
              <TextImage>adicionar foto</TextImage>
            </BoxImage>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Buttons.Rectangular
              color="#88c9bf"
              marginTop="32px"
              marginBottom="24px"
              onPress={() => AddPersonData()}>
              <TextButton>FAZER CADASTRO</TextButton>
            </Buttons.Rectangular>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default CadastroPessoal;
