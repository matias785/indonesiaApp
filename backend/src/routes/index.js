const { Router, response } = require('express');
const router = Router();

require('../models/User')

const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.get('/', (req, res) =>
    res.send('hello world'))

router.post('/newuser', async (req, res) => {
    const { name, lastName, email, password, position} = req.body;
    const newUser = new User({name, lastName, email, password, position})
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretkey')
    res.status(200).json({token});
})

router.post('/signin', async (req, res) => {
    const { name, password} = req.body;
    const user = await User.findOne({name})

    if(!user) return res.status(401).send("The user is don't exists");
    if(user.password !== password) return res.status(401).send("Wrong password");

    const token = jwt.sign({_id: user._id}, 'secretkey');
    return res.status(200).json({token});
})


router.get('/profilesultan', (req, res) => {
    res.json([{
        _id : "60e3a8f2644ffb1b20099a65",
        name : "sultan",
        lastName : "palaversich",
        email : "sultan@elperritofiestero.com",
        password : "1234",
        position : "Director",
        createdAt : "2021-07-06T00:50:58.165Z",
        updatedAt : "2021-07-06T00:50:58.165Z",
        __v : 0
        
    }])   
})

router.get('/profilejoe', verifyToken,(req, res) => {
    res.json([
        {
            _id : "60e3ad8b5521da287c91acd7",
            name : "joe",
            lastNam : "Lopez",
            email : "joelopez@elperritofiestero.com",
            password : "password",
            position : "Director",
            createdAt : "2021-07-06T01:10:35.758Z",
            updatedAt : "2021-07-06T01:10:35.758Z",
            __v : 0
        }
    ])
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