const express = require('express');
const router = express.Router();

const User = require('../models/User');

// Get all the users

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.json({ message: err });
    }
}
);

// Post User Details

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        Score: req.body.Score,
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch(err) {
        res.json({ message: err });
    }
}
);

module.exports = router;
