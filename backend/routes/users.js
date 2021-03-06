const express = require('express');
const router = express.Router();
const { User } = require('../models');
const sha256 = require('js-sha256');
const verifyINT = require('../middlewares/auth');

router.get('/', verifyINT, async (req, res) => {
    const users = await User.findAll({
        attributes:['name', 'email']
    });
    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const user = await User.create({
        userName:req.body.userName,
        password:sha256(req.body.password+"@#ti35-senac123")
    });
    res.status(200).json(user);
});

module.exports = router