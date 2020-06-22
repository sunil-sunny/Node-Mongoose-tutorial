const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');


//get all the user
router.get('/allUsers', async (req, res) => {

    userModel.find().then(
        data => {
            res.json(data);
        }
    )
        .catch(err => {
            console.log('save error');
            res.json(err);
        });
});

//get particular user
router.get('/getUser/:userId', (req, res) => {

    userModel.findById(req.params.userId).then(
        data => {
            res.json(data);
        }
    )
        .catch(err => {
            console.log('save error');
            res.json(err);
        });
});

//Add user
router.post('/addUser', (req, res) => {
    const user = new userModel({
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    user.save().then(
        data => {
            res.json(data);
        }
    )
        .catch(err => {
            console.log('save error');
            res.json(err);
        });
});

//modify user
router.put('/modifyUser/:userId', (req, res) => {

    userModel.updateOne({ _id: req.params.userId }, {
        $set: {
            userId: req.body.userId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
    }).then(
        data => {
            res.json(data);
        }
    )
        .catch(err => {
            console.log('save error');
            res.json(err);
        });
});

module.exports = router;