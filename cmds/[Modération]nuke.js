const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };


module.exports.run = async (bot, message, args) => {
    if(!message.guild) return;
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(` Vous n\'avez pas la permission __**"\ADMINISTRATEUR\"**__ donc l\'action est imposible ! `)
    if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**\"ADMINISTRATEUR\"**__, je ne peux donc *nuke* le salon ! ")
    message.channel.clone({reason: ``}).then(c => c.setPosition(message.channel.position) && c.send(`__**Le Channel à été Nuke !**__\n\n https://cdn.discordapp.com/attachments/805474438551568394/805476517601476660/nuke-bomb.gif`))
    message.channel.delete() 

    };
    
module.exports.config = {
    name: "nuke",
    description: "- Duplique le salon et supprime l'ancien",
  };