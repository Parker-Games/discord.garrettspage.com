const global = require('../global');
const client = global.client;

module.exports = (client, message, args) => {
	if (args[0] == "roll") {
		const user = global.getUserFromMention(args[1]);
		if (user == "BOT"){
			message.channel.send({
			"content": "I'm not gonna DM a bot"
			});
		return; }

		if (!!user) {
			client.users.cache.get(user.id).send({
				embed: {
					"author": {
						"name": "Check This",
						"url": "https://www.youtube.com/watch?v=yE5_eXP5ZmM"
					}
				}
			});
		return; }

		message.channel.send({
			embed: {
				"author": {
					"name": "Definitely Not Rick Astley",
					"url": "https://www.youtube.com/watch?v=yE5_eXP5ZmM"
				}
			}
		});
		return; }

	message.channel.send({
		"content": "Wut?"
	});
}