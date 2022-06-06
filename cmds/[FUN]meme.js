const { MessageEmbed } = require('discord.js');
const somethingRandom = require('some-random-cat').Random // Import the package...
module.exports.run = async (bot, message, args) => {
const subreddits = [
    "meme",
    "memes",
    "dankmemes",
    // You can add as many as you wish...
]
let randomSubReddit = subreddits[Math.floor(Math.random() * subreddits.length)] // Generates a random subreddit from the array...
somethingRandom.getMeme(randomSubReddit).then(res => {
    const embed = new MessageEmbed()
    .setTitle(res.title)
    .setURL(`https://www.reddit.com/r/${randomSubReddit}`)
    .setImage(res.img)
    .setFooter(`👍 ${res.upvotes} | 💬 ${res.comments}`)
    .setAuthor(`D'un Sub/Reddit:`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(embed)
    //console.log(res)
}).catch(e => message.channel.send('API Error.'))
}
module.exports.config = {
  name: "meme",
}