import React from "react";

type InputProps = {
    value: string;
    handleChenge: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({value, handleChenge}: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input type="text" value={value} onChange={handleChenge}/>;
}