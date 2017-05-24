const express = require('express');
const app = express();
const helper = require('./helpers');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);

app.set('view engine', 'vash');

app.get('/', (req, res) => {
    helper();
    res.render('index');
});

app.post('/post', (req, res) => {
    res.json(req.body.foobar);
})

app.listen(3000, () => console.log('server is running on port 3000'));