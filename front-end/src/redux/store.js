// configuration et création du store Redux : importer et combiner vos reducers, créer le store Redux et l'exporter pour qu'il puisse être utilisé dans votre application
// centralise tout notre state en un seul endroit

// import { configureStore } from '@reduxjs/toolkit'

// export default configureStore({
//   reducer: {},
// })
// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import apiReducer from './api';
// import loginReducer from './login';

// import accountReducer from './accountSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // api: apiReducer,
    // login: loginReducer,

    // account: accountReducer,
  },
});

export default store;
