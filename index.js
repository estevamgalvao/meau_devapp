/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/screens/Introducao'; // Adicionar aqui o path p executar
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
