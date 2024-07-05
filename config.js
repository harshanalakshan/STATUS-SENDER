//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BjOHJUNnFaSS8vUWZqeTZHekZiemR4M05JUmI3eDh1aVUxeHNnZmlFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW5OSGg2bzc2VFVKd2tzS0pXUFNMY1drM3NrL3AvRUE1RWZSOTNWWlJ3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TXBCZ2FyQllDVW5MZWtoT2lINnNpbm9uQ05XOEFTU1dkWmliUlRKRUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPU09BNDBWQU5iNjlBc3JDMSt3ZjNOaVVPWDdPanpxdHo2OWhyQkxySXlnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldON0I5eU0vV2VGaHk5YkRwZ2tBem5YS25jNUw4MGxnaGRXc1hYMERUMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN6cGtUUktGUURZZnI0UHpJeWtJUW5jRHc0aVFWcUZKUDdUNFhOdVRnMFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFWdFRuaUQ3czNMeWJsOHhJcnhXZmRCZzVCSHd1OCtiWGtjZnN4QVdFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhNZ0ZHKy9lMFNoT3hPWlduZ0FKelFSOWJJaithME4wVVRZTlM0S2FEMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgwMFNDRmduQ0FQS21SVktNaUpTZXQ5TzhKYTZMUXBEOEQxdGszTkFpK3RNekhMK0JxYitIQUUyL0x5MGh0ak5TL1h3TldEck1PcFp6K0pZZkgzdURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6Imx1Ui95L1BqQUlOMUJsS01WU1hqbTAzQ0ZKN09qVitVYzBXN1JxZU1FeXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Mjc4OTg1MzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkNCQ0FCQTZBMTBEM0E2MkE3MTYyMzU5OTBBREIzNEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDE4MjQzMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Mjc4OTg1MzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUYzMEYwNjEyQjYzMjEyN0M0MjE5OUQ1NzlFQThEQzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDE4MjQzMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTjhLRmlLUG1TZHV6WUlOTXdJalZBUSIsInBob25lSWQiOiI3MjdmYjlkNS04NzkxLTRkYmItOGQwMS01N2QzYTBmZTYyODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNC9hVEp4ZnBVV2UraUJ3bFlvalI0OFpmRHk0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1va010SU1BVHM3dXBWcG9iUDJkRHd5L2Vlcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJITFRLWDIxMiIsIm1lIjp7ImlkIjoiOTQ3Mjc4OTg1MzQ6NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZee8J2XnPCdl6HwnZeaIOC2sOC3j+C2reC3lOC3g+C3muC2sSDwn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPMzNxVzRRajgyZnRBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6d1Y2SlhNWENzbWlSM3lsZjI0dUwxZW1vYzJQaVNvY2RQZnl3MFFSUGowPSIsImFjY291bnRTaWduYXR1cmUiOiJZaFFjQ0F4RGZDN3dZb3owR3NPTGRFQjBZWjFDOXgrNjRxWS9qeWxsZWlYd1NJc0lMRzZxVFNSTndxL0VmQ3VsQVRnVDZ1Si94ZVhjNkp6S1BXMS9EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGt0bkxVbVZZYTl6VWlhTE9VNWNyeGpTK3ZKam9Gaml3UWViT1VPVTFLOFdpQmV1TG91MWhoYUZIdFRHRUNQWXpIMEFKMy9Rd3VycXQvVVNja1Y4RHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNzg5ODUzNDo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmM4RmVpVnpGd3JKb2tkOHBYOXVMaTlYcHFITmo0a3FISFQzOHNORUVUNDkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxODI0MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjg3In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
