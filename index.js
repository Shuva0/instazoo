// const express = require("express");
// const app = express();
// const path = require("path");
// const bodyParser = require('body-parser');

// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/Views"));
// app.use(express.static(__dirname + "/Views"));
// // Middleware to parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// app.listen(port, () => {
//   console.log(`InstaZoo is running on port no ${port}`);
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to InstaZoo");
// });

// app.get("/:animalNames", (req, res) => {
//   const { animalNames } = req.params;
//   const zooData = require("./data.json");
//   const data = zooData[animalNames];
//   res.render("index.ejs", { data });
//   console.log(data.name)
// });

// app.post("/search", (req, res) =>{
//   const searchData = req.body;
//   const animalForm = searchData.animalForm;
//   // Redirect the user to the URL with the value appended
//   res.redirect('/' + animalForm);
//   console.log(  animalForm)
// })

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/Views"));
app.use(express.static(__dirname + "/Views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`InstaZoo is running on port no ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to InstaZoo");
});

app.get("/:animalNames", (req, res) => {
  const { animalNames } = req.params;
  const zooData = require("./data.json");
  const data = zooData[animalNames];

  if (!data) {
    return res.send("Animal not found");
  }

  res.render("index", { data });
  console.log(data.name);
});

app.post("/search", (req, res) => {
  const searchData = req.body;
  const animalForm = searchData.animalForm;
  res.redirect('/' + animalForm);
  console.log(animalForm);
});
