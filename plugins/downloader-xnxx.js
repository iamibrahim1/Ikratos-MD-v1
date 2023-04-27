import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*Where is the link, Example: ${usedPrefix + command}* your link `
let res3 = await fetch(`https://api.ibeng.tech/api/search/xnxxdl?url=${args[0]}&apikey=tamvan`)  
let json = await res3.json()
let url3 = json.data.url
await conn.sendFile(m.chat, url3, 'error.mp4', `*${json.data.title}*`', m)         
} catch (err5) {
console.log('5 ' + err5)    
handler.help = ['xnxxdl'].map(v => v + ' <link>')
handler.tags = ['downloader']

handler.command = /^(xnxxdl)$/i

export default handler
