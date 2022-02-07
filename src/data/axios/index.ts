import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kitsu.io/api/edge/',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    },
});

export function getAnimes(pageOffset: number){
    return instance.get(`/anime?page[limit]=20&page[offset]=${pageOffset}`)
            .then(resp => resp.data.data)
}

export function getAnimeById(id: string){
    return instance
            .get(`/anime?filter[id]=${id}`).then(resp => resp.data.data)
}

export function search(keyWord: string){
    return instance.get(`/anime/?filter[text]=${keyWord}`)
            .then(resp => resp.data.data)
}