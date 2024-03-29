import React, {useState, useEffect, useRef} from "react";
import axios from "axios"
import Card from "./Card.js"
import "./Deck.css"

const API = "https://deckofcardsapi.com/api/deck"


const Deck = () => {
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function shuffleDeck(){
            const res = await axios.get(`${API}/new/shuffle`)
            setDeck(res.data)
        }
        shuffleDeck()
    }, [setDeck])

    const drawCard = async () => {
        if (deck && deck.remaining) {
            let { deck_id } = deck;
            try {
                const res = await axios.get(`${API}/${deck_id}/draw`);
                if (res.data.success) {
                    const card = res.data.cards[0];
                    setCards((d) => [
                        ...d,
                        {
                        id: card.code,
                        name: card.suit + " " + card.value,
                        image: card.image,
                        },
                    ]);
                } else {
                    if (res.data.error.code === "NO_CARDS_REMAIN") {
                        alert("No more cards to draw.");
                    } else {
                        alert("An error occurred while drawing a card.");
                    }
                }
            } catch (err) {
                alert("An error occurred while drawing a card.");
            }
        }
    };
      

    const cardDeck = cards.map(c => (
        <Card key={c.id} name={c.name} image={c.image}/>
    ))
    
    // const displayCards = () => {
    //     console.log(cards)
    // }

    return (
        <div className="Deck">
          <button onClick={drawCard}>Draw a card</button>
          {/* <button onClick={displayCards}>Display</button> */}
          <div className="Deck-cardarea">
            {cardDeck}
          </div>
        </div>
      );
}

export default Deck;