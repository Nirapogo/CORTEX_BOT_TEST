const Discord = require('discord.js')
const backup = require('discord-backup')

module.exports.run = async(bot,message,args) => {
     // Check member permissions
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send('Vous n\'avez pas la permission __**"\ADMINISTRATEUR\"**__ donc l\'action est imposible !');
    }
    // Create the backup
    backup.create(message.guild, {
      maxMessagesPerChannel: 0,
      jsonSave: true,
      jsonBeautify: true,
    }).then((backupData) => {
      // And send informations to the backup owner
         message.author.send("La backup a été créée! Pour le charger, tapez cette commande sur le serveur de votre choix :`" + "!" + "load " + backupData.id + "`");
      message.channel.send("La Backup créé avec succès. L'ID de Backup a été envoyé dans tes DM ! ");
    });
}

module.exports.config = {
name: 'create' 
}