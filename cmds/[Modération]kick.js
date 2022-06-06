const {MessageEmbed} = require('discord.js');

module.exports.run = async(bot,message,args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Vous n\'avez pas la permission **BAN_MEMBERS** donc l\'action est imposible !')
  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('Je n\'ai pas la __permission:__ __**"ADMINISTRATEUR"**__, je ne peux donc pas faire le *ban perm !*')

  const member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  
  if(member.id == "264922677318385664") return message.channel.send("_Je ne peux pas **kick** mon maître, désolé..._")
  let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kickedUser) {
    return message.channel.send('__L\'utilisateur n\'as pas été trouver__ ')
  }

  let reason = args.join(' ').slice(22);
  if(kickedUser.hasPermission('BAN_MEMBERS')) {
    return message.channel.send('__**Vous ne pouvez pas kick cette personne car elle est plus gradée que vous**__')
  } else {
    const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
    let Channel = message.guild.channels.cache.find(
      (ch) => ch.name === "logs"
    );
    if (!Channel)
      return message.channel.send(
        `<a:warn:769824696337825824> **Il n'y a pas de canal dans cette guilde qui s'appelle**\`logs\`\n**Merci d'en crée un !**`
      );
    let Embed = new MessageEmbed()
      .setTitle(`Nouveaux Kick!`)
      .setDescription(
        `Le modérateur \`${message.author.tag}\` a kick l'utilisateur \`${member}\`! `
      )
      .setColor(`RANDOM`)
      .addFields(
        { name: "ID du moderateur", value: `${message.author.id}`, inline: false },
        { name: "TAG du moderateur", value: `${message.author.tag}`, inline: false },
        { name: "ID de la personne Kick", value: `${member.id}`, inline: false },
        { name: "TAG de la personne Kick", value: `${member}`, inline: false },
        { name: "Raison du Kick", value: `\`${reason}\``, inline: false },
        {
          name: "Date (Y/M/D)",
          value: `${new Intl.DateTimeFormat("FR").format(Date.now())}`,
          inline: true,
        }
      );
    Channel.send(Embed);

    message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])).send(`Vous êtes __expulser__ du serveur: **${message.guild.name}** par **${message.author.username}** pour **${reason}** !`).catch(console.error);

    message.guild.member(kickedUser).kick(reason)
    Channel.send(Embed);
      await member.kick({reason})
      message.channel.send(`** ${member} **a été __expulser__ pour: __**${reason} !**__ `)
  
    }}

module.exports.config = {
  name: "kick"
}