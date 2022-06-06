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

    message.channel.send('<:Ping2:754441335251009636> bien envoyé à **Elexyr22#0022** !')
}};

module.exports.config = {
    name: "pinge"
};

