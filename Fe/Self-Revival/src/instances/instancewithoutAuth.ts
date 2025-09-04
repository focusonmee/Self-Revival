import { API_HOST } from "@/config";
import axios from "axios";

const instancewithoutAuth = axios.create({
    baseURL: API_HOST,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instancewithoutAuth;
