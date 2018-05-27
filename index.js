
const Discord = require("discord.js");
const bot = new Discord.Client();
//Classes command
const Google = require('./commands/google');
const Say = require('./commands/say');
const Youtube = require('./commands/youtube');
const Deezer = require('./commands/deezer');
const Clear = require('./commands/clear');
const Help = require('./commands/help');
const Blague = require('./commands/blague');
const Quote = require('./commands/quote');
const Ssay = require('./commands/ssay');

//const Avatar = require('./commands/avatar');
//const Skribbl = require('./commands/skribbl');

//Librairie
const moment = require('moment');

//PREFIX
const prefix = '!!'

//Etat du bot
bot.on('ready', () => {
   console.log(`(1) Logged in as ${bot.user.tag}!`);
   bot.user.setGame('préparer une salade de fruits || !!help');
   bot.setMaxListeners(1);
  });


bot.on('message', function(message) { 	
    Google.parse(message)	

    Say.parse(message)

    Youtube.parse(message)

    Deezer.parse(message)

    Clear.parse(message)

    Help.parse(message)
	
    Blague.parse(message)
	
    Quote.parse(message)

    Ssay.parse(message)
	
    //Avatar.parse(message)
	
    //Skribbl.parse(message)
  
           if (message.content === prefix + 'pp') {
	
	   var embed = new Discord.RichEmbed()
	   .setColor("#2980b9")
	   .setDescription('Voici ta photo de profile:')
	   .setImage(message.author.avatarURL)
	   message.channel.send(embed)   
	}
		
		
	
           if (message.content === prefix + 'skribbl') {
	
	   var embed = new Discord.RichEmbed()
	   .setColor("#2980b9")
	   .setDescription('Montre nous tes tallents de Mickelangelo:')
	   .setAuthor('Skribbl', 'https://cdn.discordapp.com/attachments/429671705871515648/448932615513309204/thumbnail.png')
	   message.channel.send(embed)
        }
});
    
    bot.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438695803901706253").send( "Bienvenue à toi " + member.user.toString() + ", tu es actuellement demandeur d'asile et la population risque d'être hostile à ton égard. Il te suffit de t'entretenir avec Monsieur Pêche pour qu'il te donne tes papiers et ainsi devenir citoyen.");
    var role = member.guild.roles.find('name', "Demandeur d'asile");
    member.addRole(role);
    
});


//Envoie des message privé dans un channel spécifique
bot.on('message', function(message) {
  if (message.author.bot)
    return;
  const args = message.content.split(" ");
  let text = args.slice(0).join(" ");

  if(message.channel.type === 'dm')
    return bot.channels.get('448227240602238996').send({
      embed: {
        color: 2719929,
        description: `Nom: ${message.author.username}#${message.author.discriminator}\nID: ${message.author.id}\nMessage: ${text}`,
        thumbnail: {
          url: message.author.avatarURL
        }
      },
      files: message.attachments.array().map(a => a.url)
    });
});

// client secret
  bot.login(process.env.TOKEN);
