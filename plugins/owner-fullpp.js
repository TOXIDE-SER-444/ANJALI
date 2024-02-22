let handler = async (m, { conn, usedPrefix }) => {
    let _muptime;
    if (process.send) {
        process.send('uptime');
        _muptime = await new Promise(resolve => {
            process.once('message', resolve);
            setTimeout(resolve, 1000);
        }) * 1000;
    }
    let muptime = clockString(_muptime);

    const pluginCount = Object.keys(global.plugins || {}).length;
    const [number, name] = global.OWNER_DATA.split(';');
    if (!number || !name) return;
    
    let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    if (!(who in (global.db?.data?.users || {}))) throw `❌ The User Is Not Found In My Database`;

    let pp = 'https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg'; 
    let abhi = `╭───❮ *${global.BOTNAME}* ❯
│ *ᴏᴡɴᴇʀ* :  ${name} 
│ *ᴘʀᴇғɪx* : .
│ *ᴘʟᴀᴛғᴏʀᴍ* : Linux
│ *ᴘʟᴜɢɪɴꜱ* : ${pluginCount} 
│ *ʀᴜɴᴛɪᴍᴇ* : ${muptime}
╰─────────────⦁
╭───❮ *ʙᴏᴛ ᴍᴇɴᴜ* ❯
│ ${usedPrefix}ᴀʟɪᴠᴇ
│ ${usedPrefix}ʙᴏᴛ
│ ${usedPrefix}ᴏᴡɴᴇʀ
│ ${usedPrefix}ᴘɪɴɢ
│ ${usedPrefix}ʀᴇᴘᴏʀᴛ
│ ${usedPrefix}ꜱᴄʀɪᴘᴛ
│ ${usedPrefix}ᴜᴘᴛɪᴍᴇ
╰─────────────⦁
╭───❮ *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* ❯
│ ${usedPrefix}ᴀᴜᴛᴏᴀᴅᴍɪɴ
│ ${usedPrefix}ʙᴀɴᴄʜᴀᴛ
│ ${usedPrefix}ʙᴄ
│ ${usedPrefix}ʙᴄɢᴄ
│ ${usedPrefix}ʙʟᴏᴄᴋ
│ ${usedPrefix}ᴇɴᴀʙʟᴇ
│ ${usedPrefix}ꜰᴜʟʟᴘᴘ 
│ ${usedPrefix}ᴊᴏɪɴ 
│ ${usedPrefix}ʟᴇꜰᴛ
│ ${usedPrefix}ʀᴇꜱᴛᴀʀᴛ
│ ${usedPrefix}ʀᴇꜱᴇᴛᴘʀᴇꜰɪx
│ ${usedPrefix}ꜱᴇᴛᴘʀᴇꜰɪx
│ ${usedPrefix}ꜱᴇᴛᴘᴘ
│ ${usedPrefix}ꜱᴇᴛꜱᴜᴅᴏ
│ ${usedPrefix}ᴜᴘᴅᴀᴛᴇ
│ ${usedPrefix}ᴜɴʙᴀɴᴄʜᴀᴛ
│ ${usedPrefix}ᴜɴʙʟᴏᴄᴋ
╰─────────────⦁`;

    conn.sendFile(m.chat, pp, 'perfil.jpg', abhi, m, false, { mentions: [who] });
    m.react('📃');
};
handler.help = ['allmenu'];
handler.tags = ['main'];
handler.command = ['allmenu', 'menu'];

export default handler;
