const Discord = require('discord.js');
const fs = require("fs");
const dateFormat = require("dateformat");

exports.run = async(client, message, args) => {

    const black_list = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'));

    const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send("Veuillez mentionner un membre ou ID !");//Check Si Le Membre.

    if(!black_list[member.id]) message.channel.send(`L'ID ${member} (${member.id}) n'est pas dans notre BlackList.`)//Si le membre n'est pas BlackList.
    
    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("BlackList Check")
    //.setThumbnail(member.displayAvatarURL({ dynamic: true }))
    .setFooter(message.author.tag, client.user.displayAvatarURL())
    .setDescription(
    `Membre : **${member.username}#${member.discriminator} (${member.id})**\n` +
    `BlackList : \n Reason : **${black_list[member.id].reason.catch}**\n` +
    `Par : **${black_list[member.id].authorb} (${black_list[member.id].authorbid})**\n` +
    `Quand ? : **${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}**`
    );
    message.channel.send({embed});
    //Cet EMBED est envoyé lorsque le membre est dans BlackList.
}
  
  module.exports.config = {
    name: 'checkbl'
  };