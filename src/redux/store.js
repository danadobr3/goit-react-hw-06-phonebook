import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const persistFilterConfig = {
  key: 'filter',
  storage,
};

const persistContactsConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer
);
const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// console.log(store.getState());
export const persistor = persistStore(store);