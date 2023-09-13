import { useContext } from "react"
import { ThemeContext } from "../context/Theme"
import { lightTheme, darkTheme } from "../util/themeStyles"

const useTheme = () => {
    const theme = useContext(ThemeContext);
    const styles = theme.mode === "light" ? lightTheme : darkTheme;
    return styles;
}

export default useTheme;