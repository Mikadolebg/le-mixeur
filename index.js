/ on off
// var
const restify = require("restify");
var server = restify.createServer();
server.listen(process.env.PORT || 5000, function () {
    console.log('%s listening to %s', server.name, server.url); 
});
// Ne change pas le script ce POINT


// language utiliser par le bot 

const Discord = require("discord.js");

//Etat du bot Mikado BOT

const client = new Discord.Client();

client.on('ready', () => {
   console.log(`(1) Logged in as ${client.user.tag}!`);
   client.user.setGame('donner cours de français');
   client.setMaxListeners(1);
  });
// création d'une commande (message, reponse)
//Zelfy=404497208185061376 | if (msg.author.id !== '404497208185061376')
//Speculoos=423118623876448296
//Mikado=301913733536415755
//msg.author.id !== '332474080131284993')
client.on('message', msg => {
    if (msg.content === 'l6786') {
    msg.channel.send('Moi même');
  }
    
});

// client secret
  client.login(process.env.TOKEN);
