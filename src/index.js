import React from 'react';
// import ReactDOM from 'react-dom'; REPLACING WITH OUR CUSTOM RENDERER
import MyCustomRenderer from './myCustomRenderer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

MyCustomRenderer.render(<App />, document.getElementById('root'));

/**
 * This render function takes 3 arguments:
 * reactElement (<App />)
 * domElement (root)
 * callback (omitted)
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
