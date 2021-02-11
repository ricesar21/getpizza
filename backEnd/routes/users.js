const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    const users = await User.findAll({
        attibutes:['name', 'email']
    });
    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.status(200).json(user);
});

module.exports = router