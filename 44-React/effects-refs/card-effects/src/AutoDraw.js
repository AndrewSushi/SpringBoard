import React, {useState, useEffect, useRef} from "react";
import axios from "axios"
import Card from "./Card.js"
import "./Deck.css"

const API = "https://deckofcardsapi.com/api/deck"


const AutoDraw = () => {
    const [deck, setDeck] = useState(null)
    const [cards, setCards] = useState([])
    const [autoDraw, setAutoDraw] = useState(false)
    const timerRef = useRef()
    const alertShownRef = useRef(false)

    useEffect(() => {
        async function shuffleDeck(){
            const res = await axios.get(`${API}/new/shuffle`)
            setDeck(res.data)
        }
        shuffleDeck()
    }, [])


    async function drawCard(){
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
                        if (!alertShownRef.current) {
                            alert("No more cards to draw.");
                            alertShownRef.current = true;
                        }
                        setAutoDraw(false); // Turn off auto-draw if no more cards
                    } else {
                        alert("An error occurred while drawing a card.");
                    }
                }
            } catch (err) {
                setAutoDraw(false); // Turn off auto-draw if no more cards
                alert("An error occurred while drawing a card.");
            }
        }
    };
    
    const toggleAutoDraw = () => {
        setAutoDraw(!autoDraw)
    }

    useEffect(() => {
        const autoDrawCard = async () => {
            if(autoDraw && deck && deck.remaining){
                await drawCard()
            }else{
                setAutoDraw(false)
            }
        }

        if(autoDraw && !timerRef.current){
            timerRef.current = setInterval(autoDrawCard, 1000)
        }
        
        return () => {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
    }, [autoDraw, deck])

    const cardDeck = cards.map(c => (
        <Card key={c.id} name={c.name} image={c.image}/>
    ))
    
    return (
        <div className="Deck">
          <button onClick={drawCard}>Draw a card</button>
          <button onClick={toggleAutoDraw}>Toggle auto draw</button>
          <div className="Deck-cardarea">
            {cardDeck}
          </div>
        </div>
      );
}

export default AutoDraw;