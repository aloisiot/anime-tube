import useAppData from "../../data/hooks/useAppContext"
import { MoonIcon, SunIcon } from "../icons"

export default function ToggleTheme(){
    const { theme, toggleTheme } = useAppData()

    return (
        <div className={`toggle-theme theme-${theme}`}
            onClick={() => toggleTheme?.()}
        >
            {theme === "dark" ? SunIcon : MoonIcon}
            <div></div>
        </div>
    )
}