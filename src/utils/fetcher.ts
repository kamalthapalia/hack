import { serverApi } from "./axios";

export const fetchImg = async (serverRoute: string) => {
    try {
        const response = await serverApi.get(serverRoute, {
            responseType: 'blob'
        });
        const url = window.URL.createObjectURL(response.data);
        return url;
    } catch (error) {
        console.error('Error downloading file:', error);
        return '';
    }
}