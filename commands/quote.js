const Discord = require('discord.js');
const Command = require('./command')
const prefix = '!!'

module.exports = class Quote extends Command {



	static match(message) {
		return message.content.startsWith(prefix + 'quote')
	}

	static action(message) {

		let randnum = Math.floor(Math.random() * 3)

		if (randnum == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Citation 1)
                        .setFooter('Citation de X')
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Citation 2')
                        .setFooter('Citation de X')
			message.channel.sendEmbed(embed)

		} else if(randnum == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Citation 3')
                        .setFooter('Citation de X')
			message.channel.sendEmbed(embed)

		} 
			

	}



}
