const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Vous n\'avez pas la permission **BAN_MEMBERS** donc l\'action est imposible !')

    var str_filtrer = message.guild.members.cache.filter(member => member.bans)
    var str_map = str_filtrer.map(m => `${m.user.id}: ${m.user.username},`).join("\n")
    message.guild.fetchBans().then(bans => {
        message.channel.send(`Liste des membres **Ban** du serveur: __**${bans.size} !**__ `)
    }) 
    for(let i = 0; i < str_map.length; i += 1995) {
        const str_content = str_map.substring(i, Math.min(str_map.length, i + 1995));
        message.channel.send(`\`\`\`json\n${str_content}\`\`\``);
    }
}


module.exports.config = {
    name: "total-ban",

  }