import { createContext,useState } from "react";

export const userContext = createContext()

export const UserProvider = ({children})=>{

    const [user,setUser] = useState(null)

    const providerValues = {
        user,
        setUser,
    }
    
    return <userContext.Provider value={providerValues}>{children}</userContext.Provider>
}
