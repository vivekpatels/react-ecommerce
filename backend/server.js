const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();


app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.get('/api/getkey', (req, res) =>{
   let key =  process.env.key;
   let secret =  process.env.secret;
    res.send({key, secret})
})

const PORT = process.env.PORT || 5000;
app.listen(4000, () => {
    console.log(`Listening on port ${PORT}`);
})