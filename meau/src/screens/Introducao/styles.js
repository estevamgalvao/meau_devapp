import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #ffd358;
  margin-bottom: 12px;
  width: 232px;
  height: 40px;
  border-radius: 2px;
  /* shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 1;
  }
  shadow-opacity: 0.22;
  shadow-radius: 2.22;
  elevation: 3; */
`;

export const ButtonLogin = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;
export const ButtonLoginText = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Regular';
  color: #88c9bf;
  margin-top: 44px;
  margin-bottom: 68px;
`;

export const ButtonText = styled.Text`
  color: #434343;
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  text-align: center;
`;

export const ContainerMessages = styled.View`
  align-items: center;
  text-align: center;
  margin-bottom: 48px;
`;

export const Image = styled.Image`
  height: 44px;
  width: 122px;
  margin-bottom: 32px;
`;

export const Message = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #757575;
`;

export const SafeArea = styled.SafeAreaView`
  background-color: #fafafa;
`;

export const Title = styled.Text`
  font-family: 'Courgette-Regular';
  font-size: 72px;
  margin-bottom: 52px;
  margin-top: 56px;
  color: #ffd358;
`;
