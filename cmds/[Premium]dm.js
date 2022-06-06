const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {

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

  let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!user)
    return message.channel.send(
      `<a:Alerte2:754441317307777024> Vous n'avez pas mentionné un utilisateur, ou vous avez donné un identifiant invalide !`
    );
  if (!args.slice(1).join(" "))
    return message.channel.send("<a:Alerte2:754441317307777024> __**Vous n'avez pas spécifié votre message**__");
    const emebd1 = new Discord.MessageEmbed()
    .setDescription(args.slice(1).join(" "))
    .setFooter(`By ${message.author.tag}`)
  user.user
    .send(emebd1)
    .catch(() => message.channel.send("<a:Alerte2:754441317307777024> __cet utilisateur n'a pas pu être DM !__"))
    .then(() => message.channel.send(`**Message envoyée à ${user.user.tag}**`));
}};


module.exports.config = {
  name: "dm",
  };