const { MessageEmbed } = require("discord.js");

module.exports.run = async(bot,message,args) => {

    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer le *help* !")

const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**__Voici les Commande Disponibles :__**\n\n  ๐ฎโโ๏ธ = **Commandes de Modรฉrations,** \n\n ๐ = **Commandes de Gestion dรป Serveur,** \n\n ๐งฒ = **Commandes de Backup,** \n\n ๐คฃ = **Commandes Fun,** \n\n ๐ = **Commandes Gifs,** \n\n ๐ = **Commandes NSFW,** \n\n ๐ = **Commande Autres,** \n\n ๐ = __**Commande Premium,**__ \n\n โ = **Annulรฉ le Help !**")
    .setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/765158755905961984/793187964075114567/help.gif")

    const embed_ban = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Modรฉration : ๐ฎโโ๏ธ')
    .setDescription("โ `e!ban,`\n โ `e!tempban,` \n โ `e!unban,` \n โ `e!kick,` \n โ `e!mute,`\n โ `e!unmute,` \n โ `e!nuke,` \n โ `e!warn,` \n โ `e!clear,` \n โ `e!lock.`")
    .setTimestamp()
    .setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
    .setImage('https://cdn.discordapp.com/attachments/765158755905961984/793190832051191808/Ban.gif')

const embed_gestion = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Gestion du Serveur : ๐")
.setDescription("โ`e!members`, \n โ`e!vc`, \n โ`e!pp`, \nโ`e!pp-server`, \nโ`e!ui`, \nโ`e!si`, \nโ`e!say`, \nโ`e!embed`, \n โ`e!addemoji`, \n โ`e!sondage`, \n โ`e!rappel` \nโ`e!soon`, \n โ`e!perm` .")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847252877424590878/Hakceur.gif")

const embed_backup = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Backup : ๐งฒ")
.setDescription("โ `e!create,` \n โ `e!load,` \n โ `e!info.`")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/871115334860558427/Backup.gif")

const embed_jeux = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Fun : ๐คฃ")
.setDescription("โ`e!ban2`\n โ`e!report` \nโ`e!8ball`, \nโ`e!pf`, \nโ`e!clyde`, \nโ`e!asciify`, \nโ`e!captcha`, \nโ`e!gay`, \nโ`e!lc`, \nโ`e!calc`, \nโ`e!qr-code`, \nโ`e!snapcode`, \nโ`e!twitter`, \nโ`e!wiki,` \n โ`e!search-i`, \n โ`e!search-y`, \n โ`e!shorturl`, \n โ`e!world`.")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847253207053762590/Jeux.gif")

const embed_gif = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Gif : ๐")
.setDescription("โ`e!meme`, \nโ`e!gif`, \nโ`e!dog`, \nโ`e!cat`, \nโ`e!truck`, \nโ`e!koala`, \nโ`e!calin`, \nโ`e!bisous`, \nโ`e!fight`, \nโ`e!punch`.")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865199179163762708/Gif.gif")

const embed_give = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commandes de Giveaways : ๐")
.setDescription("โ `e!start`, \nโ `e!end`, \nโ `!reroll`. \n\n Exemple :  `e!start <Durรฉe> <Gagant> <Lot>` ! ")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/768825348875091968/805501186870345768/giveaway.gif")

const embed_nfsw = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande NFSW : ๐")
.setDescription("โ `e!fuck`, \nโ `e!sodomie`, \nโ `e!nude`, \nโ `e!seins`, \nโ `e!chatte`. <a:Suce:863033495948492801>")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865188112299720704/X.gif")

const embed_autre = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Autre : ๐")
.setDescription("โ`e!add`, \n โ`e!ping`, \n โ`e!bi`, \nโ`e!yt`, \n โ`e!discord`, \n โ`e!mybot`, \n โ`e!stat`, \n โ`e!don`. ")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/793192156214984734/Fun.gif")

const embed_prem = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commandes Premium : ๐")
.setDescription("โ `e!dm`, \n โ `e!say-p`,\n โ `e!embed-p`, \nโ `e!join`, \nโ `e!elexyr`,\n โ `e!meme22`,\n โ `e!reel`,\n โ `e!dedi`, \nโ `e!hack`, \nโ `e!first`, \n โ `e!bug`.")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif")

const embed_down = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help ร? รฉtรฉ Annulรฉ !")
.setDescription("**Merci de faire : `e!help,` pour avoir accรจs ร? la liste des commandes !**")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197610768007188/Off.gif")

const embed_timeout = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help ร? Timeout !")
.setDescription("**Merci de faire : `e!help,` pour avoir accรจs ร? la liste des commandes !**")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197698155675648/Time_Out.gif")

message.channel.send(embed).then(async msg => {
    const filter = (reaction, user) => (reaction.emoji.name === '๐ฎโโ๏ธ' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐งฒ' || reaction.emoji.name === '๐คฃ' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === '๐' || reaction.emoji.name === 'โ') && user.id === message.author.id;

    const collector = msg.createReactionCollector(filter, { idle: 60000 });

    collector.on('collect', async r => {
        if (r._emoji.name === "๐ฎโโ๏ธ") {
            await r.users.remove(message.author.id)
            msg.edit(embed_ban)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gestion)

        } else if (r._emoji.name === "๐งฒ") {
            await r.users.remove(message.author.id)
            msg.edit(embed_backup)
            
        } else if (r._emoji.name === "๐คฃ") {
            await r.users.remove(message.author.id)
            msg.edit(embed_jeux)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gif)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_give)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_nfsw)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_autre)

        } else if (r._emoji.name === "๐") {
            await r.users.remove(message.author.id)
            msg.edit(embed_prem)

        } else if (r._emoji.name === "โ") {
            await msg.reactions.removeAll();
            msg.edit(embed_down)
        }
    })

    collector.on('end', (collected, reason) => {
        if (reason === 'idle') {
            msg.reactions.removeAll();
            msg.edit(embed_timeout)
        }
    });
    await msg.react('๐ฎโโ๏ธ');
    await msg.react('๐');
    await msg.react('๐งฒ');
    await msg.react('๐คฃ');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('๐');
    await msg.react('โ');
})}
module.exports.config = {
    name: 'help' 
    }