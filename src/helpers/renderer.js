import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import htmlTemplate from '../template';
import Routes from '../client/Routes';

export default ({ path }) => {
  const markup = renderToString(
    <StaticRouter location={path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return htmlTemplate({ markup });
}