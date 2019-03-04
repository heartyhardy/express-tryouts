const express = require('express');
const path = require('path');
const router = express.Router();

const rootdir = require('../util/path');
const admin_data = require('../routes/admin');

router.get('/', (req, res, next) => {
    // Oldschool
    // res.sendFile(path.join(rootdir,"views","shop.html"));

    //Pug
    const products = admin_data.products;
    res.render('shop', {title:'Shop', products, path:'root'});
})

module.exports = router;