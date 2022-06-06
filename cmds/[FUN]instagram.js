const axios = require('axios')
const { MessageEmbed } = require('discord.js');
module.exports.run = async(bot,message,args) => {
        if (!args[0]) {
            return message.channel.send(`__**Merci de mettre un nom de compte**__ `)
        }
        let url, response, account, details;
        try {
            url = `https://instagram.com/${args[0]}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            return message.channel.send(`*Aucun Compte Trouvé...*`)
        }

        const embed = new MessageEmbed()
        .setColor("RANDOM")
            .setTitle(`${details.is_verified ? `${details.username} ✅` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
            .setDescription(details.biography)
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "Total Posts:",
                    value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Followers:",
                    value: details.edge_followed_by.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Following:",
                    value: details.edge_follow.count.toLocaleString(),
                    inline: true
                }
            )
        await message.channel.send(embed)

}

module.exports.config = {
    name: "insta",
}
