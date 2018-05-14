const Discord = require('discord.js')
const Command = require('./command')
const prefix = '!!'

module.exports = class Scribble extends Command {

	static match(message) {
  
  return message.content.startsWith(prefix + 'Scribble')
	}

	static action(message) {
		
		message.channel.send('__**Toujours chaud pour un p\'tit skribble !**__ \nhttps://skribbl.io/')
    
	     }
  }
