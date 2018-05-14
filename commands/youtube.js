const Command = require('./command')

module.exports = class Youtube extends Command {

	static match(message) {
		return message.content.startsWith('!ytb')
	
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://www.youtube.com/results?q=' + args.join('+'))
	}
}
