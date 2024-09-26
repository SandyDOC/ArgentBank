import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL de base de l'API
const API_URL = 'http://localhost:3001/api/v1/';

// Actions asynchrones
export const fetchUser = createAsyncThunk('user/profile', async (token) => {
  console.log(token);
  const response = await axios.get(`${API_URL}user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

// export const loginUser = createAsyncThunk('user/login', async (credentials) => {
//   console.log(credentials);
//   const response = await axios.post(`${API_URL}user/login`, credentials);  // Ici, on suppose que l'endpoint login existe
//   return response.data;
// });
export const loginUser = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  console.log(credentials);
  try {
    const response = await axios.post(`${API_URL}user/login`, credentials);
    
    // Sauvegarde du token dans le localStorage après login
    localStorage.setItem('token', response.data.body.token);
    
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return rejectWithValue('Invalid login credentials');
    }
    return rejectWithValue(error.message);
  }
});

// export const updateUser = createAsyncThunk('user/profile', async (user) => {
//   console.log(user);
//   const response = await axios.put(`${API_URL}profile`, user);
//   return response.data;
// });
export const updateUser = createAsyncThunk('user/profile', async (user, { getState, rejectWithValue }) => {
  console.log(user);
  try {
    const state = getState();
    const token = state.user.token || localStorage.getItem('token'); // Récupérer le token depuis Redux ou localStorage

    const response = await axios.put(`${API_URL}user/profile`, user, {
      headers: {
        Authorization: `Bearer ${token}`,  // Envoyer le token dans les en-têtes
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return rejectWithValue('Unauthorized: Invalid token');
    }
    return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    token: '',
    status: 'idle',
    error: '',
    apiMessage: '',
  },
  reducers: {
    // Action pour mettre à jour l'email
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    // Action pour mettre à jour le password
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    // Action pour réinitialiser le formulaire
    clearForm: (state) => {
      state.email = '';
      state.password = '';
    },
    // clearUsernameForm: (state) => { // Nouveau reducer pour réinitialiser le formulaire d'édition de username
    //   state.firstName = '';
    //   state.lastName = '';
    //   state.userName = '';
    // },
    logout: (state) => {
      // Réinitialise l'état utilisateur
         state.id = null;
         state.email = '';
         state.firstName = '';
         state.lastName = '';
         state.userName = '';
         state.password = ''
         state.token = '';
         state.status = 'idle';
         state.error = '';
         state.apiMessage = '';
         //Supprimer le token de localStorage si tu l'y stockes
         localStorage.removeItem('token');
      },
    // Nouvelle action pour changer d'utilisateur
    newUser: (state, action) => {
        const { userName, firstName, lastName } = action.payload;
        state.userName = userName;
        state.firstName = firstName;
        state.lastName = lastName;
    }
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const {  message, body } = action.payload;
        
       
          state.id = body.id;
          state.email = body.email;
          state.firstName = body.firstName;
          state.lastName = body.lastName;
          state.userName = body.userName;
          state.status = 'succeeded';
        
        state.apiMessage = message;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = "Utilisateur non autorisé";
       
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.body.token;
        state.status = 'succeeded';
        state.password = '';  // Réinitialiser le password après login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = "Login ou mot de passe incorrect";
      })
  },
});

// Export des actions pour les utiliser dans les composants
export const { setEmail, setPassword, clearForm, clearUsernameForm, logout, newUser } = userSlice.actions;
export default userSlice.reducer;

