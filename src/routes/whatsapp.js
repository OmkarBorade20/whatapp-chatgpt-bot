const express=require("express")
const controller=require("../controller/whatsapp")
const router=express.Router()




router.post('/GenerateQR',controller.qrCode)


module.exports=router