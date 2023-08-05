// let url = "https://swapi.dev/api/planets/1/"
// axios.get(url)
//     .then(res => {
//         axios.get(res.data.residents[0])
//             .then(res => {
//                 console.log(res)
//             })
//             .catch(err => {
//                 console.log("ERROR")
//             })
//     })
//     .catch(err => console.log("REJECTED", err))

let url = "https://swapi.dev/api/planets/1/"
axios.get(url)
    .then(res => {
        console.log("First Request")
        console.log(res.data)
        return axios.get(res.data.residents[0])
    })
    .then(res => {
        console.log("Second Request")
        console.log(res.data)
        return axios.get(res.data.films[0])
    })
    .then(res => {
        console.log("Third Request")
        console.log(res.data)
    })
    .catch(err => console.log("REJECTED", err))