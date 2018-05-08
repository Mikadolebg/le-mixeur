
const Discord = require("discord.js");
const client = new Discord.Client();
const Google = require('./commands/google');
const moment = require('moment');

client.on('ready', () => {
   console.log(`(1) Logged in as ${client.user.tag}!`);
   client.user.setGame('donner cours de français');
   client.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

bot.on('message', function(message) { 	
    Google.parse(message)	
});
    
    client.on('guildMemberAdd', member => {
    console.log('Membre ' + member.user.username + " a rejoind le serveur")
    member.guild.channels.find("id", "438731113561587724").send( member.user.toString() + ", Bienvenue Dans l'Ecole :wink: !");
    var role = member.guild.roles.find('name', 'Eleve');
    member.addRole(role);
    
});

// client secret
  client.login(process.env.TOKEN);
