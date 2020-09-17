import styled from 'styled-components/native';

export const Rectangular = styled.TouchableOpacity`
  width: 232px;
  height: 40px;
  padding: 12px;
  border-radius: 3px;
  elevation: 4;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || '#FFF5'};
  margin-top: ${(props) => props.mtop || '25px'};
  margin-bottom: ${(props) => props.mbottom || '25px'};
`;
