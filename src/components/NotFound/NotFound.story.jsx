import React from 'react';
import { storiesOf } from '@storybook/react';

import NotFound from './NotFound';

storiesOf('NotFound component', module)
  .add('without props', () => (
    <NotFound />
  ));
