const express = require('express')
const app = express()
const cors = require('cors');
const port = 3005

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => res.send('Hi there!'));

/// Search Endpoints ////
const { searchRouter } = require('../routers')

app.use('/activities', searchRouter)

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))