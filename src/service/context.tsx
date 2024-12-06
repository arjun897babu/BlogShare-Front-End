import { createContext, FC, ReactNode, useEffect, useState } from "react"
import { User } from "../utility/types"
 
const userInitObj: Pick<User, 'email' | 'isAuthed' | 'name' | 'theme' | 'token' | 'uId'> = {
    email: '',
    isAuthed: false,
    name: '',
    theme: 'light',
    token: '',
    uId: '',
}

export interface UserContextType {
    userState: typeof userInitObj;
    setUserState: React.Dispatch<React.SetStateAction<typeof userInitObj>>;
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [userState, setUserState] = useState(() => {
        const storedUser = localStorage.getItem('blogShare');
        console.log(storedUser)
        return storedUser ? JSON.parse(storedUser) : userInitObj;
    });
    
    useEffect(() => {
        localStorage.setItem('blogShare', JSON.stringify(userState))
    }, [userState])

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {children}
        </UserContext.Provider>
    )
}