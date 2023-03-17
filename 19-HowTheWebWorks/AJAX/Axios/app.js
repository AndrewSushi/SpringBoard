async function getData(){
    const response = await axios.get("https://swapi.dev/api/planets/")
    const {next, results} = response.data
    for(let planet of results){
        console.log(planet.name)
    }
    const response2 = await axios.get(next)
    for(let planet of response2.data.results){
        console.log(planet.name)
    }
}

function openUrl(url){
    window.open(url, '_blank')
}

waifus = []

const button = document.querySelector("button");
button.addEventListener("click", function(event){
    event.preventDefault()
    getData()
    // button.remove()
})

