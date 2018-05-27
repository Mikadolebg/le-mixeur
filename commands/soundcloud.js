const Command = require('./command')
const prefix = '!!'

module.exports = class Soundcloud extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'soundcloud')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://m.soundcloud.com/search?q=' + args.join('%20'))
	}
}
