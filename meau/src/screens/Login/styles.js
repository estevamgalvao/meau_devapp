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

export const TextButton = styled.Text`
  font-size: 12px;
  font-family: 'Roboto-Regular';
  color: ${(props) => props.color || '#f7f7f7'};
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  margin: auto 10px;
  color: #434343;
`;
