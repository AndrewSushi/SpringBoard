import React, {useState} from 'react'
const useToggleState = (initialState=true) => {
    const [state, setState] = useState(initialState)
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

export default useToggleState


// const [isHappy, setIsHappy] = useState(true)
// const [isDarkMode, setIsDarkMode] = useState(false)
// const toggleMood = () => {
//     setIsHappy(mood => !mood)
// }

// const toggleDarkMode = () => {
//     setIsDarkMode(mode => !mode)
// }