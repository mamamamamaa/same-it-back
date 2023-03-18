const app = require("./app");

const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
);
