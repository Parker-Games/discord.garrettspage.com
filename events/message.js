module.exports = (client, message) => {
	if(!message.content.startsWith(process.env.PREFIX))
		return;
	if(message.author.bot)
		return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	var cmd = client.commands.get(command);

	if(!cmd)
		return;
	console.log(message.author.id + " | " +message.author.username + " '" + command + " " + args + "'");
	cmd(client, message, args);
}