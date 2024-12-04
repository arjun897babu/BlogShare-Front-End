import { Link } from "react-router-dom"
import Password from "../../components/Password"
import Label from "../../components/Label"
import Input from "../../components/Input"
import { LoginObj } from "./types"
import { useZodForm } from "../../custom hook/UseZodForm"
import { loginSchema, logniFormSchemaType } from "../../utility/zodSchem"
import ErrorDiv from "../../components/ErrorDiv"

function Login() {
    const { register, handleSubmit, formState: { errors } } = useZodForm(loginSchema, LoginObj)
    function onSubmit(data: logniFormSchemaType) {
        console.log('login data :', data)
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