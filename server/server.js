const express = require('express');

const app = express();

const connectDB = require('./db/db');

const cors = require('cors');

const dotenv = require('dotenv');

const UserRouter = require('./route/UserRouter');

const QuizRouter = require('./route/UserRouter');

dotenv.config();

connectDB();

app.use(express.json());

app.use(cors());

app.use('/user', UserRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    }
);


