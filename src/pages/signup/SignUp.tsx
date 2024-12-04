import { Link } from "react-router-dom";
import Password from "../../components/Password";
import Label from "../../components/Label";
import { FormEvent } from "react";
import Input from "../../components/Input";

function Signup() {
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div className="py-6 sm:py-8 lg:py-10">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Sign Up</h2>
                <form
                    className="mx-auto max-w-lg rounded-lg border"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                        <div className="form-control">
                            <Label label="Email" />
                            <Input text="email" />
                        </div>

                        <div className="form-control">
                            <Label label="Password" />
                            <Password text="password" />
                        </div>

                        <div className="form-control">
                            <Label label="Confirm Password" />
                            <Password text="confirm_password" />
                        </div>

                        <button className="btn btn-neutral w-full mt-4" type="submit">
                            Sign up
                        </button>
                        <div className="divider my-4"></div>
                    </div>

                    <div className="flex items-center justify-center bg-gray-100 p-4">
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{" "}
                            <Link to="/login">
                                <span className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                                    Login
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
