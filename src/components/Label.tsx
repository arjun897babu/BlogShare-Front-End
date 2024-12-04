import React from "react"

type LableProps = {
    label: string
}

const Label: React.FC<LableProps> = ({ label }) => {
    return <label htmlFor="email" className="label capitalize">{label}</label>
}
export default Label