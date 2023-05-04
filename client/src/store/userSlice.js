import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  email: null,
  username:null,
  id: null,
  isLoggedIn: false,
};

const userSlice =  createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      // Aqui você pode enviar uma solicitação para o servidor para autenticar o usuário e, em seguida, salvar as informações de login no estado do usuário.
        state.email = action.payload.email;
        state.username = action.payload.username;
        state.id = action.payload.id
        state.isLoggedIn = true;
    },
    logout: (state) => {
      // Aqui você pode enviar uma solicitação para o servidor para deslogar o usuário e, em seguida, limpar as informações de login no estado do usuário.
      state.username = null;
      state.email = null;
      state.id = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
