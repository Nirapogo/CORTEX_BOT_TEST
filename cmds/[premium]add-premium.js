const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./prem.json');
    const db = low(adapter);
    var founder = [
        "889538933392801832"
    ]

    if (founder.includes(message.author.id)) {
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.channel.send("*Veuillez mentionner un membre ou ID !*");

        if (!db.get("Premium").find({ user_id: member.id }).value()) {
            db.get("Premium").push({ user_id: member.id }).write()
            message.channel.send("__**L'utilisateur <@" + member.id + "> est désormais ajouté en tant que Premium !**__")
            message.guild.members.cache.get(args[0]).send("**GG, tu désormais ajouté au Premium !**")
        } else {
            message.channel.send("***L'utilisateur <@" + member.id + "> est déja Premium !***")
        }
    } else {
        message.channel.send("__**Uniquement les User#0001 peux utiliser cette commande !**__")
    }
}

module.exports.config = {
    name: "p-add",

}