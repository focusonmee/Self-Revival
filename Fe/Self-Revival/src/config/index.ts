export const FIREBASE_CONFIG = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const hosts = {
    API_HOST: import.meta.env.VITE_API_HOST,
    API_V2_HOST: import.meta.env.VITE_API_V2_HOST,
    CORE_HOST: import.meta.env.VITE_CORE_HOST,
    INDEX_HOST: import.meta.env.VITE_INDEX_HOST,
    MEDIA_HOST: import.meta.env.VITE_MEDIA_HOST,
    TTS_HOST: import.meta.env.VITE_TTS_HOST,
    STREAM_HOST: import.meta.env.VITE_STREAM_HOST,
};
const hostByEnv = new Proxy(hosts, {
    get: (target, prop) => {
        return Reflect.get(target, prop);
    },
});
const { API_HOST, CORE_HOST, INDEX_HOST, STREAM_HOST, TTS_HOST, API_V2_HOST, MEDIA_HOST } =
    hostByEnv;
export { API_HOST, CORE_HOST, INDEX_HOST, STREAM_HOST, TTS_HOST, API_V2_HOST, MEDIA_HOST };
export const ENV = import.meta.env.VITE_ENV === "production" ? "prod" : "dev";
