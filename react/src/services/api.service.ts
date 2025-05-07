const baseUrl = import.meta.env.VITE_API_URL_DJ;

export const getAll = async <T, >(endpoint: string): Promise<T> => {
    return await fetch(`${baseUrl}${endpoint}`).then(res => res.json());
}