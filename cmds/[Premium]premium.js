const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setAuthor('Comment avoir le Premium du Bot ? 👑')
        .setDescription("Le __**Premium** coûte **0.50€** à **VIE**__  <a:Argent2:754441320403042378> \n\n **__Boost __ `la 𝕮𝖔𝖒𝖒𝖚𝖓𝖆𝖚𝖙é 𝖉𝖊 𝕰𝖑𝖊𝖝𝖞𝖗22 👑`,\n\n le temps de ton Boost,** <a:Niveau_Boost:838004529512448061> \n\n DM <@!264922677318385664>  pour achat ! <:Elexyr22:754441336849170543> \n\n __**Merci à se qu'il soutien le Bot !**__ <a:ECoeur1:754441320759820288>")
        .setTimestamp()
        .setFooter('By Elexyr22#0022 et FORWEN#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
        .setImage('https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'premium' 
    }
