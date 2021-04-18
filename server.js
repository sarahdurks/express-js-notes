
// Express
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const routesAPI = require('./routes/routesAPI');
const routesHTML = require('./routes/routesHTML');
app.use(express.static('public'));
app.use('/', routesHTML);
app.use('/api', routesAPI);

//PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on: ${PORT}`));