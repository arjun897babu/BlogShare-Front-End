import { Link } from "react-router-dom"
import Password from "../../components/Password"
import Label from "../../components/Label"
import Input from "../../components/Input"

function Login() {
    async function handleSubmit(){

    }

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-10">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>
                    <form
                        className="mx-auto max-w-lg rounded-lg border"
                        onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div className="form-control">
                                <Label label="email" />
                                <Input text="email"/>
                            </div>
                            <div className="form-control">
                                <Label label="password" />
                                <Password text="password" />
                            </div>
                            <button className="btn btn-neutral" type="submit">Log in</button>
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