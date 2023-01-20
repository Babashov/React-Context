import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import Header from "./Header"
import Button from "./Button"

function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
        <Header/>
        <hr/>
        <Button/>
    </div>
  )
}

export default Container