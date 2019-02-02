import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsArticle from './Article';

storiesOf('NewsArticle component', module)
  .add('with props', () => (
    <NewsArticle
      sectionName="Sport"
      webTitle="Ireland v England: Six Nations 2019 – live!"
      webPublicationDate="02/02/2019 11:00:37"
      thumbnail="https://media.guim.co.uk/89bb00615f5477d6ef026da116200360b43a9107/0_100_4260_2556/500.jpg"
      productionOffice="UK"
    />
  ));
