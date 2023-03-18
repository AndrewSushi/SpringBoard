const gifs = $("#gifs")
const submitButton = document.getElementById("submit")

function makeGif(result){
    let resultLength = result.length
    let randomInt = Math.floor(Math.random() * resultLength)
    // console.log(randomInt)
    let col = $("<div>");
    let gif = $("<img>", {
      src: result[randomInt].images.original.url,
    });
    col.append(gif);
    gifs.append(col);
}

submitButton.addEventListener("click", async function(e){
    e.preventDefault()
    let searchInput = $("#search").val()
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    let result = response.data
    console.log(result)
    if(result.data.length){
        makeGif(result.data)
        $("#search").val("")
    }
})

$("#remove").on("click", function(){
    gifs.empty()
})