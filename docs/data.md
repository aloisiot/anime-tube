# Camada de dados e consumo de API
Essa camada contem implementações de conexão com api e controle centralizado dos estados da aplicação

## AppContext
    
```bash
src/data/context/AppContext.tsx
```
Componente utilizado para centralizar o controle dos estados da aplicação.

### Métodos
* **findAnimes**: Carrega os animes a partir da API e os armazena no store da aplicação. A cada nova chamada desse método o store será incrementado com mais animes respeitando a paginação da API;
* **findAnimeById**: Carrega um anime de acordo com o id especificado como parâmetro;
* **searchAnimeByKeyWord**: Busca resultados na API de acordo com uma palavra chave passada como parâmetro;
* **toggleTheme**: Alterna o tema da aplicação;
---

## AppReducer
Componente responsavel por manipular o store da aplicação.

```ts
// Estrutura do store da aplicação
const initialState = {
    currentAnime: null,
    animes: [],
    filteredAnimes: [],
    pageOffset: 0
}
```

## useAppData
Hook para tornar disponivel o uso do contexto pela aplicação.
```ts
// O seguinte objeto é retornado para o uso e manipulação do store
{
    appStore: any
    theme: Theme
    toggleTheme?: () => void
    findAnimes?: () => void
    findAnimeById?: (id: string) => void
    searchAnimeByKeyWord?: (keyWord: any) => void
}
```

## axios
Contem a instancia axios e alguns métodos predefinidos para a comunicação com a API
### Métodos
* **getAnimes**: Retorna uma coleção de animes baseada em um offSet de paginação da API;
* **getAnimeById**: Solicita à API um anime com base no ID;
* **search**: Busca por resultados com base em uma palavra chave;

---

* [inicio](../README.md)
* [Components](./components.md)
* [Model](./model.md)
