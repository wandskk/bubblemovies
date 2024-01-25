import { api } from "../../index";

export const MoviesServices = {
    getAllGenres: async () => {
        try {
            const response = await api.get('/genres');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getNowPlayingMovies: async () => {
        try {
            const response = await api.get('/now-playing');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getPopularMovies: async () => {
        try {
            const response = await api.get('/popular');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getTopRatedMovies: async () => {
        try {
            const response = await api.get('/top-rated');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    getUpcomingMovies: async () => {
        try {
            const response = await api.get('/upcoming');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
}