/* Copyright (C) nijin-husni
Mwonu credits kalayalle
Maalutty-nijin-husni
*/

const Maalutty = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/k5LSrdq/ANJALI-png.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝ANJALI💝⦁━►


*owner number TOXIDE SER* :https://wa.me/919048329892.
            

*Bot number Anjali* :https://wa.me/918848191861.


*owner id instagram* :https://instagram.com/mind_have_changed_?utm_medium=copy_link.


*github* : https://github.com/TOXIDE-SER-444/ANJALI.


*audio commands* :https://github.com/TOXIDE-SER-444/media/tree/main/bgm.


*sticker commands* :https://github.com/TOXIDE-SER-444/media/tree/main/stickers.

◄━⦁💝ANJALI💝⦁━►
■□*~TOXIDE SER~*■□ 

`}) 

}));
