import React from 'react';
import {View, TextInput, ScrollView} from 'react-native';

import {
  BoxAction,
  BoxForm,
  BoxInput,
  BoxNav,
  BoxText,
  Container,
  TextDesc,
  TextHeader,
  TextTitle,
} from './styles';

const CadastroPessoal = () => {
  return (
    <>
      <BoxNav />
      <BoxAction>
        <TextTitle>Cadastro Pessoal</TextTitle>
      </BoxAction>
      <ScrollView>
        <Container>
          <BoxText>
            <TextDesc>
              As informações preenchidas serão divulgadas apenas para a pessoa
              com a qual você irá realizar o processo de adoção e/ou
              apadrinhamento, após a formalização do processo.
            </TextDesc>
          </BoxText>

          <BoxForm>
            <TextHeader>INFORMAÇÕES PESSOAIS</TextHeader>
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
          </BoxForm>

          <View>
            <TextHeader>INFORMAÇÕES DE PERFIL</TextHeader>
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
          </View>

          <View>
            <TextHeader>FOTO DE PERFIL</TextHeader>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default CadastroPessoal;
