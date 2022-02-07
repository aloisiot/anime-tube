import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "../reducer/AppReducer";
import { getAnimes, getAnimeById as getById, search } from "../axios";
import { createStore } from 'redux'

type Theme = "" | "dark"

// Propriedades do contexto
interface AppContextProps{
    appStore: any
    theme: Theme
    toggleTheme?: () => void
    findAnimes?: () => void
    findAnimeById?: (id: string) => void
    searchAnimeByKeyWord?: (keyWord: any) => void
}

// Estado inicial do Store
const initialState = {
    currentAnime: null,
    animes: [],
    filteredAnimes: [],
    pageOffset: 0
}

const AppContext = createContext<AppContextProps>({
    appStore: initialState,
    theme: "",

})

// Provedor do contexto
export function AppProvider(props: any){
    const [theme, setTheme] = useState<Theme>("")

    const appStore = createStore(AppReducer, initialState)

    // A cada nova chamada incrementa a lista
    // de animes de acordo com a paginação da API
    async function findAnimes(){
        const state = appStore.getState()
        let offSet = state?.pageOffset ? state.pageOffset : 0
        const animes = await getAnimes(offSet)
        appStore.dispatch({type: "load-animes", payload: animes})
    }

    // Busca baseada em palavra chave
    async function searchAnimeByKeyWord(keyWord: any){
        const animes = await search(keyWord)
        appStore.dispatch({type: "filtered-by-keyword", payload: animes})
    }

    // Busca baseada em ID
    async function findAnimeById(id: string){
        const anime = await getById(id)
        appStore.dispatch({type: "load-current-anime", payload: anime})
    }

    function toggleTheme(){
        const newTheme: Theme =  theme === "" ? "dark" : ""
        localStorage.setItem("tema", newTheme)
        setTheme(newTheme)
    }

    // Atualiza o esta `theme` de acordo com o valor salvo
    // no momento em que a aplicação inicia
    useEffect(() => {
        const theme = localStorage.getItem("tema")
        if(theme === "dark" || theme === ""){
            setTheme(theme)
        }
    }, [])

    return (
        <AppContext.Provider value={{
            appStore,
            theme,
            toggleTheme,
            findAnimes,
            findAnimeById,
            searchAnimeByKeyWord
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
