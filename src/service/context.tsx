import { createContext, FC, ReactNode, useEffect, useState } from "react"
import { IToast, User } from "../utility/types"
import { ResponseStatus } from "../utility/enum";
export const {
  VITE_APP
} = import.meta.env

export const userInitObj: Pick<User, 'email' | 'isAuthed' | 'name' | 'token' | 'uId'> = {
  email: '',
  isAuthed: false,
  name: '',
  token: '',
  uId: '',
}

export interface UserContextType {
  userState: typeof userInitObj;
  setUserState: React.Dispatch<React.SetStateAction<typeof userInitObj>>;
  showToast: (status: ResponseStatus, message: string) => void
  toast: IToast | null
}


export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [toast, setToast] = useState<IToast | null>(null);

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

  const showToast = (status: ResponseStatus, message: string) => {
    setToast({ status, message });

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };


  useEffect(() => {
    localStorage.setItem(VITE_APP, JSON.stringify(userState))
  }, [userState])

  return (
    <UserContext.Provider value={{ userState, setUserState, showToast, toast }}>
      {children}
    </UserContext.Provider>
  )
}