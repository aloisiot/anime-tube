import { createContext, useEffect, useState } from "react";
import { getAnimes } from "../client";

type Theme = "" | "dark"

interface AppContextProps{
    animes: any[]
    theme: Theme
    pageOffset: number
    loadAnimes?: (pageOffset: number) => Promise<void>
    toggleTheme?: () => void
    getAnimeById?: (id : number) => any
}

const AppContext = createContext<AppContextProps>({
    animes: [],
    theme: "",
    pageOffset: 0
})

function getStorage(){
    const storage = sessionStorage.getItem("animes")
    let data
    if(storage){
        data = JSON.parse(storage)
    }
    return data
}

export function AppProvider(props: any){
    const [theme, setTheme] = useState<Theme>("")
    const [animes, setAnimes] = useState<any>([])
    const [pageOffset, setPageOffSet] = useState(0)

    async function loadAnimes(pageOffset: number){
        setPageOffSet(pageOffset)
        const storage = getStorage()
        const animes = await getAnimes(pageOffset)
        const newStorage = storage ? storage.animes.concat(animes) : animes
        const data = {
            animes: newStorage,
            pageOffset
        }
        sessionStorage.setItem("animes", JSON.stringify(data))
        setAnimes(newStorage)
    }

    function getAnimeById(id: number) {
        const storage = getStorage()
        const anime = storage.animes.filter((a: any) => a.id === id)
        return anime
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
            animes,
            theme,
            toggleTheme,
            loadAnimes,
            getAnimeById,
            pageOffset,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext