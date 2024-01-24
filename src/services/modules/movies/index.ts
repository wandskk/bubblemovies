import { api } from "../../index";

export const MoviesServices = {
    getCategories: async () => {
        const response = await api.get('/categories');
        return response.data;
    }
}