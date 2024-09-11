// configuration et création du store Redux : importer et combiner vos reducers, créer le store Redux et l'exporter pour qu'il puisse être utilisé dans votre application
// centralise tout notre state en un seul endroit

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })
// store.js
import { configureStore } from '@reduxjs/toolkit';
import invoicesReducer from './features/invoicesSlice';

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
  },
});

export default store;
