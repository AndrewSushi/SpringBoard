import React, {useState, useEffect, useRef} from "react";
import axios from "axios"

const API = "https://deckofcardsapi.com/api/deck"

const Deck = () => {
    const [deck, setDeck] = useState(null)

    useEffect(() => {
        async function getData(){
            let res = await axios.get(`${API}/new/shuffle`)
            setDeck(res.data)
        }
        getData()
    }, [setDeck])

    const drawCard = () => {
        
    }

    return (
        <div>
            <button onClick={drawCard}>Draw a card</button>
        </div>
    )
}

export default Deck;