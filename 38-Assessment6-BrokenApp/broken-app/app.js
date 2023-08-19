const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/', async function(req, res, next) {
    try {
        let results = await Promise.all(req.body.developers.map(async d => {
            return await axios.get(`https://api.github.com/users/${d}`);
        }));

        let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

        return res.send(JSON.stringify(out));
    } catch (err) {
        next(err);
    }
});

app.use(function(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Errors:
/*
    Added app.use(express.json()) for middleware to parse the JSON requests
    
    Added a Promise.all() to make sure that all the requests are awaited

    Added the app.use() middleware error catch instead of just a next(err)
*/