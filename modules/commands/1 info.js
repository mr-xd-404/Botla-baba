module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Ayan mallik", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link =["https://i.postimg.cc/6pHsh0nG/20231015-100535.jpg", 
            
            "https://i.postimg.cc/6pHsh0nG/20231015-100535.jpg", 
            
            "https://i.postimg.cc/6pHsh0nG/20231015-100535.jpg",

            "https://i.postimg.cc/6pHsh0nG/20231015-100535.jpg",
       

                    "https://i.postimg.cc/6pHsh0nG/20231015-100535.jpg"];
  
var callback = () => api.sendMessage({body:`🌹🧡𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝💦 


🌹🧡BOT NAME : ${global.config.BOTNAME}

🌹🧡BOT ADMIN : 𝐁𝐀𝐏𝐏𝐀 𝐃𝐄𝐁𝐍𝐀𝐓𝐇

FACEBOOK : https://www.facebook.com/bappa005

BOT PREFIX : ${global.config.PREFIX}

🌹🧡BOT OWNER : 𓆩𝐁𝐀𝐏𝐏𝐀᭄𓆪 ᥬ🙂᭄ 𓆩😁𓆪

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME}『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
