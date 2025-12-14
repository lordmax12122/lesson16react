import { useState } from "react"
import Button from "./Button"
const Counter = () => {
    const [value, setValue] = useState(0);

    const addValue = () => {
        setValue(value + 1)
    }

    const minusValue = () => {
        setValue(value - 1)
    }
    return (  
        <>
            <h1>Counter</h1>
            <p>{value}</p>
            <Button label="+" onClick={addValue} />
            <Button label="-" onClick={minusValue} />
        </>
    )
}

export default Counter