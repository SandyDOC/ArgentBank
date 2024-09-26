// configuration et création du store Redux : importer et combiner vos reducers, créer le store Redux et l'exporter pour qu'il puisse être utilisé dans votre application
// centralise tout notre state en un seul endroit

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
