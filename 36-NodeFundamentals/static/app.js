console.log("Hello World")
let url = "https://swapi.dev/api/planets/1/"
let ourFirstPromise = axios.get(url)
ourFirstPromise.then(data => console.log(data))
ourFirstPromise.catch(err => console.log("REJECTED", err))