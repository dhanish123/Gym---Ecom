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
  const cors = require("cors");
  
  const server = jsonServer.create();
  const router = jsonServer.router("public/Data/db.json"); // Ensure this path exists
  const middlewares = jsonServer.defaults();
  
  // Enable CORS with proper settings
  server.use(cors({ 
      origin: "*", // Change this later for security (e.g., "https://yourdomain.com")
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization"]
  }));
  
  server.use(middlewares);
  server.use(router);
  
  const PORT = process.env.PORT || 5004;
  
  // Ensure it listens on 0.0.0.0 for external access
  server.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ JSON Server is running on port ${PORT}`);
  });
  
  module.exports = server;
  