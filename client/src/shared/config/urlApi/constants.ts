const isDev = import.meta.env.DEV;

export const API_URL = isDev ? "/api" : import.meta.env.VITE_API_URL;
