import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import "white-web-sdk/style/index.css";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
