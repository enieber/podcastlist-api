const podcasts_controller = require("../controllers/podcasts_controller");

const routes = {
  "/podcasts": {
    GET: podcasts_controller.get_all,
  },
  "/podcasts/:id/last": {
    GET: podcasts_controller.get_last,
  },
};

module.exports = routes;
