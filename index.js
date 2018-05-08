
const Discord = require("discord.js");
const bot = new Discord.Client();
const Google = require('./commands/google');
const moment = require('moment');

bot.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setGame('donner cours de français');
   bot.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

bot.on('message', function(message) { 	
    Google.parse(message)	
   
   if (message.content === '!help') {
	if (message.author.id !== '423118623876448296')
        if (message.author.id !== '301913733536415755')
	       return;
		var embed = new Discord.RichEmbed()
	        .setColor("RANDOM")
		.setDescription("Commande indisponible pour le moment. Le bot est encore en developpement.")
    		message.channel.send(embed)
	}



 
  else if(message.content.startsWith('!say2')) {
       if (message.author.id !== '423118623876448296')
       if (message.author.id !== '301913733536415755')
	      return;
	let args = message.content.split(" ").slice(1);
	message.delete()
	var embed = new Discord.RichEmbed()
	.setColor("RANDOM")
	.setDescription(args.join(" "))
	message.channel.send(embed)

	}
	
  else if(message.content.startsWith('!say3')) {
       if (message.author.id !== '423118623876448296')
       if (message.author.id !== '301913733536415755')
	      return;
	let args = message.content.split(" ").slice(1);
	message.delete()
	message.channel.send(args.join(" "))

	}
   
});
    
    bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438731113561587724").send( member.user.toString() + ", Bienvenue Dans l'Ecole :wink: !");
    var role = member.guild.roles.find('name', 'Eleve');
    member.addRole(role);
    
});

// client secret
  bot.login(process.env.TOKEN);
