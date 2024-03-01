const whatsapp=require("../connections/whatsapp")
const qrcode = require('qrcode-terminal');
const QRCode=require("qrcode")
const Stream=require("stream")
const {OpenAI}=require('openai')
const { Client, LocalAuth } = require('whatsapp-web.js');

module.exports.qrCode=async function(req,res){


console.log("start WhatsApp ChatGPT.. ")


const openai=new OpenAI({ apiKey:"pass your key "})
 

    whatsapp.on('qr', (qr) => {
        console.log("QR Code Generation..")
        qrcode.generate(qr, { small: true });
    });


    whatsapp.on('ready', async () => {

        //if whatsapp is already loggedin then no qr will be generated.
        console.log('Client is Logged in and ready!');

        //read all messages with GPT:query !!.
        whatsapp.on('message_create',async(message)=>{

            let isGpt=message.body.split(':')[0]
            let query=message.body.split(':')[1];

            if (isGpt === 'GPT' || isGpt==='gpt') {

                //call chat gpt api.
                const completion = await openai.chat.completions.create({
                    messages: [{ role: "system", content: "You are a helpful assistant." },
                                {role: "user", "content": query}
                            ],
                    model: "gpt-3.5-turbo",
                  });
                console.log(`QUERY ::::   ${message.body.split(':')[1]}`)
                console.log("GPT RESPONSE :",completion.choices[0].message.content)

                 await whatsapp.sendMessage(message.from, completion.choices[0].message.content);
            }      

        })

        // whatsapp.on('message',async (message)=>{
        //     let isGpt=message.body.split(':')[0]
        //     let query=message.body.split(':')[1];

        //     if (isGpt === 'GPT' || isGpt==='gpt') {

        //         //call chat gpt api.
        //         const completion = await openai.chat.completions.create({
        //             messages: [{ role: "system", content: "You are a helpful assistant." },
        //                         {role: "user", "content": query}
        //                     ],
        //             model: "gpt-3.5-turbo",
        //           });

        //         console.log("GPT RESPONSE :",completion.choices[0])

        //          await whatsapp.sendMessage(message.from, completion.choices[0].message.content);
        //     } 
        // })
  
    });



   

   

     



        
    
}