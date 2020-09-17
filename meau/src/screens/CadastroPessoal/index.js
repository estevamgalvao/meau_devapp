import React from 'react';
import {View, TextInput, ScrollView} from 'react-native';

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

import {Buttons, NavigationDrawer} from '../../components';

const CadastroPessoal = () => {
  return (
    <>
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
              />
            </BoxInput>
            <BoxInput>
              <TextInput placeholder="Idade" fontFamily="Roboto-Regular" />
            </BoxInput>
            <BoxInput>
              <TextInput placeholder="E-mail" fontFamily="Roboto-Regular" />
            </BoxInput>
            <BoxInput>
              <TextInput placeholder="Estado" fontFamily="Roboto-Regular" />
            </BoxInput>
            <BoxInput>
              <TextInput placeholder="Cidade" fontFamily="Roboto-Regular" />
            </BoxInput>
            <BoxInput>
              <TextInput placeholder="Endereço" fontFamily="Roboto-Regular" />
            </BoxInput>
            <BoxInput>
              <TextInput placeholder="Telefone" fontFamily="Roboto-Regular" />
            </BoxInput>

            <BoxHeader>
              <TextHeader>INFORMAÇÕES DE PERFIL</TextHeader>
            </BoxHeader>
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
            <BoxInput>
              <TextInput
                placeholder="Confirmação de senha"
                secureTextEntry
                fontFamily="Roboto-Regular"
              />
            </BoxInput>
            <BoxHeader>
              <TextHeader>FOTO DE PERFIL</TextHeader>
            </BoxHeader>
          </BoxForm>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <BoxImage>
              {/* <Icon name="control-point" size={30} color="#757575" /> */}
              <TextImage>adicionar foto</TextImage>
            </BoxImage>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Buttons.Rectangular color="#88c9bf" mtop="32px" mbottom="24px">
              <TextButton>FAZER CADASTRO</TextButton>
            </Buttons.Rectangular>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default CadastroPessoal;
