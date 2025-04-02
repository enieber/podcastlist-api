const http = require("http");

const server_config = require("./config/server");
const { loggerMiddleware } = require("./middlewares");

const PORT = process.env.PORT || 4000;

const server = http.createServer(server_config);

// global middleware
server.on("request", loggerMiddleware);

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
