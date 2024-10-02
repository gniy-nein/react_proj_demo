import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Nien Ying',
            email: 'nien-ying@hotmail.com'
        })
    }
    // const handleLogout = () => {
    //     setUser(null);
    // }
    return (
        <div>
            <button onClick={handleLogin}>login</button>
            {/* <button onClick={handleLogout}>logout</button> */}
            {/* <div>User name is {user?.name} </div>
            <div>User emial is {user?.email} </div> */}
            <div>User name is {user.name} </div>
            <div>User emial is {user.email} </div>
        </div>
    )
}

