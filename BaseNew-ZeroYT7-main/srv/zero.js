//JANGAN DI HAPUS YA

//BASE BARU NIH
//CREATOR BASE : ZERO YT7
//KLO MAU RECODE / EDIT KASIH NAMA CREATOR ASLI NYA
//HARGAI PEMBUAT BASE YA

//JANGAN LUPA FOLLOW
//ALL SOSIAL MEDIAKU

//INSTAGRAM : @Zero_YT7
//YOUTUBE : ZeroYT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

//THANKS UDAH MAKE BASE INI


var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var request = require('request')
var fs = require('fs')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '©Created By Zero YT7'
blocked = []
multi =false
nopref = false
allpref = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = ["6285866295942@s.whatsapp.net",`${NomorOwner}@s.whatsapp.net`]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[zer.sender]
var pushname = zer.key.fromMe ? zero.user.name : !conts ? 'unknown' : conts.notify || conts.vname || conts.name || 'unknown' 
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...Jangam Lupa Subscribe Zero YT7',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `Subscribe Zero YT7`, 
orderTitle: `Subscribe Zero YT7`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
var sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
kma = loc1
mhan = await zero.prepareMessage(from, kma, location)
var buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "LOCATION"
}
zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButImage = async (
id,
text1,
desc1,
gam1,
but = [],
options = {}
) => {
kma = gam1;
mhan = await zero.prepareMessage(from, kma, image);
var buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4,
}
zero.sendMessage(
id,
buttonMessages,
MessageType.buttonsMessage,
options
)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           

case 'menu':
case 'help':
teks =
`𝐇𝐚𝐥𝐥𝐨... ${pushname}, ${ucapanWaktu}
𝐀𝐩𝐚 𝐊𝐚𝐛𝐚𝐫...? 𝐒𝐞𝐦𝐨𝐠𝐚 𝐇𝐚𝐫𝐢𝐦𝐮 𝐌𝐞𝐧𝐲𝐞𝐧𝐚𝐧𝐠𝐤𝐚𝐧
𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚

[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : ${NameBot}
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐁𝐨𝐭 : ${faketeks}
𝐍𝐚𝐦𝐚 𝐎𝐰𝐧𝐞𝐫 : ${NameOwner}
𝐍𝐨𝐦𝐞𝐫 𝐎𝐰𝐧𝐞𝐫 : ${NomorOwner}
𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
𝐒𝐩𝐞𝐞𝐝 : ${latensyi.toFixed(4)} second
𝐋𝐢𝐛 : Baileys
𝐓𝐲𝐩𝐞 : NodeJs

[ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ]
𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}welcome
• ${prefix}group
• ${prefix}linkgrup
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}setpp
• ${prefix}kick
• ${prefix}add
• ${prefix}demote
• ${prefix}promote

𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}attp

𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐌𝐞𝐧𝐮
• ${prefix}owner
• ${prefix}report
• ${prefix}runtime
• ${prefix}speed

𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}bc`
sendButLocation(from, teks, faketeks, {jpegThumbnail:fakeimg,name:""}, [{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1},{buttonId:`script`,buttonText:{displayText:'SCRIPT'},type:1}], {contextInfo: { mentionedJid: [num]}})
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By Zero YT7',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐙𝐞𝐫𝐨 𝐘𝐓𝟕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/ZeroYT7`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_zeroyt7`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'sourcecode':
case 'script':
case 'sc':
teks = `[ 𝗜𝗡𝗙𝗢 𝗦𝗖𝗥𝗜𝗣𝗧 𝗕𝗢𝗧 ]
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐒𝐜𝐫𝐢𝐩𝐭 : Zero YT7
𝐋𝐢𝐧𝐤 𝐒𝐜𝐫𝐢𝐩𝐭 : https://github.com/Zero-YT7/BaseNew-ZeroYT7`
zero.sendMessage(from, teks, text, {quoted : zer})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break
        
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}