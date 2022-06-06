const Discord = require('discord.js')
const backup = require('discord-backup')

module.exports.run = async(bot,message,args) => {
let backupID = args[0];
    if (!backupID) {
      return message.channel.send("**Vous devez spécifier un ID de Backup Valide !** ");
    }
    // Fetch the backup
    backup.fetch(backupID).then((backupInfos) => {
      const date = new Date(backupInfos.data.createdTimestamp);
      const yyyy = date.getFullYear().toString(),
        mm = (date.getMonth() + 1).toString(),
        dd = date.getDate().toString();
      const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
      let embed = new Discord.MessageEmbed()
        .setAuthor("Backup Informations")
        // Display the backup ID
        .addField("Backup ID", backupInfos.id, false)
        // Displays the server from which this backup comes
        .addField("Server ID", backupInfos.data.guildID, false)
        // Display the size (in mb) of the backup
        .addField("taille", `${backupInfos.size} kb`, false)
        // Display when the backup was created
        .addField("Date de création de la backup", formatedDate, false)
        .setColor("#FF0000");
      message.channel.send(embed);
    }).catch((err) => {
      // if the backup wasn't found
      return message.channel.send("**Aucune backup trouvée pour** `" + backupID + "`!");
    });
}

module.exports.config = {
name: 'info' 
}