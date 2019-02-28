const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(require("./routes/index"));

app.listen(3000, function(req, res) {
  console.log("WE ON THE PORT!!");
});
