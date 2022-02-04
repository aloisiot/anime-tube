import api from "./axiosInstance";

export function getAnimes(){
    return api.get("/anime?page[limit]=20&page[offset]=0").then(resp => resp.data.data)
}