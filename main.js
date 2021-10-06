// init project
const express = require("express");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require("path");
const fs = require("fs");

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");

const matter = require('gray-matter');

app.use(express.static("dist"));


app.get("/:section/:article", (req, res) => {
  
  const file = matter.read('./docs/content/en/' + req.params.section + '/' + req.params.article + '.md');
  
  var md = require("markdown-it")({
    html: true,
  });
  let content = file.content;
  var result = md.render(content);
  
  res.render("docs", {
    post: result,
    title: file.data.title,
    description: file.data.description,
  });
});


app.get("/", (req, res) => {
  const components = fs.readdirSync('./docs/content/en/components').filter(file => file.endsWith('.md'));
  const content = fs.readdirSync('./docs/content/en/content').filter(file => file.endsWith('.md'));
  const forms = fs.readdirSync('./docs/content/en/forms').filter(file => file.endsWith('.md'));
  
  res.render("index", {
    components: components,
    content: content,
    forms: forms
  });
});



//add the router
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');