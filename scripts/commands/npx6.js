const fs = require("fs");
module.exports = {
  config:{
	name: "npx6",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Fahim", 
	description: "Fun",
	category: "no prefix",
	usages: "",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("🕵️‍♀️")==0 || body.indexOf("😎")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "তু্ঁমি্ঁ অ্যা্ঁটি্ঁটি্ঁউ্ঁড্ঁ দে্ঁখা্ঁচ্ছ্ঁ তা্ঁতে্ঁ আ্ঁমা্ঁর্ঁ বা্ঁল্ঁ ছে্ঁরা্ঁ গে্ঁল্ঁ 😎😏",
				attachment: fs.createReadStream(__dirname + `/ArYan/Tomi attitude.m4a`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
      }