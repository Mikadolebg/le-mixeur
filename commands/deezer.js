const Command = require('./command')
const prefix = '!!'

module.exports = class Deezer extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'deezer')
	
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://www.deezer.com/search/' + args.join('%20'))
	}
}
