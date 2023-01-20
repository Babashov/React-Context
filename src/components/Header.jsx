import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Header() {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div>
        <h1>Header</h1>
        <p>Active Theme: {theme}</p>
        <button onClick={(e)=>setTheme(theme==='dark'?'light':'dark')}>
            Change Theme
        </button>

    </div>
  )
}

export default Header