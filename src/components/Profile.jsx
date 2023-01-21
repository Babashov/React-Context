import { useState } from "react"
import { useUser } from "../context/UserContext"

function Profile() {
    const {user,setUser} = useUser()
    const [loading,setLoading] = useState(false)

    const handleLogin = (e)=>{
        setLoading(true)
        setTimeout(()=>{
            setUser({id:1,login:'babashov',bio:'lorem ipsum'})
            setLoading(false)
        },1500)
    }

    const handleLogOut = (e)=>{
        setLoading(true)
        setTimeout(()=>{
            setUser(null)
            setLoading(false)
        },2000)
    }

  return (
    <div>
        {!user && (
            <button onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>
        )}

        {user && (
            <button onClick={handleLogOut}>{loading ? 'loading...' : 'Logout'}</button>
        )}
        
        <br/>
        {JSON.stringify(user)}
    </div>
  )
}

export default Profile