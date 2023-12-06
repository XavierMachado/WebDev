const express = require('express');
const app = express();
const dotenv = require('dotenv').config
const port = process.env.port || 8000;
const mongoose = require('mongoose')
const cors = require('cors')


app.use(cors())

const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://')
.then(()=>{
    console.log('connected to database')
})
.catch(()=>{
    console.log('connection error')
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=> res.status(200)).json({message:'Here'})

app.use('/api/users', require('./router/pageRoutes'))

app.listen(port, () => console.log('Example app listening on port 3000'))