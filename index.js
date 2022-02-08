const express = require('express');
const ctrl = require('./controller')
const cors = require('cors');

const app = express();
const port = 4004;

app.use(express.json());
app.use(cors())


app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.createHouse);
app.put('/api/houses/:houseToUpdate', ctrl.updateHouse);
app.delete('/api/houses/:id', ctrl.deleteHouse);

app.listen(port, console.log(`server running at ${port}`))