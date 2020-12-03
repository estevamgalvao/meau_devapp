import React, {useState} from 'react';
import {StatusBar, View, TextInput, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import {Buttons, SafeArea} from '../../components';

import {
  BoxAction,
  BoxButtons,
  BoxCheckBoxes,
  BoxForm,
  BoxHeader,
  BoxInput,
  Container,
  TextButton,
  TextForm,
  TextInitial,
  TextTitle,
  TextHeader,
} from './styles';

const CadastroAnimal = ({navigation, route}) => {
  // Criando as variáveis que receberão os pares [valor, funçãoQueAlteraValor] para cada checkbox
  const [toggleCheckBoxEspecie1, setToggleCheckBoxEspecie1] = useState(false);
  const [toggleCheckBoxEspecie2, setToggleCheckBoxEspecie2] = useState(false);

  const [toggleCheckBoxSexo1, setToggleCheckBoxSexo1] = useState(false);
  const [toggleCheckBoxSexo2, setToggleCheckBoxSexo2] = useState(false);

  const [toggleCheckBoxPorte1, setToggleCheckBoxPorte1] = useState(false);
  const [toggleCheckBoxPorte2, setToggleCheckBoxPorte2] = useState(false);
  const [toggleCheckBoxPorte3, setToggleCheckBoxPorte3] = useState(false);

  const [toggleCheckBoxIdade1, setToggleCheckBoxIdade1] = useState(false);
  const [toggleCheckBoxIdade2, setToggleCheckBoxIdade2] = useState(false);
  const [toggleCheckBoxIdade3, setToggleCheckBoxIdade3] = useState(false);

  const [toggleCheckBoxTemp1, setToggleCheckBoxTemp1] = useState(false);
  const [toggleCheckBoxTemp2, setToggleCheckBoxTemp2] = useState(false);
  const [toggleCheckBoxTemp3, setToggleCheckBoxTemp3] = useState(false);
  const [toggleCheckBoxTemp4, setToggleCheckBoxTemp4] = useState(false);
  const [toggleCheckBoxTemp5, setToggleCheckBoxTemp5] = useState(false);
  const [toggleCheckBoxTemp6, setToggleCheckBoxTemp6] = useState(false);

  const [toggleCheckBoxSaude1, setToggleCheckBoxSaude1] = useState(false);
  const [toggleCheckBoxSaude2, setToggleCheckBoxSaude2] = useState(false);
  const [toggleCheckBoxSaude3, setToggleCheckBoxSaude3] = useState(false);
  const [toggleCheckBoxSaude4, setToggleCheckBoxSaude4] = useState(false);

  const [toggleCheckBoxExigen1, setToggleCheckBoxExigen1] = useState(false);
  const [toggleCheckBoxExigen2, setToggleCheckBoxExigen2] = useState(false);
  const [toggleCheckBoxExigen3, setToggleCheckBoxExigen3] = useState(false);
  const [toggleCheckBoxExigen4, setToggleCheckBoxExigen4] = useState(false);

  // Declarando variáveis para acomodarem as entradas de texto
  const [nameAnimal, setNameAnimal] = useState('');
  const [diseaseAnimal, setDiseaseAnimal] = useState('');
  const [aboutAnimal, setAboutAnimal] = useState('');

  // Função que adiciona todos os parâmetros ao banco de dados
  const AddAnimalData = async (
    about,
    age,
    disease,
    gender,
    name,
    port,
    species,
    temp,
    exigen,
    health,
    user,
  ) => {
    if (health[3] === 0) {
      disease = '';
    }
    if (
      age === 0 ||
      gender === 0 ||
      name === '' ||
      port === 0 ||
      species === 0 ||
      temp === 0 ||
      exigen < 4
    ) {
      console.log('Missing information or unmet requirements');
    } else {
      await firestore()
        .collection('animal')
        .add({
          about_animal: about,
          age_group: age,
          disease,
          gender,
          name_animal: name,
          port,
          species,
          temp,
          requirements: exigen,
          health,
          owner: user,
        })
        .then(() => {
          console.log('Animal added!');
        });
    }
  };

  // Função que recolhe todos os estados das checkbox e é acionada ao clicar em adoção
  // chamando em seguida a função de adicionar os dados ao banco de dados passando os estados como parâmetro
  const GetCheckbox = () => {
    let age = 0;
    let gender = 0;
    let port = 0;
    let species = 0;
    let temp = 0;
    let exigen = 0;
    const health = [0, 0, 0, 0];

    if (toggleCheckBoxEspecie1) {
      species = 1;
    } else if (toggleCheckBoxEspecie2) {
      species = 2;
    }
    if (toggleCheckBoxSexo1) {
      gender = 1;
    } else if (toggleCheckBoxSexo2) {
      gender = 2;
    }
    if (toggleCheckBoxPorte1) {
      port = 1;
    } else if (toggleCheckBoxPorte2) {
      port = 2;
    } else if (toggleCheckBoxPorte3) {
      port = 3;
    }
    if (toggleCheckBoxIdade1) {
      age = 1;
    } else if (toggleCheckBoxIdade2) {
      age = 2;
    } else if (toggleCheckBoxIdade3) {
      age = 3;
    }
    if (toggleCheckBoxTemp1) {
      temp = 1;
    } else if (toggleCheckBoxTemp2) {
      temp = 2;
    } else if (toggleCheckBoxTemp3) {
      temp = 3;
    } else if (toggleCheckBoxTemp4) {
      temp = 4;
    } else if (toggleCheckBoxTemp5) {
      temp = 5;
    } else if (toggleCheckBoxTemp6) {
      temp = 6;
    }
    if (toggleCheckBoxSaude1) {
      health[0] = 1;
    }
    if (toggleCheckBoxSaude2) {
      health[1] = 2;
    }
    if (toggleCheckBoxSaude3) {
      health[2] = 3;
    }
    if (toggleCheckBoxSaude4) {
      health[3] = 4;
    }

    if (toggleCheckBoxExigen1) {
      exigen += 1;
    }
    if (toggleCheckBoxExigen2) {
      exigen += 1;
    }
    if (toggleCheckBoxExigen3) {
      exigen += 1;
    }
    if (toggleCheckBoxExigen4) {
      exigen += 1;
    }

    AddAnimalData(
      aboutAnimal,
      age,
      diseaseAnimal,
      gender,
      nameAnimal,
      port,
      species,
      temp,
      exigen,
      health,
      route.params.userLogged,
    );
  };

  return (
    <>
      <SafeArea color="#ffd358" />
      <StatusBar barStyle="light-content" backgroundColor="#f7a800" />
      <BoxAction>
        <TextTitle>Cadastro do Animal</TextTitle>
      </BoxAction>
      <ScrollView>
        <Container>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 16,
            }}>
            <TextInitial>
              Tenho interesse em cadastrar o animal para:
            </TextInitial>
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
          <View
            style={{margin: 24, borderTopWidth: 0.8, borderColor: '#e6e7e8'}}>
            <View style={{paddingTop: 16}}>
              <BoxHeader>
                <TextHeader>Adoção</TextHeader>
              </BoxHeader>
            </View>
            <BoxForm>
              <TextForm>NOME DO ANIMAL</TextForm>
            </BoxForm>
            <BoxInput>
              <TextInput
                placeholder="Nome do animal"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setNameAnimal(text)}
              />
            </BoxInput>
            <BoxForm>
              <TextForm>FOTOS DO ANIMAL</TextForm>
            </BoxForm>
            <BoxForm>
              <TextForm>ESPÉCIE</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxEspecie1}
                onValueChange={(newValue) =>
                  setToggleCheckBoxEspecie1(newValue)
                }
              />
              <TextInitial>Cachorro</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxEspecie2}
                onValueChange={(newValue) =>
                  setToggleCheckBoxEspecie2(newValue)
                }
              />
              <TextInitial>Gato</TextInitial>
            </BoxCheckBoxes>
            <BoxForm>
              <TextForm>SEXO</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxSexo1}
                onValueChange={(newValue) => setToggleCheckBoxSexo1(newValue)}
              />
              <TextInitial>Macho</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxSexo2}
                onValueChange={(newValue) => setToggleCheckBoxSexo2(newValue)}
              />
              <TextInitial>Fêmea</TextInitial>
            </BoxCheckBoxes>
            <BoxForm>
              <TextForm>PORTE</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxPorte1}
                onValueChange={(newValue) => setToggleCheckBoxPorte1(newValue)}
              />
              <TextInitial>Pequeno</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxPorte2}
                onValueChange={(newValue) => setToggleCheckBoxPorte2(newValue)}
              />
              <TextInitial>Médio</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxPorte3}
                onValueChange={(newValue) => setToggleCheckBoxPorte3(newValue)}
              />
              <TextInitial>Grande</TextInitial>
            </BoxCheckBoxes>
            <BoxForm>
              <TextForm>IDADE</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxIdade1}
                onValueChange={(newValue) => setToggleCheckBoxIdade1(newValue)}
              />
              <TextInitial>Filhote</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxIdade2}
                onValueChange={(newValue) => setToggleCheckBoxIdade2(newValue)}
              />
              <TextInitial>Adulto</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxIdade3}
                onValueChange={(newValue) => setToggleCheckBoxIdade3(newValue)}
              />
              <TextInitial>Idoso</TextInitial>
            </BoxCheckBoxes>
            <BoxForm>
              <TextForm>TEMPERAMENTO</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxTemp1}
                onValueChange={(newValue) => setToggleCheckBoxTemp1(newValue)}
              />
              <TextInitial>Brincalhão</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxTemp2}
                onValueChange={(newValue2) => setToggleCheckBoxTemp2(newValue2)}
              />
              <TextInitial>Tímido</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxTemp3}
                onValueChange={(newValue) => setToggleCheckBoxTemp3(newValue)}
              />
              <TextInitial>Calmo</TextInitial>
            </BoxCheckBoxes>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxTemp4}
                onValueChange={(newValue) => setToggleCheckBoxTemp4(newValue)}
              />
              <TextInitial>Guarda</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxTemp5}
                onValueChange={(newValue) => setToggleCheckBoxTemp5(newValue)}
              />
              <TextInitial>Amoroso</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxTemp6}
                onValueChange={(newValue) => setToggleCheckBoxTemp6(newValue)}
              />
              <TextInitial>Preguiçoso</TextInitial>
            </BoxCheckBoxes>
            <BoxForm>
              <TextForm>SAÚDE</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxSaude1}
                onValueChange={(newValue) => setToggleCheckBoxSaude1(newValue)}
              />
              <TextInitial>Vacinado</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxSaude2}
                onValueChange={(newValue) => setToggleCheckBoxSaude2(newValue)}
              />
              <TextInitial>Vermifugado</TextInitial>
            </BoxCheckBoxes>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxSaude3}
                onValueChange={(newValue) => setToggleCheckBoxSaude3(newValue)}
              />
              <TextInitial>Castrado</TextInitial>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxSaude4}
                onValueChange={(newValue) => setToggleCheckBoxSaude4(newValue)}
              />
              <TextInitial>Doente</TextInitial>
            </BoxCheckBoxes>
            <BoxInput>
              <TextInput
                placeholder="Doenças do animal"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setDiseaseAnimal(text)}
              />
            </BoxInput>
            <BoxForm>
              <TextForm>EXIGÊNCIAS PARA ADOÇÃO</TextForm>
            </BoxForm>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxExigen1}
                onValueChange={(newValue) => setToggleCheckBoxExigen1(newValue)}
              />
              <TextInitial>Termo de adoção</TextInitial>
            </BoxCheckBoxes>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxExigen2}
                onValueChange={(newValue) => setToggleCheckBoxExigen2(newValue)}
              />
              <TextInitial>Fotos da casa</TextInitial>
            </BoxCheckBoxes>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxExigen3}
                onValueChange={(newValue) => setToggleCheckBoxExigen3(newValue)}
              />
              <TextInitial>Visita prévia ao animal</TextInitial>
            </BoxCheckBoxes>
            <BoxCheckBoxes>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxExigen4}
                onValueChange={(newValue) => setToggleCheckBoxExigen4(newValue)}
              />
              <TextInitial>Acompanhamento pós adoção</TextInitial>
            </BoxCheckBoxes>
            <BoxForm>
              <TextForm>SOBRE O ANIMAL</TextForm>
            </BoxForm>
            <BoxInput>
              <TextInput
                placeholder="Compartilhe a história do animal"
                fontFamily="Roboto-Regular"
                onChangeText={(text) => setAboutAnimal(text)}
              />
            </BoxInput>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Buttons.Rectangular
              color="#FFD358"
              marginTop="0px"
              marginBottom="24px"
              onPress={() => GetCheckbox(nameAnimal)}>
              <TextButton color="#434343">COLOCAR PARA ADOÇÃO</TextButton>
            </Buttons.Rectangular>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default CadastroAnimal;
