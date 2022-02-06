# Model

Camada contendo uma modelo (Classe) para cada entidade da aplicação
---

* ## Anime
    Modelo previsivel usado para representar a abstração dos atributos basicos de um anime;

    ### Atributos
    * **id**: Identificado unico para um anime;
    * **videoId**: Identificador do video (trailer) do anime no youtube;
    * **tittle**: titulo do anime;
    * **urlImage**: Url de uma imagem que representa o anime;
    * **description**: Descrição do anima;

    ### Construtor
    ```ts
    constructor(id: string, videoId: string, title: string , urlImage: string, description: string) {
        this.id = id
        this.videoId = videoId
        this.title = title
        this.urlImage = urlImage
        this.description = description
    }
    ```
