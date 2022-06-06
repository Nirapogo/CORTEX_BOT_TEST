const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    var founder = [
        "264922677318385664"
    ]

    if (founder.includes(message.author.id)) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply("Veuillez mentionner un membre ou ID !");

        if (!db.get("🔧➔Team Blacklist").find({ user_id: member.id }).value()) {
            message.channel.send("L'utilisateur <@" + member.id + "> ne fait pas parti du staff.");
        } else {
            db.get("🔧➔Team Blacklist").remove({ user_id: member.id }).write()
            message.channel.send("L'utilisateur <@" + member.id + "> est retiré du staff.");
        }
    } else {
        message.channel.send("__**Uniquement User#0001 peux utiliser cette commande !**__")
    }
}

module.exports.config = {
    name: "remove-staff"
}