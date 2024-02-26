import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.SESSION_ID = 'Phoenix~f62CSLRR'
global.OWNER_DATA = '919074692450;Abhishek Suresh'
global.BOT_NAME = 'Phoenix-MD'
global.BASE_URL = 'https://abhi-api-bvws.onrender.com/' //Dont Change This
global.STICKER_DATA = '🎯𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳;𝙰𝚋𝚑𝚒𝚜𝚑𝚎𝚔 𝚂𝚞𝚛𝚎𝚜𝚑☘️'; 

global.APIs = {
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  lol: 'https://api.lolhuman.xyz',
  abhi: 'https://abhi-api-7puv.onrender.com/',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

global.lolkeysapi = ['GataDios']

global.wait = '_⌛ Please Wait_'
global.rwait = '⌛'
global.dmoji = '🤭'
global.warn = '⚠️'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.WARN_COUNT = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
