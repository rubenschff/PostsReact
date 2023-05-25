
import {createContext} from "react";
import auth from "../hooks/Auth.jsx";

const Context = createContext()
function UserProvider({children}) {

    const {register} = auth()
    return<Context.Provider value={{register}}>{children}</Context.Provider>

}

export {Context, UserProvider}