import { login } from "@/services/auth/firebase-auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface LoginUserProps {
    email: string;
    password: string;
}

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }: LoginUserProps, { rejectWithValue }) => {
        try {
            const authResponse = await login(email, password);
            const idToken = await authResponse?.getIdToken();
            return { accessToken: idToken };
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error);
            }
            return rejectWithValue("An unknown error occurred");
        }
    }
);
