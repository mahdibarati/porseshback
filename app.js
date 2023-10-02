const config = require("./db.js");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const express = require("express");
const businessRoute = require("./business.route");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());

console.log(PORT);
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/business", businessRoute);

app.post("/contact", function (req, res) {
  const contact = new Contact({
    email: req.body.email,
    query: req.body.query,
  });
  contact.save(function (err) {
    if (err) {
      res.redirect("/error");
    } else {
      res.redirect("/thank-you");
    }
  });
});

app.get("/status", (request, response) => {
  const status = {
    Status: "Running",
  };

  response.send(status);
});
