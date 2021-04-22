import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';

import Settings from './settings';

describe('Given a Settings screen, when the screen is rendered', () => {
  it('should match the snapshot', () => {
    const {container} = render(<Settings />);
    expect(container).toMatchSnapshot();
  });
});
