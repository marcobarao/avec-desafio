import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import Spinner from '../Spinner/Spinner';

storiesOf('Button component', module)
  .add('with text', () => (
    <Button
      handleClick={action('clicked')}
    >
      Load more
    </Button>
  ))
  .add('with spinner', () => (
    <Button
      handleClick={action('clicked')}
    >
      <Spinner />
    </Button>
  ));
