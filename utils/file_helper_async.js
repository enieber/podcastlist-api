const fs = require("fs/promises");

const read_data_async = async (filePath) => {
  const rawJson = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(rawJson) || [];
  return data.map((item, index) => {
    return {
      ...item,
      id: index,
    };
  });
};

module.exports = { read_data_async };
