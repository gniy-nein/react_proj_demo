import React from "react"
import { AuthLogin } from "./AuthLogin"
import { ProfileProps } from "./Profile"


type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component: Component} : PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='nienying props component'/>
    } else {
        return <AuthLogin />
    }
}