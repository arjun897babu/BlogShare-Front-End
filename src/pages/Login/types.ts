import { User } from "../../utility/types";

export type LoginUser = Pick<User, "email" | "password">;

export const LoginObj: LoginUser = {
    email:'',
    password:''
};
