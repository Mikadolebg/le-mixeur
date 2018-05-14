const Command = require('./command')
const prefix = '!!'

module.exports = class Google extends Command {

	static match(message) {
		return message.content.startsWith(prefix + 'google')
	}

	static action(message) {
		let args = message.content.split(' ')
		args.shift()
		message.channel.send('https://www.google.fr/#q=' + args.join('+'))
	}
}
