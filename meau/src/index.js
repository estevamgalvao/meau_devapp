import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import Introducao from './screens/Introducao';
// import { Container } from './styles';

const src = () => {
  return (
    <View>
      <Text style={styles.boxTitle}>Hello SRC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxTitle: {
    fontSize: 40,
    color: '#434343',
    fontFamily: 'Courgette-Regular',
  },
});

export default src;
