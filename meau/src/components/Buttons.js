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
  margin-top: ${(props) => props.marginTop || '25px'};
  margin-bottom: ${(props) => props.marginBottom || '25px'};
`;

export const ShortRectangular = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || '#0005'};
  margin-top: ${(props) => props.marginTop || '0px'};
  margin-bottom: ${(props) => props.marginBottom || '0px'};
`;
