import React from 'react';
import { renderToString } from 'react-dom/server';

import HomePage from '../client/pages/homepage/homepage.page';
import htmlTemplate from '../template';

export default () => {
  const markup = renderToString(<HomePage />);

  return htmlTemplate({ markup });
}