import api from "./axiosInstance"

export function getAnimes(pageOffset: number){
    return api.get(`/anime?page[limit]=20&page[offset]=${pageOffset}`)
            .then(resp => resp.data.data)
}

export function getAnimeById(id: string){
    return api.get(`/anime/${id}`).then(resp => resp.data.data)
}