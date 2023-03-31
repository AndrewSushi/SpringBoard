const firstReq = new XMLHttpRequest()

firstReq.addEventListener('load', function(){
    const data = JSON.parse(this.responseText);
})

firstReq.addEventListener('error', () => {
    console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://gelbooru.com/index.php?page=dapi&s=post&q=index&tags=rating:explicit%20nipples&limit=5');
firstReq.send();
console.log("SENDING REQUEST......")