import styled from 'styled-components/native';

export const ButtonSingIn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 232px;
  height: 40px;
  padding: 12px;
  border-radius: 2px;
  background-color: #88c9bf;
`;

export const ButtonSingInFacebook = styled(ButtonSingIn)`
  margin-top: 72px;
  margin-bottom: 8px;
  background-color: #194f7c;
`;

export const ButtonSingInGoogle = styled(ButtonSingInFacebook)`
  margin-top: 0px;
  background-color: #f15f5c;
`;

export const ButtonText = styled.Text`
  color: #434343;
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const ButtonTextSocialNetworks = styled.Text`
  color: #f7f7f7;
  font-size: 12px;
  font-family: 'Roboto-Regular';
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  align-items: center;
  text-align: center;
`;

export const ContainerLogin = styled.View`
  justify-content: flex-start;
  align-items: center;
`;

export const InputUser = styled.TextInput.attrs({
  placeholderTextColor: '#bdbdbd',
})`
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-family: 'Roboto-Regular';
  margin-top: 64px;
  padding-bottom: 8px;
  margin-bottom: 20px;
  width: 321px;
  border: 2px solid #e6e7e8;
  border-radius: 3px;
`;

export const InputPassword = styled(InputUser)`
  font-family: 'Roboto-Regular';
  margin-top: 0px;
  margin-bottom: 52px;
`;

export const SafeArea = styled.SafeAreaView`
  background-color: #fafafa;
`;
