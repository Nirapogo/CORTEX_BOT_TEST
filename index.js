const Discord = require("discord.js");
const bot = new Discord.Client({disableMentions: 'everyone' });
const config = require('./db/config.json')
const fs = require('fs');
humanizeDuration = require('humanize-duration');
bot.snipes = new Discord.Collection();

bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) => {
  if (err) console.log(err)
  let jsfile = files.filter(f => f.split('.').pop() === 'js')
  if (jsfile.length <= 0) {
  }

  jsfile.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.config.name, props)
  })
});

bot.on("ready", async () => {
    
  //console.log(`✅(${bot.user.username}) est désormait opérationel ✅`)
  console.log(
    `${"-".repeat(40)}\n` +
    "|  Logs.  |\n" +
    `${"-".repeat(40)}\n` +
    "Bot Infos : \n" +
    `Nom du bot    : ${bot.user.tag}!\n` +
    `ID du bot     : ${bot.user.id}\n` +
    `Invitation : https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958847 \n` +
    `${"-".repeat(40)}\n`
  );

  let statuses = [
    "Discord.gg/soon",
    `${bot.guilds.cache.size} serveurs !`,
    "Prefix = e!",
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "STREAMING",
      url: 'https://www.twitch.tv/x'
    })
  }, 5000)
  
})

bot.on('message', async message => {
  const prefix = "!";

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if (message.content === `<@!${bot.user.id}>`) {
      const ee = new Discord.MessageEmbed()
        .setTitle("On ma ping ?")
        .setColor("RANDOM")
        .setDescription("**Mon prefix est `!`, pour avoir accès au commandes :**  `!help`, \n\n __**Merci à toi !**__")
        .setTimestamp()
      message.channel.send(ee)
    }

    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commande = args.shift();

  const cmd = bot.commands.get(commande);
  const embederr = new Discord.MessageEmbed()
  .setDescription(`La commande : \`${commande}\` n'existe pas, \n pour voir la liste des commmandes faite : \`!help\`  !`)
  .setColor("RANDOM")
  .setTimestamp()
    if(!cmd) return message.channel.send(embederr)

    cmd.run(bot, message, args);
})


bot.on('guildCreate', async guild => {
  const channel = bot.channels.cache.get("ID") //channel où le message sera mis
  //console.log(channel)
  let addembed = new Discord.MessageEmbed()
    .setTitle(`BOT vient d'être ajouté sur le serveur : ${guild.name}`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `${guild.owner}`)
    .addField(`📇 Nom du serveur :`, `${guild.name}`)
    .addField(` Id du serveur:`, `${guild.id}`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor("11d646")
    .setTimestamp()
    .setFooter(`Merci grâce à toi nous sommes à ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
  channel.send(addembed);

})


bot.on('guildDelete', guild => {
  const channel = bot.channels.cache.get("ID") //channel où le message s'envoi
  //console.log(channel)
  let removeembed = new Discord.MessageEmbed()
    .setTitle(`BOT vient d\'être retiré du serveur serveur ${guild.name}`)
    .setThumbnail(guild.iconURL())
    .addField(`👑 Propriétaire:`, `${guild.owner}`)
    .addField(`📇 Nom du serveur :`, `${guild.name}`)
    .addField(` Id du serveur:`, `${guild.id}`)
    .addField(` Nombre de membres:`, `${guild.memberCount}`)
    .setColor(`fc3d12`)
    .setFooter(`Désormais : ${bot.guilds.cache.size} serveurs`, bot.user.displayAvatarURL())
  channel.send(removeembed)
  //console.log(channel)
})

bot.on('guildCreate', async guild => {
  let embed = new Discord.MessageEmbed() // Makes a pretty embed
    .setColor("RED")
    .setTitle("Merci d'avoir ajouté :!")
    .setDescription("**Mon prefix est =** `!`")
  guild.owner.send(embed);
});

bot.on('message', async message => {

if (message.author.id != "ID") return;
if (message.content === `Wsh <@!${bot.user.id}> comment va-tu ?`) {
  message.channel.send(`Très bien et vous maître ?`)};
if (message.content === `Super que fais-tu de beau ?`) {
 message.channel.send(`Je surveille à ce que tous se passent bien !`)};
if (message.content === `Préviens-moi s'il a un problème ^^`) {
  message.channel.send(`D'accord, je vous appelle sur votre ligne privée !`)};
  if (message.content === `Allez bonne journée !`) {
  message.channel.send(`Merci, à vous aussi **Maître Suprême !**`)};  
  if (message.content === `Allez bonne soirée !`) {
    message.channel.send(`Merci, à vous aussi **Maître Suprême !**`)};

  });

bot.on('guildMemberAdd', async member => {
     const black_list = JSON.parse(fs.readFileSync('./blacklist.json', 'utf-8'));
  const reason = `${black_list[member.id]} [Blacklist Auto de User#0001 !]`;

  const embedmp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("BlackList-Automatique !")
    .setTitle("Pour pourvoir être deban, clique ici !")
    .setURL("https://discord.gg/x")
    .setDescription(`Vous êtes **banni** du serveur  **__${member.guild.name}__** parce-que vous êtes dans la __**"Blacklist"**__ !"`)
    .setTimestamp()

  if (!black_list[member.id]) return;

  let blackMember = black_list[member.id].blacklist;


  if (blackMember === 1) {
    await member.send(embedmp);
    member.ban({
      reason: reason
    })
  };
})


bot.on('messageDelete', async message => {

  ///////////
  if (message.mentions.members.first() && !message.mentions.members.first().user.bot && message.mentions.members.first().user.id !== message.author.id) {
  if (message.author.bot) return;
    let embed = new Discord.MessageEmbed()
      .setTitle('Ghost Ping Détecté !')
      .setColor("RANDOM")
      .setTimestamp()
      .addField('Auteur', message.author)
      .addField('Message', message.content);

    message.channel.send(embed)
  }
})

bot.on('messageDelete', async (message) => {
  if (message.author.bot) return;
     const snipes = message.client.snipes.get(message.channel.id) || [];
     snipes.unshift({
       content: message.content,
       author: message.author,
       image: message.attachments.first() ? message.attachments.first().proxyURL : null,
       date: new Date().toLocaleString("en-GB", {
         dataStyle: "full",
         timeStyle: "short",
       }),
     });
     snipes.splice(10);
     message.client.snipes.set(message.channel.id, snipes);
     let embed = new Discord.MessageEmbed()
       .setTitle(`Nouveau message supprimé! `)
       .setDescription(
         `**L'utilisateur ${message.author.tag} a supprimé un message dans <#${message.channel.id}>**`
       )
       .addField(`Contient`, message.content, true)
       .setColor(`RED`);
     let channel = message.guild.channels.cache.find(
       (ch) => ch.name === "logs"
     );
     if (!channel) return;
     channel.send(embed);
   
 
 })

bot.login(process.env.TOKEN);