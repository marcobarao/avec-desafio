import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsListContent from './Content';

storiesOf('NewsListContent component', module)
  .add('with props', () => (
    <NewsListContent
      sectionName="Life and style"
      webTitle="Trigger warnings OK but no-platforming may be illegal, universities warned OK but no-platforming may be illegal, universities warned"
      webPublicationDate="02/02/2019 11:00:37"
    />
  ));
