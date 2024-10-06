type GenericListProps<T> = {
    items: T[];
    // onClickProps: (value: T) => void;
    onClickProps: (value: T) => void;
}

// export const GenericList = <T extends string | number>({ items, onClickProps }: GenericListProps<T> ) => {
export const GenericList = <T extends { id: number }>({ 
    items, 
    onClickProps 
}: GenericListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item , index) => (
                <div key={item.id} onClick={() => onClickProps(item)}>
                    {JSON.stringify(item)}
                    {/* {item} */}
                </div>
            ))}
        </div>
    )
}