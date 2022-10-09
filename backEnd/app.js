const express = require('express')
const mongoose = require('mongoose')
const car = require('./routes/car')
const user = require('./routes/user')

const app = express()
const port = 4000

const url = 'mongodb://127.0.0.1/vehicleInfosaver'
mongoose.connect(url,{useNewUrlParser: true});

const con = mongoose.connection;

con.on('open', () => {
    console.log("MongoDB Connected");
})

app.use(express.json());
app.use('/cars', car)
app.use('/users', user)


app.listen(port, () => {
    console.log(`app starting on ${port}`);
})