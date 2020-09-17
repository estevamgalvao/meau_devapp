import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import CadastroPessoal from './screens/CadastroPessoal';
import Introducao from './screens/Introducao';
import Login from './screens/Login';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="CadastroPessoal">
      <Stack.Screen name="Introducao" component={Introducao} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastroPessoal" component={CadastroPessoal} />
    </Stack.Navigator>
  );
}
