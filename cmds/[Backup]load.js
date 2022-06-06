const Discord = require('discord.js')
const backup = require('discord-backup')

module.exports.run = async(bot,message,args) => {
     // Check member permissions
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send('Vous n\'avez pas la permission __**"\ADMINISTRATEUR\"**__ donc l\'action est imposible !');
    }
    let backupID = args[0];
    if (!backupID) {
      return message.channel.send("**Vous devez spécifier un ID de Backup Valide !** ");
    }
    // Fetching the backup to know if it exists
    backup.fetch(backupID).then(async () => {
      // If the backup exists, request for confirmation
      message.channel.send("**Lorsque la backup est chargée, tous les channel, rôles, etc. seront remplacés! Tapez `oui` pour Confirmer !** ");
      await message.channel.awaitMessages(m => (m.author.id === message.author.id) && (m.content === "oui"), {
        max: 1,
        time: 20000,
        errors: ["time"]
      }).catch((err) => {
        // if the author of the commands does not confirm the backup loading
        return message.channel.send("*Le temps est écoulé ! Chargement de la backup annulé !* ");
      });
      // When the author of the command has confirmed that he wants to load the backup on his server
      message.author.send("**Commencement du Chargement de la Backup !**");
      // Load the backup
      backup.load(backupID, message.guild).then(() => {
        // When the backup is loaded, delete them from the server
        //backup.remove(backupID);
      }).catch((err) => {
        // If an error occurred
        return message.author.send("*Désolé, une erreur s'est produite ...*");
      });
    }).catch((err) => {
      console.log(err);
      // if the backup wasn't found
      return message.channel.send("**Aucune backup trouvée pour** `" + backupID + "`!");
    });
}

module.exports.config = {
name: 'load' 
}