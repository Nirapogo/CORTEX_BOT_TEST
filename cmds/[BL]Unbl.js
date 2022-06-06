const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (bot, message, args) => {
    const channel = message.guild.channels.cache.find(c => c.id === '840516182155067402'); //Votre bot doit être sur le serveur
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    let author = message.author.id;

    if (!db.get("🔧➔Team Blacklist").find({ user_id: author }).value()) {
        message.channel.send("<a:Alerte1:754441316905123994>  __**Uniquement Elexyr22#0022 et FORWEN#0001 peux utiliser cette commande !**__ <a:Cheh22:785554431324192839>"); //Check De Permissions.
    } else {

        const black_list = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'));
        let authorb = message.author.tag;
        let authorbid = message.author.id;

        let member = await bot.users.fetch(args[0]);
        if(!member) return message.channel.send("**Veuillez mentionner un membre ou ID !**");

        let reason = args[1];
        if (!reason) return message.channel.send("**Veuillez spécifier une raison !**");

                try {
            black_list[member.id].blacklist--;
            fs.writeFileSync('./blacklist.json', JSON.stringify(black_list))
            message.guild.members.unban(member)
            message.channel.send(`**${member} vient juste d'être retiré de notre blacklist par ${authorb} !**`)
            
            const embed = new Discord.MessageEmbed()
            .setTitle(`New WhiteList`)
            .setColor("#00fff8")
            .setDescription(`${member} (${member.id}) est UnBlackList\nRaison ${reason}`)
            .setThumbnail(bot.user.displayAvatarURL({ dynamic: true }))
            .setFooter(`WhiteList By ${authorb} (${authorbid})`)
            .setThumbnail(member.displayAvatarURL({ dynamic: true }))
            channel.send(embed);

            message.channel.send(` ${id} est bien retiré de notre blacklist par ${authorb} (${authorbid}) !`);

        } catch(e) {
           // console.log(e.message)
        }   
    }
};
module.exports.config = {
    name: "unbl"
}