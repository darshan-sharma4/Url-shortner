const express =  require('express')
const router = express.Router();
const {restrictToRole}=require('../middleware/authentication')

const Url = require('../model/url')
router.get('/',restrictToRole(["Normal","Admin"]),async(req,res)=>{
    const Urls = await Url.find({createdBy:req.user._id})
    console.log(Urls)
    res.render('home',{allUrls:Urls})
})

router.get('/admin/urls',restrictToRole(["Admin"]),async(req,res)=>{
    const Urls = await Url.find({})
    res.render('home',{allUrls:Urls})
})
 
router.get('/signUp',(req,res)=>{
    return res.render('signup')
 })
 
router.get('/login',(req,res)=>{
    return res.render('login');
 })


 
module.exports = router;   