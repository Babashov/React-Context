import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

function Button() {

const data = useContext(ThemeContext)

  return (
    <div>Button theme is: {data}</div>
  )
}

export default Button