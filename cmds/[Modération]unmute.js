const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Vous n\'avez pas la permission **MANAGE_MESSAGES** donc l\'action est imposible ')
      if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**\"ADMINISTRATEUR\"**__, je ne peux donc pas faire le *unmute!*")
      
      const member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

      if (!member) return message.channel.send('Veuillez mentionner le membre à unmute.')
      if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez unmute le propriétaire du serveur.')
      if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas unmute ce membre. ')
      if (!member.manageable) return message.channel.send('Le bot ne peut pas unmute ce membre. ')
      const reason = args.slice(1).join(' ') || 'Aucune raison fournie.'
      const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted By Elexyr22 Le Bot')
      if (!muteRole) return message.channel.send('Il n\'y a pas de muterole.')

      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "logs"
      );
      if (!Channel)
        return message.channel.send(
          `__Il n'y a pas de canal dans cette guilde qui s'appelle__ \`logs\`\n**Merci d'en crée un !**`
        );
      let Embed = new Discord.MessageEmbed()
        .setTitle(`Nouveaux UNMUTE !`)
        .setDescription(
          `Le modérateur \`${message.author.tag}\` a unmute l'utilisateur \`${member}\`! `
        )
        .setColor(`RANDOM`)
        .addFields(
          { name: "ID du moderateur", value: `${message.author.id}`, inline: false },
          { name: "TAG du moderateur", value: `${message.author.tag}`, inline: false },
          { name: "ID de la personne Mute", value: `${member.id}`, inline: false },
          { name: "TAG de la personne Mute", value: `${member}`, inline: false },
          {
            name: "Date (Y/M/D)",
            value: `${new Intl.DateTimeFormat("FR").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
      await member.roles.remove(muteRole)
      message.channel.send(` **${member} a été __unmute !__** `)

      message.mentions.users.first().send(`Vous êtes __unmute__ du serveur : **${message.guild.name}** par **${message.author.username} !**`).catch(console.error);
}


module.exports.config = {
  name: "unmute"
}