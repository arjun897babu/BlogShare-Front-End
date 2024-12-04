type PasswordProps = {
    text: 'password' | 'confirm_password'
}

const Password: React.FC<PasswordProps> = ({ text }) => {
    return (
        <input name={text} className="input focus:outline-none bg-gray-50 border border-gray-200 " />
    )
}

export default Password