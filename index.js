const { Console } = require('console');
const express = require('express');
const { readFile } = require('fs');


const app = express();

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            response.status(500).send('there is an error here')
        }
        response.send(html);
    })
})




app.listen(process.env.PORT || 3000, () => {
    console.log('App available here on http://localhost:3000')
})



