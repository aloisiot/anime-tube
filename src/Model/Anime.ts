export default  class Anime {
    videoId: string
    title: string
    urlImage: string
    description: string

    constructor(videoId: string, title: string , urlImage: string, description: string){
        this.videoId = videoId
        this.title = title
        this.urlImage = urlImage
        this.description = description
    }
}