import api from "./axiosInstance"

export function getAnimes(pageOffset: number){
    return api.get(`/anime?page[limit]=20&page[offset]=${pageOffset || 0}`)
            .then(resp => resp.data.data)
}