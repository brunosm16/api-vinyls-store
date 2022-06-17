const app = require('./setup/initMiddlewares');

const vinylsRouter = require('./routes/vinylsRouter');
const usersRouter = require('./routes/usersRouter');

const vinylsURL = '/api/v1/vinyls';
const usersURL = '/api/v1/users';

app.use(vinylsURL, vinylsRouter);
app.use(usersURL, usersRouter);

module.exports = app;
