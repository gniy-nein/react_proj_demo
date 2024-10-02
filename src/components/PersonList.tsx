import { Name } from "../type/Person.type"

type PersonListProps = {
    names: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map( name => {
                return <h4>
                    {name.first} {name.last}
                </h4>
            })}
        </div>
    )
}