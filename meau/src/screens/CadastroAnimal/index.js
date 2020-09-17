import React from 'react';
import {StatusBar, View} from 'react-native';

import {
  BoxAction,
  BoxButtons,
  Container,
  TextButton,
  TextInitial,
  TextTitle,
} from './styles';

import {Buttons} from '../../components';

const CadastroAnimal = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f7a800" />
      <BoxAction>
        <TextTitle>Cadastro do Animal</TextTitle>
      </BoxAction>

      <Container>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInitial>Tenho interesse em cadastrar o animal para:</TextInitial>
        </View>
        <BoxButtons>
          <Buttons.ShortRectangular color="#ffd358">
            <TextButton>ADOÇÃO</TextButton>
          </Buttons.ShortRectangular>
          <View style={{marginLeft: 8, marginRight: 8}}>
            <Buttons.ShortRectangular color="#ffd358">
              <TextButton>APADRINHAR</TextButton>
            </Buttons.ShortRectangular>
          </View>
          <Buttons.ShortRectangular color="#ffd358">
            <TextButton>AJUDA</TextButton>
          </Buttons.ShortRectangular>
        </BoxButtons>
      </Container>
    </>
  );
};

export default CadastroAnimal;
