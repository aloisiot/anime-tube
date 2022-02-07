import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer, { initialState } from "../reducer/AppReducer";
import { getAnimes, getAnimeById as getById } from "../axios";
import { createStore } from 'redux'

type Theme = "" | "dark"

interface AppContextProps{
    appStore: any
    theme: Theme
    toggleTheme?: () => void
    findAnimes?: () => void
    findAnimeById?: (id: string) => void
}

const initialState: initialState = {
    currentAnime: null,
    animes: [],
    pageOffset: 0
}

const AppContext = createContext<AppContextProps>({
    appStore: initialState,
    theme: "",

})

export function AppProvider(props: any){
    const [theme, setTheme] = useState<Theme>("")

    const appStore = createStore(AppReducer, initialState)

    async function findAnimes(){
        const state = appStore.getState()
        let offSet = state?.pageOffset ? state.pageOffset : 0
        const animes = await getAnimes(offSet)
        appStore.dispatch({type: "load-animes", payload: animes})
    }

    async function findAnimeById(id: string){
        const state = appStore.getState()
        const anime = await getById(id)
        appStore.dispatch({type: "load-current-anime", payload: anime})
    }

    function toggleTheme(){
        const newTheme: Theme =  theme === "" ? "dark" : ""
        localStorage.setItem("tema", newTheme)
        setTheme(newTheme)
    }

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
            findAnimeById
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
