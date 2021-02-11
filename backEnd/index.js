const express = require('express');
const bodyparse = require('Body-parser');
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use(bodyparse.json());

app.use('/', indexRouter);
app.use('/users', userRouter );
app.use('/login', authRouter)

app.listen(process.env.port || 3000);