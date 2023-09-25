const PORT = process.env.PORT || 5000;

const express = require("express");

const app = express();
app.use(express.json());

console.log(PORT);
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});
