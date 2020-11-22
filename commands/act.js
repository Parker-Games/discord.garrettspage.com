const global = require('../global');
const client = global.client;

module.exports = (client, message, args) => {
	if (args[0] == "gay") {
		message.channel.send({
			"content": "Aight"
		});
		message.channel.send({
			"content": "I touch kids..."
		});
	} else {
		message.channel.send({
			"content": "Wut?"
		});
	}
}