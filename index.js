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
   client.user.setGame('vec la mort.');
   client.setMaxListeners(1);
  });
// création d'une commande (message, reponse)

client.on('message', msg => {
  if (msg.content === 'Mikado') {
    msg.reply('Moi même \n *(msg auto)* ');
  }

    
  // Création d'une commande (message, reponse)
  
    
    else if (msg.content === 'Asu') {
      msg.channel.send('Manges des NinjaCookies :cookie: !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'yr1') {
      msg.channel.send('!p your reality');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'yr2') {
      msg.channel.send('^^play your reality');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'yr3') {
      msg.channel.send('=play your reality');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l1') {
      msg.channel.send('!leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l2') {
      msg.channel.send('=leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l3') {
      msg.channel.send('^^leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'j1') {
      msg.channel.send('!join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'j2') {
      msg.channel.send('=join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'j3') {
      msg.channel.send('^^join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'helpyr') {
      msg.channel.send('1=Rythm \n2=Ayana \n3=Koya \n \nyr=play your reality \nl=leave \nj=join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
});

// client secret
  client.login(process.env.TOKEN);
