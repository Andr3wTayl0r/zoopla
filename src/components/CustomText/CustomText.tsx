import * as React from 'react';

import {Props} from './CustomText.models';
import {StyledText} from './CustomText.styles';

const CustomText = (props: Props) => (
  <StyledText {...props}>{props.text}</StyledText>
);

export default CustomText;
