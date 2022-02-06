export default  class Anime {
    id: string
    videoId: string
    title: string
    urlImage: string
    description: string

    constructor(id: string, videoId: string, title: string , urlImage: string, description: string){
        this.id = id
        this.videoId = videoId
        this.title = title
        this.urlImage = urlImage
        this.description = description
    }
}