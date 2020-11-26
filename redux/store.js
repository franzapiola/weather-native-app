import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index';
//Middleware para acciones asincronas
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));