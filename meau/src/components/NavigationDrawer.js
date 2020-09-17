import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const NavigationDrawer = ({color, backgroundColor}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5,
        backgroundColor: `${backgroundColor || '#FFF'}`,
      }}>
      <Icon.Button
        name="ios-menu"
        size={30}
        color={color || '#000'}
        backgroundColor={backgroundColor || '#FFF'}
        width="auto"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

export default NavigationDrawer;
