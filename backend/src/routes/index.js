const { Router, response } = require('express');
const router = Router();

require('../models/User')

const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.get('/', (req, res) =>
    res.send('hello world'))

router.post('/new-user', async (req, res) => {
    const { name, lastName, gender, yearsOld, dni, adress, email, type, matter, password} = req.body;
    const newUser = new User({name, lastName, gender, yearsOld, dni, adress, email, type, matter, password})
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretkey')
    res.status(200).json({token});
})

router.post('/sign-in', async (req, res) => {
    const { name, password} = req.body;
    const user = await User.findOne({name})

    if(!user) return res.status(401).send("The user is don't exists");
    if(user.password !== password) return res.status(401).send("Wrong password");

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
})


router.get('/teachers', async (req, res) => {
    const user =  await User.find()
    return res.status(200).json(user)
    
})

router.post('/profile-teacher', async (req, res) => {
    const { name } = req.body;
    const user = await User.findOne({name})

    return res.json(user)
})


module.exports = router;


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unthorize Request')
    }
        const token = req.headers.authorization.split(' ')[1];
        if(token === 'null') {
        return res.status(401).send('Unathorize Request')
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next(); 
}