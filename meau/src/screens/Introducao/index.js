import React from 'react';
import {
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

// import {Container} from './styles';

const Introducao = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.postContainer}>
              <Text style={styles.postTitle}>Olá!</Text>
              <Text style={styles.postDescription}>Bem vindo ao Meau!</Text>
              <Text style={styles.postDescription}>
                Aqui você pode adotar, doar e ajudar
              </Text>
              <Text style={styles.postDescription}>
                cães e gatos com facilidade.
              </Text>
              <Text style={styles.postDescription}>Qual o seu interesse?</Text>
            </View>

            <View>
              <TouchableOpacity style={styles.buttonBox}>
                <Text style={styles.boxTitle}>ADOTAR</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.buttonBox}>
                <Text style={styles.boxTitle}>AJUDAR</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.buttonBox}>
                <Text style={styles.boxTitle}>CADASTRAR ANIMAL</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableHighlight>
                <Text style={styles.loginStyle}>login</Text>
              </TouchableHighlight>
            </View>

            <Image
              // Criar uma constant para guardar os path de imagens na mesma
              // hierarquia da pasta de imagens
              source={require('/home/estevamalbuquerque/Documentos/meau_app/src/assets/images/Introducao/Meau_marca.png')}
              style={styles.bottomImage}
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
    backgroundColor: '#FFF',
  },
  postContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 52,
    backgroundColor: '#FFF',
  },
  boxTitle: {
    fontSize: 12,
    color: '#434343',
    fontFamily: 'Roboto-Regular',
  },
  buttonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd358',
    marginBottom: 12,
    width: 232,
    height: 40,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  loginStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#88c9bf',
    marginTop: 44,
    marginBottom: 68,
  },
  postTitle: {
    fontFamily: 'Courgette-Regular',
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 52,
    marginTop: 56,
    color: '#ffd358',
  },
  postDescription: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#757575',
  },
  bottomImage: {
    height: 44,
    width: 122,
    marginBottom: 32,
  },
});

export default Introducao;