const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("HOMEPAGE")
})

app.get('/dogs', (req, res) => {
    console.log("You asked for da dawgs")
    res.send("<h1>WOOF WOOF</h1>")
})

app.get('/cows', (req, res) => {
    console.log("You asked for da cows")
    res.send("<h1>MOO MOO</h1>")
})

const greetings = {
    en: "hello", 
    fr: "bonjour", 
    sp: "hola", 
    jp: "konnichiwa"
}

app.get('/greet/:language', (req, res) => {
    const lang = req.params.language
    const greeting = greetings[lang]
    if (!greeting) return res.send("INVALID LANGUAGE")
    return res.send(greeting)
})

app.get('/search', (req, res) => {
    console.log(req.query)
    return res.send("SEARCH PAGE")
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})