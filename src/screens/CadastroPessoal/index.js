import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

// import Introducao from './screens/Introducao';
import {
  Container,
  TextBox,
  HeaderText,
  TextInputStyled,
  FormBox,
  DescText,
  NavBox,
  ActionBox,
  ActionText,
  InputBox, //talvez trocar box_nome text_nome, assim da p pesquisar facil
} from './styles';

// import {Theme} from '../../constants';

const CadastroPessoal = () => {
  return (
    //Implementar NavBar - ActionBar
    <ScrollView>
      <Container>
        <NavBox />
        <ActionBox>
          <ActionText>Cadastro Pessoal</ActionText>
        </ActionBox>

        <TextBox>
          <DescText>
            As informações preenchidas serão divulgadas apenas para a pessoa com
            a qual você irá realizar o processo de adoção e/ou apadrinhamento,
            após a formalização do processo.
          </DescText>
        </TextBox>

        <FormBox>
          <HeaderText>INFORMAÇÕES PESSOAIS</HeaderText>
          <InputBox>
            <TextInput
              placeholder="Nome completo"
              fontFamily="Roboto-Regular"
            />
          </InputBox>
          <InputBox>
            <TextInput placeholder="Idade" fontFamily="Roboto-Regular" />
          </InputBox>
          <InputBox>
            <TextInput placeholder="E-mail" fontFamily="Roboto-Regular" />
          </InputBox>
          <InputBox>
            <TextInput placeholder="Estado" fontFamily="Roboto-Regular" />
          </InputBox>
          <InputBox>
            <TextInput placeholder="Cidade" fontFamily="Roboto-Regular" />
          </InputBox>
          <InputBox>
            <TextInput placeholder="Endereço" fontFamily="Roboto-Regular" />
          </InputBox>
          <InputBox>
            <TextInput placeholder="Telefone" fontFamily="Roboto-Regular" />
          </InputBox>
        </FormBox>

        <View>
          <HeaderText>INFORMAÇÕES DE PERFIL</HeaderText>
          <InputBox>
            <TextInput
              placeholder="Nome de usuário"
              fontFamily="Roboto-Regular"
            />
          </InputBox>
          <InputBox>
            <TextInput
              placeholder="Senha"
              secureTextEntry
              fontFamily="Roboto-Regular"
            />
          </InputBox>
          <InputBox>
            <TextInput
              placeholder="Confirmação de senha"
              secureTextEntry
              fontFamily="Roboto-Regular"
            />
          </InputBox>
        </View>

        <View>
          <HeaderText>FOTO DE PERFIL</HeaderText>
        </View>

        {/* <Button>Fazer Cadastro</Button> */}
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxTitle: {
    fontSize: 10,
    color: '#434343',
    fontFamily: 'Courgette-Regular',
  },
});

export default CadastroPessoal;
