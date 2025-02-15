  // const jsonServer = require("json-server");
  // const server = jsonServer.create();
  // const router = jsonServer.router("db.json");
  // const middlewares = jsonServer.defaults();

  // // Enable CORS
  // const cors = require("cors");
  // server.use(cors());

  // server.use(middlewares);
  // server.use(router);

  // const PORT = process.env.PORT || 5000;
  // server.listen(PORT, () => {
  //   console.log(`JSON Server is running on port ${PORT}`);
  // });

  // module.exports = server;
  const jsonServer = require("json-server");
  const server = jsonServer.create();
  const router = jsonServer.router("public/Data/db.json"); // Path to your data
  const middlewares = jsonServer.defaults();
  
  server.use(middlewares);
  server.use(router);
  
  const PORT = process.env.PORT || 5004;
  server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
  });
  