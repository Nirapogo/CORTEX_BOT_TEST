
	const Discord = require("discord.js"),
	fetch = require("node-fetch");

	module.exports.run = async (bot, message, args) => {
        
		const user = message.author;
		const m = await message.channel.send("Merci de patienter ! <a:Attente1:754441322059923538> ", null, {
			prefixEmoji: "loading"
		});
		try {
			const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${user.username}&url=${user.displayAvatarURL({ format: "png", size: 512 })}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "captcha.png");
			message.channel.send(attachment);
			m.delete();
		} catch(e){
			console.log(e);
			m.error("Quelque chose s'est mal passé... Merci de patienter, puis réessayez !", null, {
				edit: true
			});
		}

	}


module.exports.config = {
	name: "captcha",
	description: "Fait un capatch avec l'avatar",
	usage: "captcha"
}