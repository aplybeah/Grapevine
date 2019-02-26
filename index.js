const express = require("express");
const app = express();
const parser = require("body-parser");

app.set("view engine", "hbs");
app.use(require("./routes/index"));

app.listen(3000, function(req, res) {
  console.log("WE ON THE PORT!!");
});
