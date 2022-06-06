const block = "⬛";
const heart = "🏳️‍🌈";
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user;

	if(!args.length) {
		user = message.author;
	} else {
		user = message.guild.member(message.mentions.users.first());
	};
	if(!user || !message.guild.member(user)) return message.channel.send('⚠️ Cet utilisateur n\'existe pas !');
    
    const member = message.guild.member(user);
    
    let embed = new MessageEmbed()
    .setColor('RED')
    .setDescription("**Veuillez spécifier un utilisateur !** <a:Alerte1:754441316905123994>")
    if (!user) return message.channel.send(embed)

    let loveEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Niveau de **Gay** de __**${user} !**__ <a:Im_Gay:841399403842764821>`)
        .addField(`Gay à :`, ship())
    message.channel.send(loveEmbed)
}


function ship() {
    const hearts = Math.floor(Math.random() * 10) + 0; // u can remove + 0
    const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}% !`;
    return str;
}
module.exports.config = {
    name: "gay",
}