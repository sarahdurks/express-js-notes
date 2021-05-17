
// Express
const express = require('express');
const path =require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const routesAPI = require('./routes/routesapi');
const routesHTML = require('./routes/routeshtml');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join (_dirname, 'public')));

app.use('/api', routesAPI);
app.use('/', routesHTML);


app.listen(PORT, () => { 
    console.log(`App listening on: ${PORT}`);
});