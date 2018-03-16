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
//Mikado=301913733536415755
// Asuiky=342376615566770178
//Drixy=337354503806517249
client.on('message', msg => {
  if (msg.content === 'Mikado') {
  if (msg.author.id !== '301913733536415755')
  if (msg.author.id !== '342376615566770178')
  if (msg.author.id !== '337354503806517249')
   return;
    msg.reply('Moi même \n*(msg auto)* ');
  }

    
  
    //----------Commandes Fun
    
    else if (msg.content === 'Asu') {
      if (msg.author.id !== '301913733536415755')
      if (msg.author.id !== '342376615566770178')
      if (msg.author.id !== '337354503806517249')
       return;
      msg.channel.send('Manges des NinjaCookies :cookie: !');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'patatoes cycle') {
      if (msg.author.id !== '301913733536415755')
      if (msg.author.id !== '342376615566770178')
      if (msg.author.id !== '337354503806517249')
       return;
      msg.channel.send(':woman: :ear_of_rice: :point_right: :potato: :point_right: :fries: :point_right: :poop:');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    
    
    //--------------Raccourcis--------------
    
    else if (msg.content === 'rnm1') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!p https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'rnm2') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('=play https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'rnm3') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('^^play https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
   
    else if (msg.content === 'rnm4') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!!!play https://youtu.be/wbY97-hdD5c');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l1') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l2') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('=leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l3') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('^^leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'l4') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!!!leave');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'j1') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'j2') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('=join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'j3') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('^^join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    
    else if (msg.content === 'j4') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!!!join');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 's1') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 's2') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('=skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
   
    else if (msg.content === 's3') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('^^skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 's4') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('!!!skip');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
    else if (msg.content === 'helpmik') {
      if (msg.author.id !== '301913733536415755') return;
      msg.channel.send('------------------------------------------------------- \n__**Bot:**__ \n1=Rythm \n2=Ayana \n3=Koya \n4=DabBot \n------------------------------------------------------- \n__**Commandes Bot:**__ \nl=leave \nj=join \ns=skip \n------------------------------------------------------- \n__**Raccourcis Play:**__ \nrnm=piano cover of "For The Damaged - Coda" \n-------------------------------------------------------');
      client.setMaxListeners(1);
      client.setMaxListeners(1);
    }
    
});

// client secret
  client.login(process.env.TOKEN);
