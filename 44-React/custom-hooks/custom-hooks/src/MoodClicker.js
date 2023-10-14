import React, {useState} from "react"
import useToggleState from "./hooks/useToggleState"
import "./MoodClicker.css"

const MoodClicker = () => {
    const [isHappy, toggleIsHappy] = useToggleState(true)
    const [isDarkMode, toggleDarkMode] = useToggleState(false)
    return (
        <div className={isDarkMode ? 'Clicker-dark' : 'Clicker-light'}>
            <h1>{isHappy ? "Happy" : "Sad"}</h1>
            <button onClick={toggleIsHappy}>Change Mood</button>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )
}

export default MoodClicker