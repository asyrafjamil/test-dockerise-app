const healthCheckController = require('../src/controllers/healthCheckController');

module.exports = (_, express) => {
  const router = new express.Router({strict: true});

  router.get('/', healthCheckController);

  return router;
};