// Thanks For Allah
// Rzy.bot


let fs = require('fs')
global.owner = ['6285828764046', '6285828764046','6285828764046','6285828764046','6285828764046'] // Letakan nomor kamu disini
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto.xyz',
  rey: 'https://sekha.tech',
  aqulz: 'https://api.justaqul.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://api.zekais.com',
  zeks: 'https://api.zeks.me',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://sekha.tech': 'apirey',
  'https://hardianto.xyz': 'hardianto',
  'https://api.neoxr.my.id': 'yntkts',
  'https://api.chipa.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'nyyxz-bot',
  'https://api.lolhuman.xyz': 'ed6c4f2c72b6f92f7d201464',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://api.zekais.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

// Sticker WM
global.packname = 'Rzy-bot'
global.author = 'Rzy-bot'

global.wait = '「 ⏱️ 」Harap tunggu sebentar...'
global.eror = '「❗」Server ERROR!'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = '©Rzy-botz' //change the watermark 
global.image = 'https://telegra.ph/file/1a3eac3701775793618b3.jpg' //change the image
global.thumbfoto = 'https://telegra.ph/file/ae6f7f701a5be2951648f.jpg'

global.multiplier = 9999999 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
