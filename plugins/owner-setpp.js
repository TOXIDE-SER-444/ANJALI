let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '_Reply To A Photo_'
        await conn.updateProfilePicture(conn.user.jid, img).then(_ => m.reply('_Profile Picture Updated_'))
    } else throw '_Reply To A Photo_'
}

handler.command = /^setpp/i;
export default handler;
