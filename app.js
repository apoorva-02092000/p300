const express = require('express');
const app = express();
console.log("test")
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('javas'));

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(process.env.PORT || 3000);
