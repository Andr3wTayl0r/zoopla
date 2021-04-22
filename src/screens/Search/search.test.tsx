import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';

import Search from './search';

describe('Given a Search screen, when the screen is rendered', () => {
  it('should match the snapshot', () => {
    const {container} = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
