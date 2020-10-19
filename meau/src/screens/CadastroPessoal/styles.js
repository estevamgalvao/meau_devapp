import styled from 'styled-components/native';

export const BoxAction = styled.View`
  flex-direction: row;
  text-align: center;
  height: 72px;
  background-color: #cfe9e5;
  elevation: 5;
`;

export const BoxForm = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 16px;
  margin-right: 16px;
`;

export const BoxHeader = styled.View`
  margin-top: 28px;
  margin-bottom: 32px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const BoxImage = styled.TouchableOpacity`
  width: 128px;
  height: 128px;
  background-color: #e6e7e7;
  padding-top: 44px;
  padding-bottom: 48px;
  align-items: center;
`;

export const BoxInput = styled.View`
  background-color: transparent;
  border-bottom-width: 0.8px;
  width: 340px;
  padding: 5px;
  border-color: #bdbdbd;
`;

export const BoxNav = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: '#88c9bf',
})``;

export const BoxText = styled.View`
  background-color: #cfe9e5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 328px;
  height: 80px;
  margin-top: 16px;
  padding: 4px;
`;

export const Container = styled.View`
    flex: 1;
    background color: #fff;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
  color: #434343;
`;

export const TextDesc = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #434343;
  text-align: center;
`;

export const TextHeader = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #88c9bf;
`;

export const TextImage = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #757575;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  margin: auto 10px;
  color: #434343;
`;
