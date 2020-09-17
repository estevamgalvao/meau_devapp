import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  background-color: ${(props) => props.color || '#FFF'};
`;

export default SafeArea;
