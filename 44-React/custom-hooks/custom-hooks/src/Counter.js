import React from "react"
import useLocalStorageState from "./hooks/useLocalStorageState"

const Counter = () => {
    const [count, setCount] = useLocalStorageState('count', 0)

    const addToCount = () => {
        setCount(count => count + 1)
    }

    const restartCount = () => {
        setCount(0)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={addToCount}>Add</button>
            <button onClick={restartCount}>Restart</button>
        </div>
    )
}

export default Counter