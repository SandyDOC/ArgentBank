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
export const fetchInvoices = createAsyncThunk(API_URL+'invoices/fetchInvoices', async () => {
  const response = await axios.get(fetchInvoices);
  return response.data;
});

export const addInvoice = createAsyncThunk('invoices/addInvoice', async (invoice) => {
  const response = await axios.post(API_URL, invoice);
  return response.data;
});

export const updateInvoice = createAsyncThunk('invoices/updateInvoice', async (invoice) => {
  const response = await axios.put(`${API_URL}/${invoice.id}`, invoice);
  return response.data;
});

export const removeInvoice = createAsyncThunk('invoices/removeInvoice', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addInvoice.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateInvoice.fulfilled, (state, action) => {
        const index = state.items.findIndex(invoice => invoice.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(removeInvoice.fulfilled, (state, action) => {
        state.items = state.items.filter(invoice => invoice.id !== action.payload);
      });
  },
});

export default invoicesSlice.reducer;
