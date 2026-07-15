import { createSlice } from "@reduxjs/toolkit";

const preferenceSlice = createSlice({
  name: "preference",
  initialState: {
    language: "en",
    currency: "QAR",
    user: {
      token: null,
      credentials: null,
    },
    isLoggedIn: false,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    login: (state, action) => {
      state.user = {
        isLoggedIn: true,
        token: action.payload.token,
        credentials: action.payload.credentials,
      };
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {
        isLoggedIn: false,
        token: null,
        credentials: null,
      };
      state.isLoggedIn = false;
    },
    setLogging: (state, action) => {
      state.isLogging = action.payload;
    },
  },
});

export const { setLanguage, setCurrency, login, logout, setLogging } = preferenceSlice.actions;
export default preferenceSlice.reducer;