import { LoginPayload } from './../../../interfaces/Auth.interface';
import { ReduxLoginInitState } from '../../../interfaces/Auth.interface';
import { UserData } from '../../../interfaces/User.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ReduxLoginInitState = {
  user: undefined,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => {
      state.isFetching = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.user = undefined;
      state.error = false;
    },
    logoutFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  logoutSuccess,
  logoutFailure,
} = userSlice.actions;
export default userSlice.reducer;
