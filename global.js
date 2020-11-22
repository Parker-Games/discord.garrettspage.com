const Discord = require('discord.js'),
	client = new Discord.Client(),
	express = require('express');
exports.Discord = Discord;
exports.client = client;

var app = express();
var server = app.listen(8443, function () {
	console.log("HTTP: Started");
});

app.get('/', (req, res) => {
	res.redirect('https://discord.com/api/oauth2/authorize?client_id=778292446718591016&permissions=1879048134&scope=bot');
});

exports.getUserFromMention = (mention) => {
  	if (!mention)
		return;
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
		if (mention.startsWith('!'))
			mention = mention.slice(1);
		const user = client.users.cache.get(mention);
		if (user.bot)
			return "BOT";

		return user;
	}
};

exports.getUserFromMentionRegEx = (mention) => {
	const matches = mention.match(/^<@!?(\d+)>$/);
	const id = matches[1];
	return client.users.cache.get(id);
}