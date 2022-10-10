const express = require('express')

const router = express.Router()

const User = require('../model/user.model')


router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user)
    } catch (err) {
        res.send("Err : " + err)
    }
})


router.post('/', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        nic: req.body.nic,
        password: req.body.password
    })
    console.log(user)
    try {
        const response = await user.save();
        res.json(response)
       
    } catch (err) {
        res.send('Err: ' + err)
    }

})




router.post('/search/',async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    try {

        const search= await User.find();
        for (const u of search){
            console.log(email,password,"awilla",u.email,u.password)
            if(email===u.email && password===u.password){
           
                res.send(true)
            }else {
                res.send(false)
            }
        }
    }catch (err) { 
        res.send("error :"+err)
    }
})







module.exports = router

