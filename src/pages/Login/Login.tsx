import { Link } from "react-router-dom"
import Password from "../../components/Password"
import Label from "../../components/Label"
import Input from "../../components/Input"
import { ILogin, LoginObj } from "./types"
import { useZodForm } from "../../custom hook/UseZodForm"
import { loginSchema, logniFormSchemaType } from "../../utility/zodSchem"
import ErrorDiv from "../../components/ErrorDiv"
import useErrorObject from "../../custom hook/useErrorObject"
import serverInstance, { endPoint } from "../../service/api"
import { ResponseStatus } from "../../utility/enum"
import { useUser } from "../../custom hook/useUser"

function Login() {
    const { setUserState } = useUser()
    const { register, handleSubmit, setError, formState: { errors } } = useZodForm(loginSchema, LoginObj)

    function changeErrorCB(key: string, message: string) {
        setError(key as keyof logniFormSchemaType, { message })
    }

    const changeError = useErrorObject(changeErrorCB)

    async function onSubmit(data: logniFormSchemaType) {
        try {
            const response = (await serverInstance.post<ILogin>(endPoint.login, data)).data
            if (response.status === ResponseStatus.SUCCESS) {
                const { user, token } = response.data
                setUserState((prev) => ({
                    ...prev,
                    email: user.email,
                    name: user.name,
                    token: token,
                    uId: user.uId,
                    isAuthed: true
                }))
            }
        } catch (error) {
            changeError(error)
        }
    }

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-10">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>
                    <form
                        className="mx-auto max-w-lg rounded-lg border"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div className="form-control relative ">
                                <Label label="email" />
                                <Input text="email" {...register('email')} />
                                {errors && errors.email?.message && <ErrorDiv message={errors.email.message} />}
                            </div>
                            <div className="form-control relative ">
                                <Label label="password" />
                                <Password text="password" {...register('password')} />
                                {errors && errors.password?.message && <ErrorDiv message={errors.password.message} />}
                            </div>
                            <button className="btn btn-neutral mt-5" type="submit">Log in</button>
                            {/* <progress className="progress "></progress> */}
                            <div className="divider"></div>
                        </div>

                        <div className="flex items-center justify-center bg-gray-100 p-4">
                            <p className="text-center text-sm text-gray-500">
                                Don't have an account?
                                <Link to={'/signup'}>
                                    <span className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                                        Register
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Login