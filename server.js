const express = require ('express');
const parser = require('body-parser');

const admin_route = require('./routes/admin');
const root_route = require('./routes/shop');

const app = express();

app.use(parser.json());
app.use('/admin', admin_route); //Used a filter = '/admin' here
app.use(root_route);

app.use((req, res, next) => {
    res.status(404).send("<h3>Oops! Page not found!</h3>");
})

app.listen(3000);