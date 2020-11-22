//=================IMPORT=================\\
const Discord = require('discord.js');

const client = new Discord.Client();

var { readdirSync } = require('fs');

client.commands = new Discord.Collection();

//=============COMMAND HANDLER=============\\
async function chStart() {
 for(const file of readdirSync('./commands/')) {
	
  if(!file.endsWith(".js")) return; 
  
  var fileName = file.substring(0, file.length - 3);

  var fileContents = require(`./commands/${file}`);
  
  client.commands.set(fileName, fileContents);
}
}
chStart()
//==============EVENT HANDLER==============\\

async function ehStart() {
for(const file of readdirSync('./events/')) {
	
  if(!file.endsWith(".js")) return;
  
  var fileName = file.substring(0, file.length - 3);
  
  var fileContents = require(`./events/${file}`);

  client.on(fileName, fileContents.bind(null, client));
  
  delete require.cache[require.resolve(`./events/${file}`)];
}
}
ehStart()

//==================LOGIN==================\\

client.login(process.env.TOKEN)

  .then(() => {
    if(!client.user.bot) { console.log(`${client.id} is trying to self bot!`); return process.exit() }; 
    
    console.log(`Client logged in as ${client.user.tag}`); 
  })
  .catch((err) => {
    console.error("Error while logging in: " + err);
    
    
    if(err.toString().match(/incorrect login details/gi)) console.log("Wrong token in .env file!");
  });