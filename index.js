
const Discord = require("discord.js");
const bot = new Discord.Client();
const Google = require('./commands/google');
const Say = require('./commands/say');
//const Help = require('./commands/help');
const moment = require('moment');

bot.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setGame('donner cours de français');
   bot.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

bot.on('message', function(message) { 	
    Google.parse(message)	
    Say.parse(message)
   // Help.parse(message)
	
if(message.content.startsWith('!help')) {
 var embed = new Discord.RichEmbed()
	        .setColor("#F39C12")
		.setAuthor('Liste des commandes :')
                .addField(':rotating_light: Administration', '`[en dev]`')
                .addField(':video_game: Fun', ' `!google`, `!say`')
                .addField(':newspaper: Info', ' `!stats[en dev]`, `!invite[en dev]`, `!discord[en dev]`, `!ping[en dev]`, `!profile[en dev]`')
                .setTimestamp()
		message.channel.send(embed)
    
	     }
   
});
    
    bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438695803901706253").send("Bienvenue à toi " + member.user.toString() + ", tu es actuellement demandeur d'asile et la population risque d'être hostile à ton égard. Il te suffit de t'entretenir avec Monsieur Pêche pour qu'il te donne tes papiers et ainsi devenir citoyen.");
    var role = member.guild.roles.find('id', '429595217746984972 ');
    member.addRole(role);
    
});

// client secret
  bot.login(process.env.TOKEN);
