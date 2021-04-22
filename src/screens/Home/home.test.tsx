import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';

import Home from './home';

describe('Given a Home screen, when the screen is rendered', () => {
  it('should match the snapshot', () => {
    const {container} = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
