import { User } from "../../utility/types";

export type SingupUser = Pick<User, 'email' | 'password' | 'name'> & { confirm_password: string };

export const signupObj: SingupUser = {
    email: '',
    password: '',
    confirm_password: '',
    name: ''
}