const express=require("express")
const bodyParser = require('body-parser')
const cors=require('cors')

const router=require("./src/routes")

const app=express();
const PORT=3000;


app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(router)


app.listen(PORT,()=>console.log(`App is Running on Port:${PORT}`))

