module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("আছি রে ভাই আছি🤪 \n\n  ๛➣𓆩𝐁𝐀𝐏𝐏𝐀᭄𓆪‣𒁍এর বট মানেই আগুন ",event.threadID, () =>process.enter(0))