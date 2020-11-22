module.exports = (client) => { 
	
  if(!client.user.bot) return process.exit() };
  
  client.user.setPresence(
    {
      status: "online", 
      
      afk: false,
      
      game: {
        name: process.env.STATUS_MESSAGE,
        
        url: null,
        
        type: "PLAYING"
        
      }
    }
  );
}