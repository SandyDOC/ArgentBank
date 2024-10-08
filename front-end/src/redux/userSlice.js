import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL de base de l'API
const API_URL = 'http://localhost:3001/api/v1/';

// Actions asynchrones
// Récupèration du profil utilisateur à partir de l'API
export const fetchUser = createAsyncThunk('user/profile', async (token) => {
  const response = await axios.get(`${API_URL}user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});
// Envoie des identifiants utilisateur (email et mot de passe) à l'API pour tenter une connexion
export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  // console.log(credentials);
  const response = await axios.post(`${API_URL}user/login`, credentials);  
  return response.data;
});
// Mise à jour des informations de l'utilisateur
export const updateUser = createAsyncThunk('user/profile', async (user, { getState, rejectWithValue }) => {
  // console.log(user);
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

// Gestion des états utilisateur
const userSlice = createSlice({
  name: 'user',
  // État initial du slice "User"
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
  // Actions pour mettre à jour l'état local du slice
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
    logout: (state) => {
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
      const { userName } = action.payload;
      state.userName = userName;
    }
  },
  // Gestion des actions asynchrones
  extraReducers: (builder) => {
    builder
    // Met à jour l'état à loading lorsque la requête pour récupérer l'utilisateur commence
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      // Lorsque la requête réussit, met à jour les informations utilisateur dans le state avec les données de la réponse API
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { message, body } = action.payload;
        state.id = body.id;
        state.email = body.email;
        state.firstName = body.firstName;
        state.lastName = body.lastName;
        state.userName = body.userName;
        state.status = 'succeeded';
        state.apiMessage = message;
      })
      // Si la requête échoue, met à jour l'état en failed et affiche une erreu
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = "Utilisateur non autorisé";
      })
      // Lorsque la connexion réussit, met à jour le token utilisateur dans le state
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.body.token;
        state.status = 'succeeded';
        state.password = '';  
      })
      //  Si la connexion échoue, met à jour l'état en failed et affiche une erreur.
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = "Login ou mot de passe incorrect";
      })
  },
});

// Export des actions pour les utiliser dans les composants
export const { setEmail, setPassword, clearForm, logout, newUser } = userSlice.actions;
export default userSlice.reducer;

