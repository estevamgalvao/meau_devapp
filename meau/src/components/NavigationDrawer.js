import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavigationDrawer = () => {
  const navigation = useNavigation();

  return (
    <Icon.Button
      name="ios-menu"
      size={25}
      color="#88c9bf"
      backgroundColor="#fafafa"
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

export default NavigationDrawer;
