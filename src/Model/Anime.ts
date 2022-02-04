export default  class Anime {
    title: string
    urlImage: string
    description: string

    constructor(title: string , urlImage: string, description: string){
        this.title = title
        this.urlImage = urlImage
        this.description = description
    }
}