const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

var allusers = []

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
    console.log("adduser");
    const user = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    console.log(req.body);
    user.save().then(
        data => {
            ret = {"message":"User Added Successfully",Db_id:data._id,UserId:data.userId}
            res.json(ret);
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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
    }).then(
        data => {
            data.message="User Updated Successfully";
            res.json(data);
        }
    )
        .catch(err => {
            console.log('save error');
            res.json(err);
        });
});

module.exports = router;