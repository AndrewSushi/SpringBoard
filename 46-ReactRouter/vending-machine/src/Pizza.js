import React from "react"
import { Link } from "react-router-dom"

const Pizza = () => {
    return (
        <div>
            <h1>Pizza!!!</h1>
            <Link exact to="/">Home</Link>
        </div>
    )
}

export default Pizza