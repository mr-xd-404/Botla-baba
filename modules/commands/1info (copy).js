module.exports.config = {
	name: "owner",
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
var link =["https://i.postimg.cc/jSkfMmn4/IMG-20230920-155302-HDR-01-01-01-01-1.jpg", 
            
            "https://i.postimg.cc/jSkfMmn4/IMG-20230920-155302-HDR-01-01-01-01-1.jpg", 
            
            "https://i.postimg.cc/jSkfMmn4/IMG-20230920-155302-HDR-01-01-01-01-1.jpg",

            "https://i.postimg.cc/jSkfMmn4/IMG-20230920-155302-HDR-01-01-01-01-1.jpg",
       

                    "https://i.postimg.cc/jSkfMmn4/IMG-20230920-155302-HDR-01-01-01-01-1.jpg"];
  
var callback = () => api.sendMessage({body:`●━━━━━━━━━━━━━━━━━━━━━●

🐰 BOT INFORMATION  :-

★ Bot Name    :   BAPPA BOT

★ Bot Version : 3.0

★ Type : Funny & educational 

★ Language    : Bangla , English 

🐰 OWNER INFORMATION :-

- নাম                      : বাপ্পা দেবনাথ 

- বর্তমান ঠিকানা     : তালা

- স্থায়ী ঠিকানা         : খুলনা, সাতক্ষিরা

- বয়স                    : ১৭+

- GENDER            : MALE

- উচ্চতা                 : ৫ ফুট ৪ ইঞ্চি

- জন্ম তারিখ         :  ০৬ আগস্ট  ২০০৬

- পেশা                   : স্টুডেন্ট 

- যোগ্যতা              :  ইন্টার ফাস্ট ইয়ার

- রিলেশনশিপ       : মনে হয় মিঙ্গেল

- প্রিয় রং              : কালো,সাদা 

- প্রিয় খাবার        : ডাল,আলুভাজা

- শখ                   : গান শোনা

- ইচ্ছা                 : অনেক বড় হওয়া

- আসল পরিচয়  :  হিন্দু 

🐰 Virtual Information : 
  
★Facebook  1 Link :- facebook.com/bappa005

★Facebook  2 Link :-facebook.com/bappabro143

★Telegram Link :-  t.me/bappa_debnath

★WhatsApp  :-  01755368099

★Support Email :- bappadebnath145@gmail.com

●━━━━━━━━━━━━━━━━━━━━━●`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };