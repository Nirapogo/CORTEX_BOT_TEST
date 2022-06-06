const block = "⬛";
const heart = "♥";
const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user = message.author;

    let user1 = message.mentions.members.last(); 
    
    let embed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription("**Veuillez spécifier un utilisateur !** <a:Alerte1:754441316905123994>")
    if (!user) return message.channel.send(embed)

    let loveEmbed = new MessageEmbed()
        .setColor('RED')
        .setDescription(`Niveau **d'amour** entre ${user} et ${user1} ! <a:ECoeur1:754441320759820288>`)
        .addField(`**=**`, ship())
    message.channel.send(loveEmbed)
}


function ship() {
    const hearts = Math.floor(Math.random() * 10) + 0; // u can remove + 0
    const str = `${heart.repeat(hearts)}${block.repeat(10 - hearts)} ${hearts * 10}%`;
    return str;
}
module.exports.config = {
    name: "lc",
}