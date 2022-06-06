// Dependencies
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

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
	try {
		user = message.author;
		const member = message.guild.member(user);
		const messages = await message.channel.messages.fetch({ after: 1, limit: 1 });
		const fMessage = messages.first();
		const embed = new MessageEmbed()
			.setAuthor(`${member.user.tag}`,member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 32 }))
			.setColor(fMessage.member ? fMessage.member.displayHexColor : 0x00AE86)
			.setDescription(fMessage.content)
			.setTimestamp(fMessage.createdAt)
			.setFooter(`ID: ${fMessage.id}`)
			.addField('❯ Jump', fMessage.url);
		message.channel.send(embed);
	} catch (e) {
		console.log(e);
	}
}};


module.exports.config = {
	name: 'first'
};
