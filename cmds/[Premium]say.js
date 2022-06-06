const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    const channel = message.guild.channels.cache.find(c => c.id === '812759458241445888'); //Votre bot doit être sur le serveur.
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./prem.json');
    const db = low(adapter);
    let author = message.author.id;

    if(!db.get('Premium').find({ user_id: author }).value()) {
        message.channel.send("Vous ne possédez pas le __**\"Premium du Bot\"**__, <a:Nop:836606008964415529> \n\nfaite ``e!premium`` pour savoir comment l'avoir ! <a:couronne:836754425133006918>").catch(console.error); 
    }

    else {

        if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer le *say* le salon ! <a:Victime:754441345623654514>")
        message.delete()
    
        let str = args.join(" ");
        if(!str) return message.channel.send("Vous devez spécifier le message que je dois envoyer !").catch(console.error);
    
        message.channel.send(args.join(" "));
        message.channel.send(`De : ${message.author}`)
}};

module.exports.config = {
    name: "say-p"
};

