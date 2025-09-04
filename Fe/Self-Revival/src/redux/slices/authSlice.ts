import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../thunks/authThunk";
export interface AuthState {
    isLoading: boolean;
    error: string | null;
    accessToken: string | null;
    isAppLoading: boolean;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isLoading: true,
    isAppLoading: true,
    error: null,
    accessToken: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAppLoading = false;
                state.isLoading = false;
                state.accessToken = action.payload.accessToken;
                state.error = null;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAppLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
