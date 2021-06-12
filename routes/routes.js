const publicRoutes = require('./publicRoutes');

module.exports = (app, express) => {
  app.use('/v1', publicRoutes(app, express));
};