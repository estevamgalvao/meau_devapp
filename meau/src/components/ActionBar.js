import styled from 'styled-components/native';

import React from 'react';
import {StatusBar} from 'react-native';

const ActionBar = ({sBarColor, aBarColor, text}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={sBarColor} />
      <BoxAction color={aBarColor}>
        <TextTitle>{text}</TextTitle>
      </BoxAction>
    </>
  );
};

export default ActionBar;

const BoxAction = styled.View`
  flex-direction: row;
  text-align: center;
  height: 72px;
  background-color: ${(props) => props.color || '#fff5'};
  elevation: 5;
`;

const TextTitle = styled.Text`
  font-size: 20px;
  font-family: 'Roboto-Medium';
  margin: auto 10px;
  color: #434343;
`;
