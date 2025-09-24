const baseUrlJP = import.meta.env.VITE_API_URL_JP

export const getAll = async <T>(endpoint: string)=> {
    return await fetch(`${baseUrlJP}/${endpoint}`).then(res => res.json()) as T
}