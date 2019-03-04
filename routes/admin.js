const express = require('express');
const path = require('path');
const _ = require('lodash');
const router = express.Router();

const rootdir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {title:"Add product", path:'add-product'});
})

router.post('/product', (req, res, next) => {
    const is_valid = addProduct(req.body.productname);
    
    if(is_valid)
        res.redirect('/');
    else if(!is_valid)
        res.status(400).render('invalid-product', {title:'Invalid product entry'});
})

const addProduct = (productname) => {
    if(
        !_.isEmpty(productname) &&
        !_.isNull(productname) &&
        !_.isUndefined(productname) &&
         _.isString(productname) &&
        _.isNaN(Number(productname))
    )
    {
        products.push({productname: productname});
        return true;
    }
    else return false;
}

exports.routes = router;
exports.products = products;