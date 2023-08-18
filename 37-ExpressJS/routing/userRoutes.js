const express = require('express')
const router = new express.Router()

const USERS = [{username: "AndrewSushi"}]

router.get('/', (req, res) => {
    res.json({users:USERS})
})

module.exports = router