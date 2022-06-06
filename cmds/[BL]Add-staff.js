const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./db.json');
    const db = low(adapter);
    var founder = [
        "889538933392801832"
    ]

    if (founder.includes(message.author.id)) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply("Veuillez mentionner un membre ou ID !");

        if (!db.get("🔧➔Team Blacklist").find({ user_id: member.id }).value()) {
            db.get("🔧➔Team Blacklist").push({ user_id: member.id }).write()
            message.channel.send("__**<@" + member.id + "> est désormais ajouté en tant que Admin !**__ ")
        } else {
            message.reply("**<@" + member.id + "> est déjà Admin !**")
        }
    } else {
        message.channel.send("__**Uniquement User#000 peux utiliser cette commande !**__")
    }
}

module.exports.config = {
    name: "add-admin"
}