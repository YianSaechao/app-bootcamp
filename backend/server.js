const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // adds a bunch of standard security to server
require('./config/db.js');
const path = require('path');
const PORT = 3000;
const app = express();
// START MIDDLEWARE //
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use(morgan('dev'));
app.use(helmet());
// END MIDDLEWARE //

//create bootcamp
//read bootcamps






// START ROUTES //
app.use(express.static(path.join(__dirname, "../client/dist")));

//frontend wants the states!
app.get("/states", async (req, res) =>{
    try{
        let dbResponse = await State.find();
        res.send(dbResponse)
    } catch(err) {
        res.status(400).send('error getting the states')
    }
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
// END ROUTES //

app.listen(PORT, () => {
    console.log(`Server LIVE on port ${PORT}`);
});