const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Clear extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'clear')
	}

	static action(message) {
		
			let args = message.content.split(" ").slice(1);
			
			 if(!message.member.hasPermission("MANAGE_MESSAGES")) {

		     	return message.reply('Vous n\'avez pas acces a cette commande')

		  		} else {

	          		message.channel.bulkDelete(args[0]).then(() => {
			  		message.channel.send(args[0] + " messages ont été effacés.").then(message => message.delete(5000));

		    	})
		 	 }
		}
}
