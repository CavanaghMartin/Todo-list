import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from './index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor }
};
