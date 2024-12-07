import { createContext, FC, ReactNode, useEffect, useState } from "react"
import { User } from "../utility/types"
export const {
    VITE_APP
} = import.meta.env

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
        const storedUser = localStorage.getItem(VITE_APP);
        if (storedUser) {
          try {
            return JSON.parse(storedUser);
          } catch (error) {
            return userInitObj;
          }
        }
        return userInitObj;
      });

    useEffect(() => {
        localStorage.setItem(VITE_APP, JSON.stringify(userState))
    }, [userState])

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {children}
        </UserContext.Provider>
    )
}