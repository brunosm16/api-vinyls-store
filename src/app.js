const app = require('./setup/initMiddlewares');

const vinylsRouter = require('./routes/vinylsRouter');

const vinylsURL = '/api/v1/vinyls';

app.use(vinylsURL, vinylsRouter);

module.exports = app;
