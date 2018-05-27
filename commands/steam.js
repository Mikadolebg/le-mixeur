const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Steam extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'steam')
	}

	static action(message) {
		
			let args = message.content.split(" ").slice(1);
		        args.shift()
			message.channel.send("https://store.steampowered.com/search/?term=" + args.join("+"))
	}
}
