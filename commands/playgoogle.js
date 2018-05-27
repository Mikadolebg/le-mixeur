const Command = require('./command')
const prefix = '!!'

module.exports = class Playgoogle extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'playgoogle')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://play.google.com/store/search?q=' + args.join('%20'))
	}
}
