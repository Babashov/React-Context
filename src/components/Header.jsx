import {useTheme} from "../context/ThemeContext"

function Header() {
    const {theme,setTheme} = useTheme()
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