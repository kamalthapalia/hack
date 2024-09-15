import axios from "axios";

export const serverApi = axios.create({
	baseURL: import.meta.env.VITE_BACKEND_URL!,
	// timeout: 1000,
	withCredentials: true,
});
