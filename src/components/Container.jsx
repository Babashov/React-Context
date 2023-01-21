import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import Header from "./Header"
import Button from "./Button"
import Profile from './Profile';


function Container() {
    const {theme} = useContext(ThemeContext)
  return (
    <div className={`App ${theme}`}>
        <Header/>
        <hr/>
        <Button/>
        <hr/>
        <Profile/>
    </div>
  )
}

export default Container