import { combineReducers } from "redux";
import contactReducer from "./contacts/contactsReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
];

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["tokens"]
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: persistReducer(persistConfig, authReducer)
});

const store = configureStore({ reducer: rootReducer, middleware });

persistStore(store);

export default store;