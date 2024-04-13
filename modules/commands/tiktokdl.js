module.exports.config = {
	name: "tiktok",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Prince Sanel",
	description: "Tiktok downloader",
  usePrefix: true,
	commandCategory: "random",
	usages: "[tiktoklink]",
	cooldowns: 1,
	
	}; // Credits fot the api: Prince sanel

module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	let link = args[0];
	if (!args[0]) return api.sendMessage("[!] Need a tiktoklink to proceed.\nUse "+global.config.PREFIX+this.config.name+" [tiktok link]", event.threadID, event.messageID);
	api.sendMessage('Downloading Please wait...', event.threadID, event.messageID);
    axios.get(`https://mainapi.princemc166.repl.co/api/tiktokdown?link=${link}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `Video Info\n\nSession: ${res.data.tikwn.session}\n\n Video infon\n\nAuthor: ${res.data.tikwn.authorNickname}\n\nAuthorUniqueID: ${res.data.tikwn.authorUniqueId}\nVideoTitle: ${res.data.tikwn.videoTitle}\n\nPlayed by: ${res.data.tikwn.play}\n\nLiked by: ${res.data.tikwn.digg}\n\nDuration: ${res.data.tikwn.duration}\n\n\n> Without Watermark By Bappa:`,
						attachment: fs.createReadStream(__dirname + `/cache/nowm.mp4`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nowm.mp4`), event.messageID);
				};
				request(res.data.tikwn.nowm).pipe(fs.createWriteStream(__dirname + `/cache/nowm.mp4`)).on("close", callback);
			})
}