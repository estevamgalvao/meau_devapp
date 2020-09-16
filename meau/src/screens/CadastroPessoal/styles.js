import styled from 'styled-components/native';

export const Container = styled.View`
    background color: #fff;
    /* justify-content: center; */
    align-items: center;
`;

export const TextBox = styled.View`
  background-color: #cfe9e5;
  border-radius: 5px;
  text-align: center;
  width: 328px;
  height: 80px;
  margin: 16px;
  padding: 4px;
`;

export const FormBox = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px;
`;

export const InputBox = styled.View`
  background-color: transparent;
  /* border-style: dotted; */
  /* border-width: 0px; */
  border-bottom-width: 0.8px;
  width: 328px;
  padding: 8px;
  margin: 10px;
  border-color: #bdbdbd;
  /* padding: 0px; */
`;

export const NavBox = styled.View`
  width: 360px;
  height: 24px;
  background-color: #88c9bf;
`;

export const ActionBox = styled.View`
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  width: 360px;
  height: 72px;
  background-color: #cfe9e5;
`;

export const ActionText = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Regular';
  color: #434343;
`;

export const HeaderText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #88c9bf;
`;

export const DescText = styled.Text`
  font-size: 14px;
  font-family: 'Roboto-Regular';
  color: #434343;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TextInputStyled = styled.TextInput`
  background-color: transparent;
  border-style: dotted;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: #bdbdbd;
  /* border-bottom-width: 0px; */
`;
