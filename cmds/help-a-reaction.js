const { MessageEmbed } = require("discord.js");

module.exports.run = async(bot,message,args) => {

    if(!message.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je n'ai pas la __permission:__ __**\"GESTION DES MESSAGES\"**__, je ne peux donc envoyer le *help* !")

const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**__Voici les Commande Disponibles :__**\n\n  👮‍♂️ = **Commandes de Modérations,** \n\n 🔑 = **Commandes de Gestion dû Serveur,** \n\n 🧲 = **Commandes de Backup,** \n\n 🤣 = **Commandes Fun,** \n\n 🃏 = **Commandes Gifs,** \n\n 🔞 = **Commandes NSFW,** \n\n 📍 = **Commande Autres,** \n\n 👑 = __**Commande Premium,**__ \n\n ❌ = **Annulé le Help !**")
    .setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/765158755905961984/793187964075114567/help.gif")

    const embed_ban = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Modération : 👮‍♂️')
    .setDescription("➜ `e!ban,`\n ➜ `e!tempban,` \n ➜ `e!unban,` \n ➜ `e!kick,` \n ➜ `e!mute,`\n ➜ `e!unmute,` \n ➜ `e!nuke,` \n ➜ `e!warn,` \n ➜ `e!clear,` \n ➜ `e!lock.`")
    .setTimestamp()
    .setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
    .setImage('https://cdn.discordapp.com/attachments/765158755905961984/793190832051191808/Ban.gif')

const embed_gestion = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Gestion du Serveur : 🔑")
.setDescription("➜`e!members`, \n ➜`e!vc`, \n ➜`e!pp`, \n➜`e!pp-server`, \n➜`e!ui`, \n➜`e!si`, \n➜`e!say`, \n➜`e!embed`, \n ➜`e!addemoji`, \n ➜`e!sondage`, \n ➜`e!rappel` \n➜`e!soon`, \n ➜`e!perm` .")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847252877424590878/Hakceur.gif")

const embed_backup = new MessageEmbed()

.setColor("RANDOM")
.setTitle("Backup : 🧲")
.setDescription("➜ `e!create,` \n ➜ `e!load,` \n ➜ `e!info.`")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/871115334860558427/Backup.gif")

const embed_jeux = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Fun : 🤣")
.setDescription("➜`e!ban2`\n ➜`e!report` \n➜`e!8ball`, \n➜`e!pf`, \n➜`e!clyde`, \n➜`e!asciify`, \n➜`e!captcha`, \n➜`e!gay`, \n➜`e!lc`, \n➜`e!calc`, \n➜`e!qr-code`, \n➜`e!snapcode`, \n➜`e!twitter`, \n➜`e!wiki,` \n ➜`e!search-i`, \n ➜`e!search-y`, \n ➜`e!shorturl`, \n ➜`e!world`.")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/847253207053762590/Jeux.gif")

const embed_gif = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Gif : 🃏")
.setDescription("➜`e!meme`, \n➜`e!gif`, \n➜`e!dog`, \n➜`e!cat`, \n➜`e!truck`, \n➜`e!koala`, \n➜`e!calin`, \n➜`e!bisous`, \n➜`e!fight`, \n➜`e!punch`.")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865199179163762708/Gif.gif")

const embed_give = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commandes de Giveaways : 🎉")
.setDescription("➜ `e!start`, \n➜ `e!end`, \n➜ `!reroll`. \n\n Exemple :  `e!start <Durée> <Gagant> <Lot>` ! ")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/768825348875091968/805501186870345768/giveaway.gif")

const embed_nfsw = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande NFSW : 🔞")
.setDescription("➜ `e!fuck`, \n➜ `e!sodomie`, \n➜ `e!nude`, \n➜ `e!seins`, \n➜ `e!chatte`. <a:Suce:863033495948492801>")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865188112299720704/X.gif")

const embed_autre = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commande Autre : 📍")
.setDescription("➜`e!add`, \n ➜`e!ping`, \n ➜`e!bi`, \n➜`e!yt`, \n ➜`e!discord`, \n ➜`e!mybot`, \n ➜`e!stat`, \n ➜`e!don`. ")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/793192156214984734/Fun.gif")

const embed_prem = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Commandes Premium : 👑")
.setDescription("➜ `e!dm`, \n ➜ `e!say-p`,\n ➜ `e!embed-p`, \n➜ `e!join`, \n➜ `e!elexyr`,\n ➜ `e!meme22`,\n ➜ `e!reel`,\n ➜ `e!dedi`, \n➜ `e!hack`, \n➜ `e!first`, \n ➜ `e!bug`.")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/767361889990344715/815257914813710346/Argent.gif")

const embed_down = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help à été Annulé !")
.setDescription("**Merci de faire : `e!help,` pour avoir accès à la liste des commandes !**")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197610768007188/Off.gif")

const embed_timeout = new MessageEmbed()
.setColor("RANDOM")
.setTitle("Help à Timeout !")
.setDescription("**Merci de faire : `e!help,` pour avoir accès à la liste des commandes !**")
.setTimestamp()
.setFooter('By User#0001', 'https://cdn.discordapp.com/attachments/765158755905961984/793196593821646868/PP_du_Serveur.gif')
.setImage("https://cdn.discordapp.com/attachments/765158755905961984/865197698155675648/Time_Out.gif")

message.channel.send(embed).then(async msg => {
    const filter = (reaction, user) => (reaction.emoji.name === '👮‍♂️' || reaction.emoji.name === '🔑' || reaction.emoji.name === '🧲' || reaction.emoji.name === '🤣' || reaction.emoji.name === '🃏' || reaction.emoji.name === '🎉' || reaction.emoji.name === '🔞' || reaction.emoji.name === '📍' || reaction.emoji.name === '👑' || reaction.emoji.name === '❌') && user.id === message.author.id;

    const collector = msg.createReactionCollector(filter, { idle: 60000 });

    collector.on('collect', async r => {
        if (r._emoji.name === "👮‍♂️") {
            await r.users.remove(message.author.id)
            msg.edit(embed_ban)

        } else if (r._emoji.name === "🔑") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gestion)

        } else if (r._emoji.name === "🧲") {
            await r.users.remove(message.author.id)
            msg.edit(embed_backup)
            
        } else if (r._emoji.name === "🤣") {
            await r.users.remove(message.author.id)
            msg.edit(embed_jeux)

        } else if (r._emoji.name === "🃏") {
            await r.users.remove(message.author.id)
            msg.edit(embed_gif)

        } else if (r._emoji.name === "🎉") {
            await r.users.remove(message.author.id)
            msg.edit(embed_give)

        } else if (r._emoji.name === "🔞") {
            await r.users.remove(message.author.id)
            msg.edit(embed_nfsw)

        } else if (r._emoji.name === "📍") {
            await r.users.remove(message.author.id)
            msg.edit(embed_autre)

        } else if (r._emoji.name === "👑") {
            await r.users.remove(message.author.id)
            msg.edit(embed_prem)

        } else if (r._emoji.name === "❌") {
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
    await msg.react('👮‍♂️');
    await msg.react('🔑');
    await msg.react('🧲');
    await msg.react('🤣');
    await msg.react('🃏');
    await msg.react('🎉');
    await msg.react('🔞');
    await msg.react('📍');
    await msg.react('👑');
    await msg.react('❌');
})}
module.exports.config = {
    name: 'help' 
    }