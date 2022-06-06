const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {

  let user;

	if(!args.length) {
		user = message.author;
	} else {
		user = message.guild.member(message.mentions.users.first());
	};

	if(!user || !message.guild.member(user)) return message.channel.send('⚠️ Cet utilisateur n\'existe pas !');
    
  const member = message.guild.member(user);

    if(!member) return message.channel.send("Veuillez mentionner un membre ou ID !")

    let replies = ["Extrême Gauche", "Gauche", "Centre", "Droite", "Extrême Droite"]

    let res = Math.floor(Math.random() * replies.length);
    
    let askEmbed = new Discord.MessageEmbed()
      .setAuthor(member.user.tag)
      .setColor('RANDOM')
      .setTimestamp()
      .setDescription(`Choix Politique = **__"${replies[res]}"__**`);
    
    message.channel.send(askEmbed)
};

module.exports.config = {
    name: 'poli'
};