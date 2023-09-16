import React, {useState} from "react"

const SimpleCounter = () => {
    const [num, setNum] = useState(0)

    const clickNum = () => {
        setNum(num + 1)
    }

    return (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={clickNum}>Up</button>
        </div>
    )
}

export default SimpleCounter