import { configure } from '@storybook/react';

import '../src/assets/styles/Base.css';
import '../src/assets/styles/Reset.css';

const req = require.context('../src/components', true, /\.story\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
