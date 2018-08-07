import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers'; 
import AdminRecord from './components/AdminRecord';

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><AdminRecord /></Provider>, document.getElementById('root'));
registerServiceWorker();
