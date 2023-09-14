import axios from "axios";

function Blackjack(){
    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    let deckId

    axios.get(url)
        .then(res => {
            deckId = res.data["deck_id"];
            console.log(deckId)
        });

    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
        .then(res => {
            console.log(res.data)
        })

}

export default Blackjack