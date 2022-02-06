import { createContext, useEffect, useState } from "react";
import { getAnimes, getAnimeById as getById } from "../service";

type Theme = "" | "dark"

interface AppContextProps{
    animes: any[]
    theme: Theme
    pageOffset: number
    currentAnime: any
    setAnimeId?: (id: string) => void
    loadAnimes?: (pageOffset: number) => Promise<void>
    toggleTheme?: () => void
    getAnimeById?: (id : string) => any
}

const AppContext = createContext<AppContextProps>({
    animes: [],
    theme: "",
    pageOffset: 0,
    currentAnime: null
})

function getStore(){
    const store = sessionStorage.getItem("animes")
    let data
    if(store){
        data = JSON.parse(store)
    }
    return data
}

export function AppProvider(props: any){
    const [theme, setTheme] = useState<Theme>("")
    const [animes, setAnimes] = useState<any>([])
    const [pageOffset, setPageOffSet] = useState(0)
    const [currentAnime, setCurrentAnime] = useState<any>(null)
    const [idAnime, setAnimeId] = useState<string>()

    async function loadAnimes(pageOffset: number){
        setPageOffSet(pageOffset)
        if(pageOffset === 0) {
            sessionStorage.removeItem("animes")
        }
        
        const store = getStore()
        const animes = await getAnimes(pageOffset)
        const newStore = store ? store.animes.concat(animes) : animes
        const data = {
            animes: newStore,
            pageOffset
        }
        sessionStorage.setItem("animes", JSON.stringify(data))
        setAnimes(newStore)
    }

    async function getAnimeById(id: string) {
        const store = getStore()
        const data = store.animes.filter((a: any) => a.id === id)
        const anime = data.length > 0 ? data[0] : null
        let result
        if(anime) {
            result = anime
        }
        setCurrentAnime(result)
    }

    function toggleTheme(){
        const newTheme: Theme =  theme === "" ? "dark" : ""
        localStorage.setItem("tema", newTheme)
        setTheme(newTheme)
    }

    useEffect(() => {
        if(idAnime)
            getAnimeById(idAnime)
    }, [idAnime])

    useEffect(() => {
        const theme = localStorage.getItem("tema")
        if(theme === "dark" || theme === ""){
            setTheme(theme)
        }
    }, [])

    return (
        <AppContext.Provider value={{
            animes,
            theme,
            toggleTheme,
            loadAnimes,
            getAnimeById,
            pageOffset,
            currentAnime,
            setAnimeId
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext