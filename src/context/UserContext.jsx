
import {createContext} from "react";
import useAuth from "../hooks/UseAuth";

const Context = createContext()
function UserProvider({children}) {

    const {authenticated,register, logout, login} = useAuth()
    return <Context.Provider value={{register, authenticated, logout, login}}>{children}</Context.Provider>
    

}

export {Context, UserProvider}