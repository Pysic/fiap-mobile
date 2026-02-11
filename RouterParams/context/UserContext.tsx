import { createContext, ReactNode, useState } from "react";

interface UserContextInterface {
    name: string,
    setName: (name: string) => void
}

export const UserContext = createContext<UserContextInterface | undefined>(undefined)

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [name, setName] = useState('')

    return (
        <UserContext.Provider value={{name, setName}}>
            { children }
        </UserContext.Provider>
    )
}