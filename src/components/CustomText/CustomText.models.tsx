import {TextProps} from 'react-native';

export interface Props extends TextProps {
  children?: any;
  text: string;
  bold?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  textColor?: string;
}
