import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/index';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
// import ContextApp from './components/contextComponents/ContextApp'
import ReactTableEx from './components/ReactTable/App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <ReactTableEx />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
