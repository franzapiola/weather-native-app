import { combineReducers } from 'redux';
import main from './main';
import favs from './favs';

export default combineReducers({
  main,
  favs
});