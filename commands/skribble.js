const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Scribbl extends Command {
	
	if (message.content === prefix + 'skribbl') {
	
	   var embed = new Discord.RichEmbed()
	   .setColor("#2980b9")
	   .setDescription('__**Toujours chaud pour un p\'tit skribbl !**__')
	    message.channel.send(embed)
	    message.channel.send('https://skribbl.io/')


	     }
  }
