import React, {useState, useEffect} from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count => count + 1)
    }
    useEffect(() => {
        document.title = `Hi${'!'.repeat(count)}`
    })

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Click Me!</button>
        </div>
    )
}

export default Counter