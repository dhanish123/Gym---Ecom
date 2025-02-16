const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Ensure db.json is in the root directory
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enable CORS
server.use(cors());
server.use(middlewares);
server.use(router);

// Export as a serverless function
module.exports = (req, res) => {
  server(req, res);
};
