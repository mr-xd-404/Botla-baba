module.exports.config = {
    name: 'autotime',
    version: '10.02',
    hasPermssion: 0,
    credits: 'mr prem',
    description: 'সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '',
    message: ['']
},
             {
    timer: '',
    message: ['']
},
						{
    timer: '',
    message: ['']
},
						 {
    timer: '',
    message: ['']
},
						 {
    timer: '',
    message: [' ']
},
						 {
    timer: '',
    message: ['']
},
						 {
    timer: '',
    message: [' ']
},
						 {
    timer: '',
    message: [""]
},
						 {
    timer: '',
    message: [""]
},
						 {
    timer: '',
    message: [']
},
             {
    timer: '',
    message: [ ]
},
						 {
    timer: '',
    message: [ ']
},
						 {
    timer: '',
    message: ['']
},					
						 {
    timer: '',
    message: [' ']
},
						 {
    timer: '',
    message: [' ']
},
						 {
    timer: '',
    message: ['']
},
						 {
    timer: '',
    message: ['']
},
						{
    timer: '',
    message: [' ']
},
						 {
    timer: '',
    message: ['']
},
						 {
    timer: '',
    message: [' ']
},
             {
    timer: '',
    message: ['']
},
             {
    timer: '',
    message: ['']
},
             {
    timer: '',
    message: ['']
},
            {
    timer: '',
    message: ['']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};