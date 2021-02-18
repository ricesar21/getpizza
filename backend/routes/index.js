const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('runnig... ');
});

module.exports = router;