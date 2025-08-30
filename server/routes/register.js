const express = require('express')
const router = express.Router();
const {handleUserRegister} = require('../controllers/userRegister');
router.post('/' , async (req,res)=>{
       const {username,email,password} = req.body
    const info = req.body
    const newUser = handleUserRegister(info);
         console.log(newUser)
        return res.send(newUser);})
module.exports = router