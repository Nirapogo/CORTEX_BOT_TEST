const parseDuration = require('parse-duration'),
humanizeDuration = require('humanize-duration')
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
 
    module.exports.run = async(bot, message, args) => {

      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n\'avez pas la permission **BAN_MEMBERS** donc l\'action est imposible !`)
      if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**\"ADMINISTRATEUR\"**__, je ne peux donc pas faire le *ban temporaire !* ")

      const member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        if(member.id == "264922677318385664") return message.channel.send("_Je ne peux pas **ban perm** mon maître, désolé..._")
        if (!member) return message.channel.send('__Veuillez mentionner le membre à bannir.__')
        if (member.id === message.guild.ownerID) return message.channel.send('***Vous ne pouvez pas bannir le propriétaire du serveur***.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('*Vous ne pouvez pas Bannir ce membre.*')
        if (!member.bannable) return message.channel.send('**Le bot ne peut pas bannir ce membre.*')

        const duration = parseDuration(args[1])
        
        if (!duration) return message.channel.send('***Veuillez indiquer une durée valide.***\nLes durée sont : `s = seconde | h = heures | d = jours`.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'

        let Channel = message.guild.channels.cache.find(
          (ch) => ch.name === "logs"
        );
        if (!Channel)
          return message.channel.send(
            `__Il n'y a pas de canal dans cette guilde qui s'appelle__ \`logs\`\n**Merci d'en crée un !**`
          );
        let Embed = new MessageEmbed()
          .setTitle(`Nouveaux Temp-BAN!`)
          .setDescription(
            `Le modérateur \`${message.author.tag}\` a banis temporairement l'utilisateur \`${member}\`! `
          )
          .setColor(`RANDOM`) 
          .addFields(
            { name: "ID du moderateur", value: `${message.author.id}`, inline: false },
            { name: "TAG du moderateur", value: `${message.author}`, inline: false },
            { name: "ID de la personne Bannis Temporairement", value: `${member.id}`, inline: false },
            { name: "TAG de la personne Bannis Temporairement", value: `${member}`, inline: false },
            { name: "Durée du banisement en", value: `${humanizeDuration(duration, {language: 'fr'})}`, inline: false},
            { name: "Raison du Bannisement", value: `\`${reason}\``, inline: false },
            {
              name: "Date (Y/M/D)",
              value: `${new Intl.DateTimeFormat("FR").format(Date.now())}`,
              inline: true,
            }
          );
        Channel.send(Embed);

        message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])).send(`Vous êtes __banni temporairement__ du serveur: **${message.guild.name}** par ** ${message.author.username} ** pendant ** ${humanizeDuration(duration, {language: 'fr'})}** pour: __** ${reason} !**__`).catch(console.error);

        await member.ban({reason})
        setTimeout(() => {
            message.guild.members.unban(member)
            message.channel.send(`**${member.user.tag} a été automatiquement __débanni !__** `)
        }, duration)
        message.channel.send(`**${member}** a été __banni temporairement__ pendant **${humanizeDuration(duration, {language: 'fr'})},** pour: __**${reason} !**__ <a:Ban1:754441325579075734>`)

    }

      module.exports.config = {
        name: "tempban"
      }

      //duration d= day h=hours s= seconde

      
      