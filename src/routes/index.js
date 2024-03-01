const express=require("express")
const router=express.Router()

const whatsapp_routes=require("./whatsapp")


router.use('/whatsapp',whatsapp_routes)


module.exports=router