import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import BackArrow from '../../assets/icons/back-arrow.svg';

storiesOf('Header component', module)
  .add('without props', () => (
    <Header />
  ))
  .add('with title', () => (
    <Header
      title="Sport"
    />
  ))
  .add('with big title', () => (
    <Header
      title="Trigger warnings OK but no-platforming may be illegal, universities warned"
    />
  ))
  .add('with back to previous page icon', () => (
    <Header
      title="Life and style"
      icon={BackArrow}
      alt="Back to previous page"
      handleClick={action('clicked')}
    />
  ));
