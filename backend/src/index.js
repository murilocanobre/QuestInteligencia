const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./Controllers/authController')(app);
require('./Controllers/transacaoController')(app);

app.listen(3001);
