const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/', async (req, res) => {
    const result = await User.findAll({
        where: {
            userName: req.body.userName,
            password: req.body.password
        }
    });
    if (result.length==0) {
        res.status(403).json({ auth: false });
    }
    res.status(200).json({ auth: true })
});

module.exports = router;