const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Ssay extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'ssay')
	}

	static action(message) {
		
		var text = message.content.split(" ").slice(2)
		
		var id = message.content.split(" ").slice(1)
		
		if (message.author.id !== '423118623876448296')
             	if (message.author.id !== '301913733536415755')
	       return;
		
		message.delete()
		
	   bot.channels.get(id).sendMessage(text) 
	}
}
