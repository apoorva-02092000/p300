const express = require('express');
const app = express();
console.log("test")

app.use(express.static('public'));
app.use(express.static('javas'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});


app.listen(3000);
