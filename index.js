// on off
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
   client.user.setGame('manger des Patates');
   client.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

client.on('message', msg => {
  if (msg.content === 'Mikado') {
    msg.channel.send('Moi même \n *(msg auto)* ');
  }

    
  // Création d'une commande (message, reponse)
  
    
    else if (msg.content === 'Asu') {
      msg.channel.send('Manges des NinjaCookies :cookie: !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'Nono') {
      msg.channel.send('est amoureux !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'Nana') {
      msg.channel.send('est amoureuse !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
     
    else if (msg.content === 'Nono est amoureux') {
      msg.channel.send('On a compris !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'Nana est amoureuse') {
      msg.channel.send('On a compris !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
});

// client secret
  client.login(process.env.TOKEN);
