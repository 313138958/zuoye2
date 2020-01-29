import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Api from './utils/Api'
import 'antd/dist/antd.css';
React.Component.prototype.Api = Api
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
