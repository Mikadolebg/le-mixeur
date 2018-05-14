
const Discord = require("discord.js");
const bot = new Discord.Client();
//Classes command
const Google = require('./commands/google');
const Say = require('./commands/say');
const Youtube = require('./commands/youtube');
const Deezer = require('./commands/deezer');
const Clear = require('./commands/clear');
const Help = require('./commands/help');
const Blague = require('./commands/blague');
//const Skribble = require('./commands/skribble');
//Librairie
const moment = require('moment');

//PREFIX
const prefix = '!!'

//Etat du bot
bot.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setGame('préparer une salade de fruits || !!help');
   bot.setMaxListeners(1);
  });


bot.on('message', function(message) { 	
    Google.parse(message)	

    Say.parse(message)

    Youtube.parse(message)

    Deezer.parse(message)

    Clear.parse(message)

    Help.parse(message)
	
    Blague.parse(message)
	
    //Skribble.parse(message)
	
  
	if (message.content === prefix + 'skribble') {
	    message.channel.send('__**Toujours chaud pour un p\'tit skribble !**__ \nhttps://skribbl.io/')
	
	}
	
});
    
    bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438695803901706253").send( "Bienvenue à toi " + member.user.toString() + ", tu es actuellement demandeur d'asile et la population risque d'être hostile à ton égard. Il te suffit de t'entretenir avec Monsieur Pêche pour qu'il te donne tes papiers et ainsi devenir citoyen.");
    var role = member.guild.roles.find('name', "Demandeur d'asile");
    member.addRole(role);
    
});

// client secret
  bot.login(process.env.TOKEN);
