const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./prem.json')
    const db = low(adapter)
    var founder = [
        "498029456850681886",
        "264922677318385664",
        "173142018229403655",
        "857290269540220928",
        "624117399557373962",
        "382598773718908929",
        "525362090500685833"
    ]

    if (founder.includes(message.author.id)) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!member) return message.reply("**Veuillez mentionner un membre ou ID !**");

        if (!db.get("Premium").find({ user_id: member.id }).value()) {
            message.channel.send("**L'utilisateur <@" + member.id + "> n'est pas __\"Premium\"__ !** <a:nonoxCatdoigtdanslecul:841399403490574347>");
        } else {
            db.get("Premium").remove({ user_id: member.id }).write()
            message.channel.send("**L'utilisateur <@" + member.id + "> est retiré du __\"Premium\"__ !** <a:Oof4:754441358877655052>");
            message.guild.members.cache.get(args[0]).send("*Vous venez d'être retiré du \"**Premium\" ** !* <a:Cache:843968320310345799>")
        }
    } else {
       message.channel.send("<a:Alerte1:754441316905123994>  __**Uniquement les `《👑》BRAS-DROIT` peux utiliser cette commande !**__ <a:Cheh22:851447183773138944>")
    }
}

module.exports.config = {
    name: "p-remove"
}