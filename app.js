const PORT = process.env.PORT || 5000;
const express = require("express");

const app = express();
app.use(express.json());

app.listen(PORT, (port) => {
  console.log("Server Listening on PORT:", port);
});

app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});
