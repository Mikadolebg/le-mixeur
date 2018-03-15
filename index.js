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
    
    else if (msg.content === 'rnm1') {
      msg.channel.send('!p https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'rnm2') {
      msg.channel.send('=play https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'rnm3') {
      msg.channel.send('^^play https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
   
    else if (msg.content === 'rnm4') {
      msg.channel.send('!!!play https://youtu.be/wbY97-hdD5c');
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
    
    else if (msg.content === 'l4') {
      msg.channel.send('!!!leave');
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
    
    
    else if (msg.content === 'j4') {
      msg.channel.send('!!!join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 's1') {
      msg.channel.send('!skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 's2') {
      msg.channel.send('=skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
   
    else if (msg.content === 's3') {
      msg.channel.send('^^skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 's4') {
      msg.channel.send('!!!skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'helpmik') {
      msg.channel.send('------------------------------------------------------- \n__**Bot:**__ \n1=Rythm \n2=Ayana \n3=Koya \n4=DabBot \n------------------------------------------------------- \n__**Commandes Bot:**__ \nl=leave \nj=join \ns=skip \n------------------------------------------------------- \n__**Raccourcis Play:**__ \nrnm=piano cover of "For The Damaged - Coda" \n-------------------------------------------------------');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
  
    else if (msg.content === 'patatoes cycle') {
      msg.channel.send(':woman: :ear_of_rice: :point_right: :potato: :point_right: :fries: :point_right: :poop:');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
});

// client secret
  client.login(process.env.TOKEN);
