import { auth } from "@/instances/firebase";
import { signInWithEmailAndPassword, User } from "firebase/auth";

export const login = async (email: string, password: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};
