type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 2 } = props
    return (
        <div>
            <h2>Welcome to React {props.name} </h2>
            <p>Number Props : {messageCount} </p>
            {
                props.isLoggedIn ? <p>Welcome You're logged in </p> : <p>You're not logged in</p>
            }
        </div>
    )
}