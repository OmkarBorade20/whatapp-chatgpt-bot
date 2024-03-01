const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const whatsapp = new Client({
    authStrategy:new LocalAuth()
});

whatsapp.initialize();


// whatsapp.on('message', async (message) => {
//     if (message.body === 'GPT:What is Socket.io?') {

//         await whatsapp.sendMessage(message.from, 'Hello From Omkar.! ');
//     } 
// });


module.exports=whatsapp;