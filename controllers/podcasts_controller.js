const podcast_service = require("../services/podcast_sevice");
const response = require("../utils/response");

const get_last = async (req, res) => {
  try {
    const { id } = req.params;

    const podcast = await podcast_service.get_podcast_by_id(id);
    const podcast_item = await podcast_service.get_last(podcast);

    if (!podcast_item) {
      response(res, { status: 404, data: { message: "podcast not found" } });
    } else {
      response(res, { data: podcast_item });
    }
  } catch (error) {
    response(res, { status: 400, data: { message: error.message } });
  }
};

const get_all = async (req, res) => {
  try {
    const podcasts = await podcast_service.get_all();
    response(res, { data: podcasts });
  } catch (error) {
    response(res, { status: 400, data: { message: error.message } });
  }
};

module.exports = {
  get_all,
  get_last,
};
