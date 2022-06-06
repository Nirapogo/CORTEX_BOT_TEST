const { MessageEmbed } = require("discord.js")
const fs = require("fs");

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

	if (!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer l\'*embed* le salon ! <a:Victime:754441345623654514>")
	let str = args.join(" ");
	if(!str) return message.channel.send("**Veuillez fournir du contenu !**");
	message.delete();

	const embed = new MessageEmbed()
	.setDescription(str)
    .setColor('RANDOM')
    .setFooter(`De : ${message.author.tag}`)
    message.channel.send(embed)



}};


module.exports.config = {
    name: "embed-p"

  };