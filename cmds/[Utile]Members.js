const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    message.channel.send(`Nous sommes __**${message.guild.memberCount}**__ sur le __serveurs !__\n\n **Merci à vous !**`)
};

module.exports.config = {
    name: "members"
};

