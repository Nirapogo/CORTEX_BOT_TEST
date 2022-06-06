const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {

  const channel = message.guild.channels.cache.find(c => c.id === '812759458241445888'); //Votre bot doit être sur le serveur.
  const low = require('lowdb');
  const FileSync = require('lowdb/adapters/FileSync');
  const adapter = new FileSync('./prem.json');
  const db = low(adapter);
  let author = message.author.id;

  if(!db.get('Premium').find({ user_id: author }).value()) {
      message.channel.send("Vous ne possédez pas le __**\"Premium du Bot\"**__, <a:Nop:836606008964415529> \n\nfaite ``e!premium`` pour savoir comment l'avoir ! <a:couronne:836754425133006918>").catch(console.error); 
  }

  else {
    
        const snipes = bot.snipes.get(message.channel.id) || [];
        const snipedmsg = snipes[args[0] - 1 || 0];
        if (!snipedmsg) return message.channel.send("*Pas un snipe valide !* <a:pleure2:839428288027295744>");
        const Embed = new MessageEmbed()
            .setAuthor(snipedmsg.author.tag, snipedmsg.author.displayAvatarURL({ dynamic: true, size: 256 }))
            .setColor("RANDOM")
            .setDescription(snipedmsg.content)
            .setTimestamp()
            .setFooter(`Le: ${snipedmsg.date} | ${args[0] || 1}/${snipes.length}`)
        if (snipedmsg.attachment) Embed.setImage(snipedmsg.attachment);
        message.channel.send(Embed);
    
  }}
  


  module.exports.config = {
    name: 'snipe' 
    }