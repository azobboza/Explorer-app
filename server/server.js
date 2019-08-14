const express = require('express');
const winston = require('winston');
const error = require('./middleware/error');
const { getData } = require('./services/dataService');
const { getDataFromEthAndSaveToDb, subscribe } = require('./services/ethereumService'); 

const app = express();
winston.add(new winston.transports.File({ filename: 'logfile.log' }));
app.use(express.json());

app.get('/api/data/:address', async (req, res, next) => {
  try {
    const address = req.params.address;
    await getDataFromEthAndSaveToDb(address);
    const data = await getData(address);
    await subscribe(next);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(data); 
  } catch (err) {
    next(err)
  }
});

app.use(error);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on the port ${port}...`);
});
