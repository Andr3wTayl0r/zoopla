import styled from 'styled-components/native';
import {Props} from './CustomText.models';

export const StyledText = styled.Text<Props>`
  font-size: ${p => {
    if (p.h1) {
      return '50px';
    }
    if (p.h2) {
      return '40px';
    }
    if (p.h3) {
      return '30px';
    }
    if (p.h4) {
      return '20px';
    }
    return '16px';
  }};
  margin: ${p => {
    if (p.h1) {
      return '10px 0';
    }
    if (p.h2) {
      return '5px 0';
    }
    if (p.h3) {
      return '5px 0';
    }
    if (p.h4) {
      return '10px 0';
    }
    return '5px 0';
  }};
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
  color: ${p => (p.textColor ? p.textColor : 'black')};
`;
