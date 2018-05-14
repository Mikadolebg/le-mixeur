const Discord = require('discord.js');
const Command = require('./command')
const prefix = '!!'

module.exports = class Blague extends Command {



	static match(message) {
		return message.content.startsWith(prefix + 'blague')
	}

	static action(message) {

		let randnum = Math.floor(Math.random() * 10)

		if (randnum == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Qu\'est-ce qui a un oeil, deux dents et trois jambes? \n__**Réponse:**__ Ta mère.')
			.setFooter('Les meilleures blagues de Monsieur Peche')
			message.channel.sendEmbed(embed)

		} else if(randnum == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Dans un asile, un fou se promène avec une laisse avec, accrochée au bout, une brosse a dent. Un gardien de prison, sachant qu\’il est fou, lui dit : \n– Il est beau votre chien.  \nLe fou le regarde bizarrement et lui dit : \n– De quoi parlez-vous ? Ce n\’est pas un chien, mais une brosse à dents ! Le gardien, un peu confus, décide de s\'en aller. Le fou regarde alors sa brosse à dents et lui dit : \n– On l\’a bien eu, hein, Rex ?')
			.setFooter('Les meilleures blagues de Monsieur Peche')
			message.channel.sendEmbed(embed)

		} else if(randnum == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Une jeune femme en manque rentre dans un sex-shop. Le vendeur lui sort le tout dernier modèle « le Pénis vaudou » puis il explique à la cliente le fonctionnement de l’appareil: \n– Ce vibromasseur est révolutionnaire. Vous n’avez qu’à dire « pénis vaudou » deux fois et il ira à l’endroit que vous dîtes. La jeune femme sceptique, demande si elle peut essayer et dit: \n– « pénis vaudou », « pénis vaudou, dans la main! \nEt le vibromachin se rend aussitôt dans sa main. \n\nStupéfaite elle décide d’acheter illico. En rentrant dans sa voiture, impatiente, elle s’empresse de l’essayer: \n– « pénis vaudou », « pénis vaudou », entre mes deux jambes ! \n \nUn peu plus tard quand la jeune femme ne roulait pas très droit, un policier l’interpelle: \n– Vous devez être saoule madame pour conduire de cette façon ! \nElle lui répond: \n– Ce n’est pas ma faute monsieur l’agent, c’est le pénis vaudou! \nLe policier qui n’aime pas qu’on se moque de lui s’énerve! \n– Pénis vaudou? pénis vaudou !!! mon cul !!! \n– aie!')
			.setFooter('Les meilleures blagues de Monsieur Peche')
			message.channel.sendEmbed(embed)

		} else if(randnum == 3) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('De nos jours, le zip ça devient rar...')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 4) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Comment un informaticien répare sa voiture quand elle est en panne ? \n Il sort de la voiture, ferme toutes les fenêtres, retourne dans la voiture, et la redémarre.')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 5) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Un geek ne descend pas du métro. Il libère la RAM...')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 6) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('A quoi sert Internet Explorer ? \n A télécharger Google Chrome.')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 7) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Un geek sait compter jusqu\'a 403 apres pour lui c\'est introuvable')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 8) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Quand quelqu\'un de triste joue aux jeux vidéo pour oublier, on peut dire qu\'il se console...')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)

		} else if(randnum == 9) {

			var embed = new Discord.RichEmbed()
			.setColor("#AA1923")
			.setDescription('Les filles c\'est comme les noms de domaine. \n Celles que j\'aime sont déjà prises. :sob:')
			.setFooter('Les meilleurs blagues de DevBot')
			message.channel.sendEmbed(embed)
		}

	}



}
