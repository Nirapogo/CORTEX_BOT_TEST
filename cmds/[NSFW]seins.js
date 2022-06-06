const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const fs = require("fs");
module.exports.run = async (client, message, args) => {

    var errMessage = "Merci de créé un salon **NSFW,** pour utilisé cette commandes ! <:18:767648849035526165>";
    if (!message.channel.nsfw) {
        message.react('<:TK_Elexyr:852972474735919173>');
  
        return message.reply(errMessage)}
    const image = await nsfw.boobs();
    const embed = new Discord.MessageEmbed()
        .setTitle(`Image de seins = `)
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`Demandé par : ${message.author.tag}`,message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
        .setImage(image);
    message.channel.send(embed);

  

};


module.exports.config = {
    name: "seins"

  };