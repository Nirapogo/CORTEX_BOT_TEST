const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  let inviteembed = new Discord.MessageEmbed()

        const embed = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle('Comment avoir le premium du Bot ?')
        .setDescription("Le __**premium** coûte 2€ à vie__  *(Actuellement)* et à pour unique but de __financer les machine ou le coût du Dev !__ <a:Devdiscord2:754441344092602368> \n\n__**Comment l'avoir gratis ?**__ <a:Argent2:754441320403042378> \n\n **-__Boost x2__ le serveur le temps de ton boost,** <a:Niveau_Boost:838004529512448061> \n\n -Invite Reward *(A venir)* <a:Attente1:754441322059923538> \n\n -Giveaways sur mon serveur ! (`e!discord`) <a:Givewaycolor:754441335859314690> \n\n -Les personne qui __add le bot avant la **certif,**__ auront le **premium  gratuit et à vie,** il ne seras donnée que au **compte couronne !** *(Owner du serveur)* <a:Valide_Or:836611453851140097> \n\n Je ne souhaite pas **gagner de l'argent, juste pouvoir améliorer le bot !** <a:Non:754441323989303488> \n\n __**Un premium acheté =** 1 giveaways premium 1 semaine no req fait !__ <a:Youpi:754441340368191519> \n\n DM <@!264922677318385664>  pour achat ! <:Elexyr22:754441336849170543> \n\n __**Merci à se qu'il soutien le serveurs + le bot  !**__ <a:ECoeur1:754441320759820288> ")
        .setTimestamp()
        .setFooter('By Elexyr22#0022 et FORWEN#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
        .setImage('https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif')
  message.channel.send(embed)  
  }


  module.exports.config = {
    name: 'premium' 
    }
