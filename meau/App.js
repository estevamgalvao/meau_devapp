import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from '@react-native-firebase/app';
import Routes from './src/routes';

const firebaseConfig = {
  apiKey: 'AIzaSyDFrLX-eiA37O30bHhxZPWu2CIQC6KKQMg',
  authDomain: 'meau-550bb.firebaseapp.com',
  databaseURL: 'https://meau-550bb.firebaseio.com',
  projectId: 'meau-550bb',
  storageBucket: 'meau-550bb.appspot.com',
  messagingSenderId: '1080192839844',
  appId: '1:1080192839844:web:b7d99abce60889ab16f631',
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function meau() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
