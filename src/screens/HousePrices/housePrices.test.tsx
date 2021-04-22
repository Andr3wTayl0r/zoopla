import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';

import HousePrices from './housePrices';

describe('Given a House Prices screen, when the screen is rendered', () => {
  it('should match the snapshot', () => {
    const {container} = render(<HousePrices />);
    expect(container).toMatchSnapshot();
  });
});
