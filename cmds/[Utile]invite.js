const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()
        message.delete();

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("__**Clique ici, pour ajouter le bot, à votre serveur Discord !**__ <a:Youpi:754441340368191519>")
        .setURL("https://discordapp.com/oauth2/authorize?client_id=701434412176375829&scope=bot&permissions=2146958847")
        .setDescription("__**Merci à toi !**__ <a:ECoeur1:754441320759820288>")
        .setImage("https://cdn.discordapp.com/attachments/765158731456970752/767326838204268594/Logo.jpg")
        message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'invite' 
    }
