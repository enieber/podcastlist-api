const response = require("../utils/response");
const podcast_routers = require("./podcasts");

const routes = {
  ...podcast_routers,
  notFound: (_req, res) => {
    response(res, {
      status: 404,
      data: { message: "requested resource not found!" },
    });
  },
};

module.exports = routes;
