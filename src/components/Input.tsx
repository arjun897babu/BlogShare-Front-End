import React from "react"

type InputProps = {
    text: 'text' | 'email'
}

const Input: React.FC<InputProps> = ({ text }) => {
    return <input name={text} type={text} className="input focus:outline-none bg-gray-50 border border-gray-200  " />
}


export default Input