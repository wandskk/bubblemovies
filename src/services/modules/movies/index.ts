import { api } from "../../index";

export const MoviesServices = {
    getGenres: async () => {
        try {
            const response = await api.get('/genres');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getNowPlayingMovies: async (title?: string) => {
        try {
            const response = await api.get(`/now-playing${title ? '?title=' + title : ''}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
}