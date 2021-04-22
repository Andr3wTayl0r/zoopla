import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const windowHeight = Dimensions.get('window').height;

export const Body = styled.View`
  margin-top: ${String(
    (windowHeight / (DeviceInfo.hasNotch() ? 3.3 : 2.9)).toFixed(0),
  )};
  align-items: flex-start;
  padding-left: 16px;
  padding-top: 16px;
`;

export const Image = styled.Image`
  width: 100%;
  height: ${String((windowHeight / 2.5).toFixed(0))};
  resize-mode: cover;
  position: absolute;
  top: 0;
`;

export const ButtonBack = styled.TouchableOpacity`
  padding: 0 5px;
`;

export const ButtonShare = styled.TouchableOpacity`
  padding: 0 5px;
`;

export const ButtonLike = styled.TouchableOpacity`
  padding: 0 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
`;

export const BColumn = styled.View<{right?: boolean}>`
  width: 50%;
  flex-direction: row;
  justify-content: ${p => (p.right ? 'flex-end' : 'flex-start')};
`;

export const IconRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
`;
