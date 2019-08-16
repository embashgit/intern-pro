import { createStore, applyMiddleware, compose } from 'redux';
 import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'
import rootReducer from '../../reducers';

const encryptor = createEncryptor({
  secretKey: 'my-low-key',
  onError: function(error) {
    // Handle the error.
  } 
})



const persistConfig = {
    key: 'root',
    storage,
    transforms:[encryptor]
  }
const logger = createLogger();

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
   )

 const store =  createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
