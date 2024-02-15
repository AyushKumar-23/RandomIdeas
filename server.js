const path = require('path');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const connectDb = require('./config/db');
const port = process.env.PORT || 5000;

connectDb();

const app = express();

//STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors middleware
app.use(
  cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

const ideasRouter = require('./Routers/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`LISTENING TO PORT ${port}`));
