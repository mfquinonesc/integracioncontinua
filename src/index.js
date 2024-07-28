const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const unitRouter = require('./routes/unitRoutes');
const authRouter = require('./routes/authRoutes');
const commentRouter = require('./routes/commentRoutes');
const postRouter = require('./routes/postRoutes');

// Middleware to check if the user is log In 
const middleware = require('./middleware/middleware');

dotenv.config();

//Initialize server configuration
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Initializing enviroment viriables
const PORT = process.env.PORT || 3000;
const DB = process.env.DB || 'mongodb://localhost:27017/DBRoomApp';


//Configuring the database connection
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`Connected to: ${DB}`))
    .catch((error) => console.log(error));


//Configuring the routes 
app.use('/api/v1/user', middleware.authenticate, userRouter);
app.use('/api/v1/unit', middleware.authenticate, unitRouter);
app.use('/api/v1/comment', middleware.authenticate, commentRouter);
app.use('/api/v1/post', middleware.authenticate, postRouter);
app.use('/api/v1/auth', authRouter);


//Configuring the server
app.listen(PORT, () => {
    console.log('listen to port ' + PORT);
});