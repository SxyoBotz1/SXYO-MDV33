// beta list menu ujicoba doang 
// Sedang menyelesaikan menu jadi seadanya dlu ya banh:v
// Dilarang edit edit yg lain nanti errror
// kalo edit wm boleh aja asal se wajarnya

    let handler = async (m, { conn, text, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let yo = `Hai @${m.sender.split('@')[0]} 👋`
    let tio = `*© SXYOBOTZ-MD*`
    let liv = `CLICK HERE`
    const sections = [ {
      	title: `Aktif ${uptime} || Jam ${time} WIB`,
        rows: [
	{title: `|📑|𝐀𝐋𝐋 𝐌𝐄𝐍𝐔`, rowId: `.a `},//, description: ``},
        {title: `|💸|𝐌𝐄𝐍𝐔 𝐏𝐀𝐘`, rowId: `.pay `},//, description: ``},
        {title: `|👑|𝐎𝐖𝐍𝐄𝐑`, rowId: `#owner `},//, description: ``},
        {title: `|💵|𝐃𝐎𝐍𝐀𝐒𝐈`, rowId: `#donasi `},//, description: ``},
        {title: `|🤖|𝐒𝐎𝐔𝐑𝐂𝐄 𝐂𝐎𝐃𝐄`, rowId: `#sc `},//, description: ``},
        {title: `|👥|𝐆𝐑𝐔𝐁 𝐎𝐖𝐍𝐄𝐑`, rowId: `#gcbot `},//, description: ``},
        {title: `|🌀|𝐒𝐏𝐄𝐄𝐃 𝐁𝐎𝐓`, rowId: `#speed `},//, description: ``},
        {title: `|🔅|𝐓𝐄𝐗𝐏𝐑𝐎`, rowId: `#textpro `},//, description: ``},
        ]
 } ]

  const listMessage = {
  text: tio,
  mentions: [m.sender],
  footer: 'Jika menemukan bug,error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.',
  title: yo,
  buttonText: liv,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
