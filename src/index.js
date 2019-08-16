// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './components/Spinner';
import store from './routes/store';
import { persistStore } from 'redux-persist';

//  ReactDOM.render(<App  />, document.getElementById('root'));
let spinner = <Spinner/>
const persistor = persistStore(store)
const app = document.getElementById('root');
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={spinner} persistor={persistor}>
      <App/>
    </PersistGate>
    </Provider>,
    app,
  );
  
