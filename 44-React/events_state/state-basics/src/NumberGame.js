import React, {useState} from "react"
import "./NumberGame.css"

const NumberGame = (props) => {
    const genRandom = () => Math.floor(Math.random() * 10) + 1
    const [guess, setGuess] = useState(genRandom)
    const [target, setTarget] = useState(genRandom)
    const isWinner = target === guess
    return (
        <div className="NumberGame">
            <h1>Target Num: {target}</h1>
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
            {!isWinner && <button onClick={() => setGuess(genRandom())}>Generate Number</button>}
        </div>
    )
}

export default NumberGame