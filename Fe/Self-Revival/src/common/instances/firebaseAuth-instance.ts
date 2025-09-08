import { initializeApp } from "firebase/app";
import { FIREBASE_CONFIGURATION } from "../configs";
import { browserLocalPersistence, getAuth } from "firebase/auth";

export const FIREBASE_CONFIG = {
    apiKey: FIREBASE_CONFIGURATION.apiKey,
    authDomain: FIREBASE_CONFIGURATION.authDomain,
    projectId: FIREBASE_CONFIGURATION.projectId,
    storageBucket: FIREBASE_CONFIGURATION.storageBucket,
    messagingSenderId: FIREBASE_CONFIGURATION.messagingSenderId,
    appId: FIREBASE_CONFIGURATION.appId,
    measurementId: FIREBASE_CONFIGURATION.measurementId,
};

initializeApp(FIREBASE_CONFIG);
const auth = getAuth();
auth.setPersistence(browserLocalPersistence);

export default auth;
