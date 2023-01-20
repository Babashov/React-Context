import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Button() {

const {theme,setTheme} = useContext(ThemeContext)

  return (
    <div>
        Active theme is: {theme}
        <br/>
        <button onClick={(e)=>setTheme(theme==='dark'?'light': 'dark')}>Change Theme</button>
    </div>
  )
}

export default Button