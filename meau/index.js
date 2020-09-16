/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/screens/Introducao'; // Adicionar aqui o path p executar
// import App from './src/screens/CadastroPessoal'; //fonts funcionam
// import App from './src/index'; //fonts funcionam
import App from './App'; // fonts funcionam
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
