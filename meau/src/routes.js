import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import CadastroAnimal from './screens/CadastroAnimal';
import CadastroPessoal from './screens/CadastroPessoal';
import Introducao from './screens/Introducao';
import Login from './screens/Login';
import ListagemAnimal from './screens/ListagemAnimal';
import MenuPerfil from './screens/MenuPerfil';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Introducao"
      component={Introducao}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CadastroPessoal" component={CadastroPessoal} />
    <Stack.Screen name="Login" component={CadastroAnimal} />
    <Stack.Screen name="MenuPerfil" component={MenuPerfil} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Introducao} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="CadastroPessoal" component={CadastroPessoal} />
      <Drawer.Screen name="CadastroAnimal" component={CadastroAnimal} />
      <Drawer.Screen name="ListagemAnimal" component={ListagemAnimal} />
      <Drawer.Screen name="MenuPerfil" component={MenuPerfil} />
    </Drawer.Navigator>
  );
}
