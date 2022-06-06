
const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (client, message, args) => {

      var accounts = [
   "https://i.imgur.com/R5KBiYV.gif",
   "https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif",
   "https://i.pinimg.com/originals/bc/96/17/bc9617a2460e4640fcd9cf474bea2c10.gif",
   "https://giffiles.alphacoders.com/200/200628.gif",
   "https://i.kym-cdn.com/photos/images/newsfeed/001/039/474/715.gif",

    ];
    // Use that format so output sent will be MAIL_ADDRESS | PASSWORD. If out of stock change each of them with out of stock
    var output = accounts[Math.floor(Math.random()*accounts.length)];
    if (message.mentions.users.size < 1) return message.channel.send("<:NOPE:818042896690708521> Mentionner quelqu\'un à frapper")
    let user = message.guild.member(message.mentions.users.first());
    const pokeembed = new Discord.MessageEmbed()
    .setDescription((user.toString() + " a été frapper par " + message.author.toString()))
    .setImage(output)
    .setColor('RANDOM')
        message.channel.send(pokeembed);
  
};


module.exports.config = {
    name: "punch",
    description: "Frappe quel qu'un",
    usage: "punsh <@user>"

  };