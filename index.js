const express = require("express");
const path = require("path");
const app = express();



app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
