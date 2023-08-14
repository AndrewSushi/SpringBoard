// let url = "https://deckofcardsapi.com/api/deck";
// axios.get(`${url}/new/draw/`)
//     .then(res => {
//         let {value, suit} = res.data.cards[0]
//         console.log(`${value} of ${suit}`)
//     })
//     .catch(err => console.log("REJECTED", err))
    
// let url2 = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
// axios.get(`${url2}`)
//     .then(res => {
//         let deck_id = res.data["deck_id"]
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
//     })
//     .then(res => {
//         let {value, suit} = res.data.cards[0]
//         console.log(`${value} of ${suit}`)
//         let deck_id = res.data["deck_id"]
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
//     })
//     .then(res => {
//         let {value, suit} = res.data.cards[0]
//         console.log(`${value} of ${suit}`)
//     })

let url3 = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
let body = document.querySelector('body')
let button = document.querySelector('button')
let card = document.getElementById('card')

axios.get(url3)
    .then(res => {
        deckId = res.data["deck_id"];
        button.style.display = 'block'
    });

button.addEventListener('click', function() {
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)
        .then(res => {
            const cardSrc = res.data.cards[0].image;
            const angle = Math.random() * 90 - 45;
            const randomX = Math.random() * 40 - 20;
            const randomY = Math.random() * 40 - 20;
      
            const img = document.createElement('img');
            img.src = cardSrc;
            img.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
      
            card.appendChild(img);
      
            if (res.data.remaining === 0) {
            const btn = document.querySelector('button');
            btn.remove();
            }
        })
});
