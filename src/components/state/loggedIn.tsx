import { useState } from "react"

export const IsLoggedIn = () => {
    const [IsLoggedin, SetIsLoggedin] = useState(false)
    const handleLogin = () => {
        SetIsLoggedin(true)
    }
    const handleLogout = () => {
        SetIsLoggedin(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>User is {IsLoggedin ? 'Logged in' : 'Logged out'} </div>
        </div>
    )
}

