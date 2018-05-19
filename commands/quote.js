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
			.setDescription('《Quand le sage montre du doigt la lune,  l\'idiot regarde le doigt.》')
                        .setFooter('Citation de Lao-Tseu')
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('《Lorsque l\'on se cogne la tête contre un pot et que cela sonne creux, se n\'est pas forcément le pot qui est vide.》')
                        .setFooter('Citation de Confucius')
			message.channel.sendEmbed(embed)

		} else if(randnum == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('《Un arbre qui tombe fait plus de bruit qu\'une forêt qui pousse》')
                        .setFooter('Citation de Abd Al Malik')
			message.channel.sendEmbed(embed)

		} 
			

	}



}
