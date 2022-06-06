const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let mentionedUser = message.mentions.users.first() || message.author;
    const member = message.mentions.members.first() || message.member;
    let target = message.mentions.users.first() || message.author


    if(!args[0]) return message.channel.send('Veuillez spécifier un utilisateur ! <a:Alerte1:754441316905123994>');
    if(member.id == "264922677318385664") return message.channel.send("_Je ne peux pas **report** mon maître, désolé..._ <a:Victime:754441345623654514>")
    if(member.id === message.author.id) return message.channel.send('*Bruh, vous ne pouvez pas vous auto-report !*');
    let reason = args.slice(1).join(" ");

    if(reason === undefined) reason = '`Non spécifié !`';

    message.channel.send(`${member} à bien été **report à __Discord__** pour : \`${reason}\` ! <a:TOS:843192638156701716> `)
};

module.exports.config = {
    name: "report"
};

