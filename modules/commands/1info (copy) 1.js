module.exports.config = {
	name: "rules",
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
var link =["https://i.postimg.cc/vmvrSWTF/20231018-164606-01.jpg", 
            
            "https://i.postimg.cc/vmvrSWTF/20231018-164606-01.jpg", 
            
            "https://i.postimg.cc/vmvrSWTF/20231018-164606-01.jpg",

            "https://i.postimg.cc/vmvrSWTF/20231018-164606-01.jpg",
       

                    "https://i.postimg.cc/vmvrSWTF/20231018-164606-01.jpg"];
  
var callback = () => api.sendMessage({body:`
╔═══════▣◎▣═══════╗
 |           🚫  R U L E S  🚫            |
╚═══════▣◎▣═══════╝

★ বট গ্রুপ এর কিছু নিয়ম রয়েছে
আশা করি সবাই মেনে চলবেন....

★ বট গুপ এর নিয়মগুলো হলো : -

•—»✨  [ ১ ] -  বটের  ফাইল‌/ফরক/লিংক  চাওয়া সম্পূর্ণ নিষেদ্ধ ⚠️

•—»✨  [ ২ ] - বটের রিলেটেড বাদে এমন কোন লিংক বা ছবি দেওয়া নিষিদ্ধ ⚠️

•—»✨  [ ৩ ] - বাজে কথা বা বাজে ভাষা ব্যবহার করা যাবে না তাই এইসব  থেকে দূরে থাকুন ⚠️

•—»✨  [ ৪ ] - গ্রুপে‌ কল দেওয়া নিষিদ্ধ ⚠️

•—»✨  [ ৫ ] - ১৮ + কোনো জিনিস গ্রুপে দিবেন না। যাতে গ্রুপের পরিবেশ নষ্ট হয় ⚠️

•—»✨ [ ৬ ] - বট গ্রুপে অন্য বট আড করার আগে আডমিনের পারমিশন নিবেন ⚠️

•—»✨  [ ৭ ] - কেও এক ইমজি বার বার দিবেন নাহ ⚠️ 

•—»✨  [ ৮ ] - গ্রুপের নাম/পিক চেন্জ করবেন না ⚠️

•—»✨  [ ৯ ] - গ্রুপে কারো সাথে খারাপ আচরণ করবেন না.. কাউকে ছোট করে কোন কথা বলবেন না ⚠️

* বট গ্রুপের নিয়মগুলো খুবই সাধারণ তাই এসব মেনে চলবেন 🙏

* বটের বিষয়ে সমস্যা থাকলে আডমিন কে ইনবক্স করুন 📨

 🌸সবাই নিয়মগুলো মেনে চলুন ধন্যবাদ🌸

┎─────────────────────❁
 ❘ Cradit By Me                                      
 ❘         ✧                    ✧                    ✧
 ❘ Admin :  BAPPA DEBNATH                 
 ❘         ✧                    ✧                    ✧                                 
 ❘ Fb Link : facebook.com/bappa005  
┗─────────────────────❁`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };