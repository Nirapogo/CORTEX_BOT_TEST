const Discord = require('discord.js')
const truck = require('discord-trucks');

module.exports.run = async (bot, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setImage(truck.randomTruck())
        .setColor("RANDOM")

        message.channel.send(embed)
    }
    module.exports.config = {
      name: "truck",
  }