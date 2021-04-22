import '@testing-library/jest-native/extend-expect';
import React from 'react';
import {render} from '@testing-library/react-native';

import Properties from './properties';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');

describe('Given a Properties screen, when the screen is rendered', () => {
  it('should match the snapshot', () => {
    const {container} = render(<Properties />);
    expect(container).toMatchSnapshot();
  });
});
