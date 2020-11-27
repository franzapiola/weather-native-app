import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index';

//redux-persist para conservar estado al cerrar/abrir la app
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

//Middleware para acciones asincronas
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //reducers que NO quiero que persistan
  blacklist: ['main'],
  //reducers que SI quiero que persistan
  whitelist: ['favs']
};

const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;