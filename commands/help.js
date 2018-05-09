const Discord = require('discord.js')
const Command = require('./command')

module.exports = class Help extends Command {

	static match(message) {
  
  return (message.content === '!help')
	}

	static action(message) {
		var embed = new Discord.RichEmbed()
	        .setColor("#F39C12")
		.setAuthor('Liste des commandes :')
                .addField(':rotating_light: Administration', '`[en dev]`')
                .addField(':video_game: Fun', ' `!google`, `!say`')
                .addField(':newspaper: Info', ' `!stats[en dev]`, `!invite[en dev]`, `!discord[en dev]`, `!ping[en dev]`, `!profile[en dev]`')
                .setTimestamp()
		message.channel.send(embed)
    
	     }
  }
