const Discord = require("discord.js");

module.exports.run = async (bot, message, args, msg) => {
    const channel = message.guild.channels.cache.find(c => c.id === '840516182155067402'); //Votre bot doit être sur le serveur.

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<:NOPE:818042896690708521> Vous n'avez pas la permission ! [ADMINISTRATOR]");
    
    var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!user) return message.reply('<:NOPE:818042896690708521> Veuillez mentionner une personne ou son ID !');

    let reason = args[1];
    if(!reason) return message.reply('<:NOPE:818042896690708521> Veuillez spécifier une raison & une preuve !');

    let embed = new Discord.MessageEmbed()
    .setColor("#00fff8")
    .setTitle("Demande BlackList.")
    .addField("**👥 Membre :**", user, true)
    .addField("**🆔 ID Membre :**", user.id, true)
    .addField("**📜 Raison :**", reason, true)
    .addField("**📜 Serveur :**", `${message.guild.name} (${message.guild.id})`)
    .setFooter(`Commande effectuée par ${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true}))
    .setTimestamp()
    .setThumbnail(message.guild.iconURL({ dynamic: true }))   

    var embed1 = new Discord.MessageEmbed()
    .setDescription("Votre demande de blacklist a bien été envoyée ! Le staff analysera votre demande au plus vite !")
    .setColor("RED")
    .setFooter(message.author.tag, bot.user.displayAvatarURL());

    channel.send(embed)
    message.channel.send(embed1);
}

module.exports.config = {
    name: "dblack",
    description: "Permets d'envoyer une demande de blacklist.",
    usage: "dblack <user/user_id> <reason>"
}