
// Express
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
const routesAPI = require('./routes/routesAPI');
const routesHTML = require('./routes/routesHTML/index');

app.use(express.static('public'));
app.use('/api', routesAPI);
app.use('/', routesHTML);


//PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App listening on: ${PORT}`));