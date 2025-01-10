import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIN, signUP } from '@/lib/actions/user.action';
import { register, User } from '@/types';

interface UserState {
  userDetails: User | null;
  token: string | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
  userDetails: null,
  token: null,
  isAuthenticated: false,
  status: 'idle',
};


export const loginUser = createAsyncThunk(
  'user/login',
  async ({ username, password }: { username: string; password: string }) => {
    const response = await signIN({ username, password });
    return response;
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData: register) => {
    const response = await signUP(userData);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userDetails = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload?.token;
        state.isAuthenticated = true;
        state.userDetails = action.payload?.user || null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload?.token;
        state.isAuthenticated = true;
        state.userDetails = action.payload?.user || null;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
