/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Olá!</Text>
            </View>
            <View style={styles.messageView}>
              <Text style={styles.message}>Bem vindo ao Meau!</Text>
              <Text style={styles.message}>
                Aqui você pode adotar, doar e ajudar
              </Text>
              <Text style={styles.message}>cães e gatos com facilidade.</Text>

              <Text style={styles.message}>Qual o seu interesse?</Text>
            </View>
            <TouchableOpacity style={styles.buttons} onPress={this.onPress}>
              <Text>ADOTAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={this.onPress}>
              <Text>AJUDAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={this.onPress}>
              <Text>CADASTRAR ANIMAL</Text>
            </TouchableOpacity>
            <View style={styles.loginView}>
              <TouchableHighlight>
                <Text style={styles.loginBtn}>login</Text>
              </TouchableHighlight>
            </View>
            <Image
              style={styles.image}
              source={require('./assets/images/home/Meau_marca.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 56,
    marginBottom: 52,
    fontSize: 72,
    color: '#ffd358',
    fontFamily: 'Courgette-Regular',
  },
  message: {
    fontSize: 16,
    color: '#757575',
    fontFamily: 'Roboto-Regular',
  },
  messageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd358',
    width: 232,
    height: 40,
    marginTop: 16,
    fontFamily: 'Roboto-Regular',
  },
  loginView: {
    marginTop: 44,
    marginBottom: 68,
  },
  loginBtn: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#88c9bf',
  },
  image: {
    height: 44,
    width: 122,
  },
});

export default App;
