const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Scribble extends Command {

	if (message.content === 'skribble') {
		message.channel.send('__**Toujours chaud pour un p\'tit skribble !**__ \nhttps://skribbl.io/')
    
	     }
  }
