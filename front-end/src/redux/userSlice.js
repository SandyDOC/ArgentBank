// invoicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL de base de l'API
// const API_URL = 'https://api.example.com/invoices';
const API_URL = 'http://localhost:3001/';

// Actions asynchrones
// fetchUser qui retourne un utilisateur
export const fetchUser = createAsyncThunk('user/profile', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

//loginUser 
export const loginUser = createAsyncThunk('user/login', async (token) => {
  const response = await axios.post(API_URL, token);
  return response.data;
});
//signUpUser 
export const signUpUser = createAsyncThunk('user/signup', async (user) => {
  const response = await axios.post(API_URL, user);
  return response.data;
});

// updateUser qui changera le username de l'utilisateur
export const updateUser = createAsyncThunk('user/profile', async (user) => {
  const response = await axios.put(API_URL, user);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: null,
    token: null,
    status: 'idle',
    error: null,
    apiMessage: null,

    // email: null,
    // password: null,
    // firstName: null,
    // lastName: null,
    // userName: null,
    // token: null,
    // status: 'idle',
    // error: null,
  },
  reducers: {
    // logout: (state) => {
    //   // Réinitialise l'état utilisateur
    //   state.email = null;
    //   state.firstName = null;
    //   state.lastName = null;
    //   state.token = null;
    //   state.status = 'idle';
    //   state.error = null;
    //   // Optionnel : supprimer le token de localStorage si tu l'y stockes
    //   localStorage.removeItem('token');
    // },
  },
},
)
// extraReducers: (builder) => {
//   builder
//     .addCase(fetchUser.pending, (state) => {
//       state.status = 'loading';
//     })
//     .addCase(fetchUser.fulfilled, (state, action) => {
//       const { status, message, body } = action.payload;
//       if (status === 0) { // Si l'API renvoie un statut de succès
//         state.id = body.id;
//         state.email = body.email;
//         state.status = 'succeeded';
//       } else {
//         state.status = 'failed';
//         state.error = message;
//       }
//       state.apiMessage = message;  // Stockage du message de l'API
//     })
//     .addCase(fetchUser.rejected, (state, action) => {
//       state.status = 'failed';
//       state.error = action.error.message;
//     })
//     .addCase(updateUser.fulfilled, (state, action) => {
//       const { id, email } = action.payload.body;
//       state.id = id;
//       state.email = email;
//     })
//     .addCase(loginUser.fulfilled, (state, action) => {
//       state.token = action.payload.token;
//       const { id, email } = action.payload.user;
//       state.id = id;
//       state.email = email;

//   state.status = 'succeeded';
// state.token = action.payload.token;
// state.firstName = action.payload.firstName;
// state.lastName = action.payload.lastName;
// state.email = action.payload.email;

// Optionnel : stocker le token dans localStorage pour persister la session
// localStorage.setItem('token', action.payload.token);
//     })
//     .addCase(signUpUser.fulfilled, (state, action) => {
//       const { id, email } = action.payload.user;
//       state.id = id;
//       state.email = email;
//       state.token = action.payload.token;
//     });

// });

// Export de l'action logout
// export const { logout } = userSlice.actions;

export default userSlice.reducer;

// extraReducers: (builder) => {
//   builder
//     .addCase(fetchUser.pending, (state) => {
//       state.status = 'loading';
//     })
//     .addCase(fetchUser.fulfilled, (state, action) => {
//       state.status = 'succeeded';
//       // Mise à jour des informations utilisateur
//       const { email, firstName, lastName, userName } = action.payload;
//       state.email = email;
//       state.firstName = firstName;
//       state.lastName = lastName;
//       state.userName = userName;
//     })
//     .addCase(fetchUser.rejected, (state, action) => {  // Correction ici
//       state.status = 'failed';
//       state.error = action.error.message;
//     })
//     .addCase(updateUser.fulfilled, (state, action) => {
//       // Mise à jour des informations utilisateur après modification
//       const { email, firstName, lastName, userName } = action.payload;
//       state.email = email;
//       state.firstName = firstName;
//       state.lastName = lastName;
//       state.userName = userName;
//     })
//     .addCase(loginUser.fulfilled, (state, action) => {
//       // Stockage du token après le login
//       state.token = action.payload.token;
//     })
//     .addCase(signUpUser.fulfilled, (state, action) => {
//       // Mise à jour de l'utilisateur après le signup
//       const { email, firstName, lastName, userName, token } = action.payload;
//       state.email = email;
//       state.firstName = firstName;
//       state.lastName = lastName;
//       state.userName = userName;
//       state.token = token;
//     });
// },

