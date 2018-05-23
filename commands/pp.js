const Command = require('./command')
const prefix = '!!'

module.exports = class Pp extends Command {

	static match(message) {
		
		return (message.content === prefix + 'pp')
	
       static action(message) {
		  
	   var embed = new Discord.RichEmbed()
	   .setColor("#2980b9")
	   .setDescription('Voici ta photo de profile:')
	   .setImage(message.author.avatarURL)
	   message.channel.send(embed)
	   
	}
}
