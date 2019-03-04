const express = require ('express');
const parser = require('body-parser');
const path = require('path');

const rootdir =  require('./util/path');

const admin_data = require('./routes/admin');
const root_route = require('./routes/shop');

const app = express();

// set templating engine
app.set('view engine', 'pug');
// in this case this setting isnt required as we already have views folder. if
// folder name was different then should change accordingly.
app.set('views', 'views');

app.use(express.static(path.join(rootdir,"public")));
app.use(parser.urlencoded({extended:false}));
app.use('/admin', admin_data.routes); //Used a filter = '/admin' here
app.use(root_route);

app.use((req, res, next) => {
    res.status(404).render('page404');
})

app.listen(3000);