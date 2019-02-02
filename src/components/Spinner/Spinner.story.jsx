import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from './Spinner';

storiesOf('Spinner component', module)
  .add('without props (default negative)', () => (
    <Spinner />
  ))
  .add('with color props', () => (
    <Spinner color="positive" />
  ));
