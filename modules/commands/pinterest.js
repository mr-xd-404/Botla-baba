module.exports.config = {
    name: "pic",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "senthanh",
    description: "Image search",
    commandCategory: "Search",
    usages: "[Text] - [number]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    if(keySearch.includes("-") == false) return api.sendMessage(`দয়া করে এভাবে লিখুন: ${global.config.PREFIX}${this.config.name} bappa - 10 (এটার মানে হলো আপনি কতগুলো ছবি আমার কাছে চাচ্ছেন)`, event.threadID, event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 6
    const res = await axios.get(`https://bot.api-johnlester.repl.co/pinterest?search=${encodeURIComponent(keySearchs)}`);
    const data = res.data.data;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/data/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/data/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: numberSearch + ' Search results for photo: '+ keySearchs
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/data/${ii}.jpg`)
    }
};
