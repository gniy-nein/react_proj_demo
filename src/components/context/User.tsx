import { useContext } from "react"
import { UserContext } from "./UserContext"

export const UserContextChildren = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        userContext?.setUser({
            name: "Nien Ying", 
            email: "nien@123.com"
        })
    }
    const handleLogout = () => { 
        userContext?.setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User Name is { userContext?.user?.name}</div>
            <div>User Email is {userContext?.user?.email}</div>
        </div>
    )
}