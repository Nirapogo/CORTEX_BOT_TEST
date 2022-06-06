const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if (!args[1]) return message.reply("S'il te plaît, pose-moi une question !");
  
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non"];
    let question = args.slice(0).join(" ");
    let res = Math.floor(Math.random() * replies.length);
    
    let askEmbed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor('RANDOM')
      .addField("Question", question)
      .addField("Réponse", replies[res]);
    
    message.channel.send(askEmbed)
};

module.exports.config = {
    name: '8ball'
};