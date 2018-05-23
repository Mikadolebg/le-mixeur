bot.on('message', function(message) {
if (message.content === prefix + 'pp') {
	
	   var embed = new Discord.RichEmbed()
	   .setColor("#2980b9")
	   .setDescription('Voici ta photo de profile:')
	   .setImage(message.author.avatarURL)
	   message.channel.send(embed)
	   
	}
}
