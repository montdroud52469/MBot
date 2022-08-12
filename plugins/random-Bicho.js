import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Bicho")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Bicho*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['bicho']
handler.tags = ['internet']
handler.command = /^(bicho)$/i
export default handler
