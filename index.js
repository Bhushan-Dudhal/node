const express = require("express");
const app = express();

//Middleware
//permission
app.use(express.static("public/"));
app.get("/", function (req, res) {
  res.render("home.ejs");
});

// app.get("/about", function (req, res) {
//     // res.render("about.ejs")
// })
app.listen(1000);
