const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {User} = require('../models/user.model')
const {UserDTO} = require('../dto/user.dto')

const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    const {name, email, password} = req.body


    const ExistUser = await User.findOne({
        email
    })

    if (ExistUser) return res.status(400).json({
        msg: 'User Already Exists With Given Email'
    })

    const user = new User({
        name, email, type: 'publisher'
    })

    const hashedPassword = bcrypt.hashSync(password, 10);

    user.password = hashedPassword

    await user.save()

    res.status(201).json({user})
})

router.post('/signin', async (req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({email})

    if (!user) return res.status(404).json({msg: "User Not Found With Given Email"})

    const correctPassword = bcrypt.compareSync(password, user.password);

    if (!correctPassword) return res.status(401).json({msg: "Invalid Credentials Data"})

    const userData = UserDTO(user);

    const token = jwt.sign(userData, 'adcgjhsgcdas')

    res.status(200).json({
        user: userData,
        token
    })

})



module.exports = router