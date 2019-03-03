const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h3>Welcome to the shop</h3>");
})

module.exports = router;