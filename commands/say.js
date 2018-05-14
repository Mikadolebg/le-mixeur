const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Say extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'say')
	}

	static action(message) {
		
			let args = message.content.split(" ").slice(1);
		
			message.delete()
			var embed = new Discord.RichEmbed()
			.setColor("#F39C12")
			.setDescription("**" + message.author.username + "**" + " a dit: " + " " + args.join(" "))
			message.channel.send(embed)
	}
}
