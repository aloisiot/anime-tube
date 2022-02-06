import api from "./axiosInstance"

export async function getAnimes(pageOffset: number): Promise<any>{
    return api.get(`/anime?page[limit]=20&page[offset]=${pageOffset}`)
            .then(resp => resp.data.data)
}

export async function getAnimeById(id: string): Promise<any>{
    return api.get(`/anime/${id}`).then(resp => resp.data.data)
}