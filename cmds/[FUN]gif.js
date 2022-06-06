const Discord = require("discord.js");
const gifSearch = require("gif-search")

module.exports.run = async (bot, message, args) => {

let argsgif = message.content.split(" ").join(" ").slice(1);
gifSearch.random(argsgif).then(
  gifUrl => {

    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.tag, (message.author.displayAvatarURL({dynamic: true})))
      .setImage(gifUrl)
      .setTimestamp()
      .setFooter(bot.user.tag, (bot.user.displayAvatarURL({dynamic: true})))
    message.channel.send(embed);
  });
}
module.exports.config = {
    name: "gif",
}