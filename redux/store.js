import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
//Middleware para acciones asincronas
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));