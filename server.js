const express = require ('express');
const parser = require('body-parser');
const path = require('path');

const rootdir =  require('./util/path');

const admin_route = require('./routes/admin');
const root_route = require('./routes/shop');

const app = express();

app.use(express.static(path.join(rootdir,"public")));
app.use(parser.urlencoded({extended:false}));
app.use('/admin', admin_route); //Used a filter = '/admin' here
app.use(root_route);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir,"views","page404.html"));
})

app.listen(3000);