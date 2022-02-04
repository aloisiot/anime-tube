import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kitsu.io/api/edge/',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
    },
    // transformResponse: [(resp) =>  resp.data]
});

export default instance