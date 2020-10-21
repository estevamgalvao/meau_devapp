import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'firebase';
import Routes from './src/routes';
// import {firestore} from 'firebase';
import 'firebase/firestore';

export default function meau() {
  const firebaseConfig = {
    apiKey: 'AIzaSyDFrLX-eiA37O30bHhxZPWu2CIQC6KKQMg',
    authDomain: 'meau-550bb.firebaseapp.com',
    databaseURL: 'https://meau-550bb.firebaseio.com',
    projectId: 'meau-550bb',
    storageBucket: 'meau-550bb.appspot.com',
    messagingSenderId: '1080192839844',
    appId: '1:1080192839844:web:b7d99abce60889ab16f631',
  };

  if (firebase.apps.length === 0) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
