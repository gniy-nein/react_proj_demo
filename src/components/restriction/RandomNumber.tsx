type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
} 

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type ZeroNumber = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

// type RandomNumberProps = {
//     value: number
//     isPositive?: boolean
//     isNegative?: boolean
//     isZero?: boolean
// }

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
} : RandomNumberProps) => {
    return (
        <div>
            {value}
            {isPositive && <span>Positive</span>}
            {isNegative && <span>Negative</span>}
            {isZero && <span>Zero</span>}
        </div>
    )
}