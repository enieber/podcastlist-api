const https = require("https");
const { read_data_async } = require("../utils/file_helper_async");
const db = "./db/podcasts.json";

const get_all = () => {
  return read_data_async(db);
};

const get_podcast_by_id = async (id) => {
  const podcasts = await get_all();

  return podcasts.find((podcast) => podcast.id === Number(id));
};

const get_last = async (podcast_item) => {
  if (podcast_item.rss_link) {
    return new Promise((resolve) => {
      let data = "";
      https.get(podcast_item.rss_link, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve(data);
        });
      });
    });
  } else {
    return false;
  }
};

module.exports = { get_podcast_by_id, get_all, get_last };
