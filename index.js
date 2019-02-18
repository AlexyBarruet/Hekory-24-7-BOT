const Discord = require ('discord.js');
const bot = new Discord.Client();
var prefix = '.';

bot.on('ready', function(){
    console.log('Prêt à fonctionner');
})

    bot.login('NTQ3MDA1ODY3Njk4OTQ2MDQ5.D0wlYw.WJo8VAeURxkKTjAHhXLRM486W4w');
    
    bot.on('message', message =>{
        if(message.content === 'salut'){
        message.reply("hey ^^")
        console.log('hey')
    }
    if(message.content === prefix + "info"){
        message.channel.sendMessage("Merci de contacter @Jσɧŋ#9195 pour ceci")
        console.log('commande info')
        message.delete();
    }
})
