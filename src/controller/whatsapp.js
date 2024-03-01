const service=require("../service/whatsapp")

module.exports.qrCode=async(req,res,next)=>{
    try {
        await service.qrCode(req,res)
        next();
        
    } catch (error) {
            console.log("Error",error)
            next(error)
    }
}