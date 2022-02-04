import { createContext, useEffect, useState } from "react";

type Theme = "" | "dark"

interface AppContextProps{
    theme: Theme
    children?: any
    toggleTheme?: () => void
}

const AppContext = createContext<AppContextProps>({
    theme: "",
    children: null
})

export function AppProvider(props: AppContextProps){
    const [theme, setTheme] = useState<Theme>("")

    function toggleTheme(){
        const newTheme: Theme =  theme === "" ? "dark" : ""
        localStorage.setItem("tema", newTheme)
        setTheme(newTheme)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem("tema")
        if(temaSalvo === "dark" || temaSalvo === ""){
            setTheme(temaSalvo)
        }
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext