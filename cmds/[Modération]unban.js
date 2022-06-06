const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');



module.exports.run = async (bot, message, args) => {
    
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n\'avez pas la permission **BAN_MEMBERS** donc l\'action est imposible !`);
        if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**\"ADMINISTRATEUR\"**__, je ne peux donc pas faire le *unban !*")
        const member = args[0];

        if (!member) {
             return message.channel.send(`Merci de mettre l'**ID** de la personne que vous shouaitez débanir ! `)
        }
        let Channel = message.guild.channels.cache.find(
            (ch) => ch.name === "logs"
          );
          if (!Channel)
            return message.channel.send(
              `__Il n'y a pas de canal dans cette guilde qui s'appelle__ \`logs\`\n**Merci d'en crée un !**`
            );
          let Embed = new MessageEmbed()
            .setTitle(`Nouveaux UNBAN !`)
            .setDescription(
              `Le modérateur \`${message.author.tag}\` a Debanis l'utilisateur \`${member}\`! `
            )
            .setColor(`RANDOM`)
            .addFields(
              { name: "ID du moderateur", value: `${message.author.id}`, inline: false },
              { name: "TAG du moderateur", value: `${message.author}`, inline: false },
              { name: "TAG de la personne Debanis", value: `${member}`, inline: false },
              {
                name: "Date (Y/M/D)",
                value: `${new Intl.DateTimeFormat("FR").format(Date.now())}`,
                inline: true,
              }
            );
          Channel.send(Embed);

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`**<@${member}>** est __**débannis**__ du **serveur !**`)
        } catch (e) {
            return message.channel.send(`une erreur est survenue merci de ressayer !`)
        }

    }
    module.exports.config = {
      name: "unban",
    }