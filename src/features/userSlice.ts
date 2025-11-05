import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token?: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const signupUser = createAsyncThunk<User, User>(
  "user/signup",
  async (
    { firstName, lastName, email, password }: User,
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post("http://localhost:8080/users", {
        firstName,
        lastName,
        email,
        password,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Signup failed");
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      console.log("logging in...");
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const startGoogleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (_, { rejectWithValue }) => {

    try {
      window.location.href = "http://localhost:8080/auth/google";
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const handleGoogleCallback = createAsyncThunk(
  "auth/googleCallback",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:8080/auth/status", {
        withCredentials: true,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Google login failed"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    // Signup
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      signupUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      }
    );
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(handleGoogleCallback.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      handleGoogleCallback.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      }
    );
    builder.addCase(handleGoogleCallback.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
