const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    const { username, email, password } = req.body;

    const isUserExistAlready = await userModel.findOne({
        email
    })

    if(isUserExistAlready){
        return res.status(409).json({
            message : 'User already exists'
        })
    }

    const user = await userModel.create({
         username, email, password 
    });

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie('token',token)

    res.status(201).json({
        message : 'User registered successfully',
        user,
    })
}

module.exports = {userRegister};