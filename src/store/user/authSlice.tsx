import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../../api/user/index";

type authState = {
  isLogged: boolean;
  user: {
    token: string;
    user: any;
  };
};

type UserType = { user: any; token: string };

export const signin = createAsyncThunk("auth/signin", async (user: any) => {
  const { data } = await login(user);
  return data;
});

const initialState: authState = {
  isLogged: false,
  user: {
    token: "",
    user: {},
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      signin.fulfilled,
      (state, action: PayloadAction<UserType>) => {
        // state.user = action.payload;
        state.isLogged = false;
        state.user.token = action.payload.token;
        state.user.user = action.payload.user;
      }
    );
  },
});

export default authSlice.reducer;
