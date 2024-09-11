// invoicesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL de base de l'API
// const API_URL = 'https://api.example.com/invoices';
const API_URL = 'http://localhost:3001/';

// actions :
// fetchUser qui retourne un utilisateur
// updateUser qui changera le username de l'utilisateur


// Actions asynchrones
export const fetchUser = createAsyncThunk('user/profile', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const loginUser = createAsyncThunk('user/login', async (token) => {
  const response = await axios.post(API_URL, token);
  return response.data;
});

export const signUpUser = createAsyncThunk('user/signup', async (user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
});

export const updateUser = createAsyncThunk('user/profile', async (user) => {
  const response = await axios.put(API_URL, user);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    userName: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { status, message, body } = action.payload;
        if (status === 0) { // Si l'API renvoie un statut de succès
          state.id = body.id;
          state.email = body.email;
          state.status = 'succeeded';
        } else {
          state.status = 'failed';
          state.error = message;
        }
        
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.token = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default userSlice.reducer;
