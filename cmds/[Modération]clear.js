module.exports.run = async(bot,message,args) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission **MANAGE_MESSAGES** donc l\'action est imposible ')
  if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**'ADMINISTRATEUR'**__, je ne peux donc pas faire le *clear!*")
  const count = args[0]
  if (!/\d+/.test(count)) return message.channel.send('__**Veuillez indiquer un nombre de messages à supprimer !**__ ')
  if (count < 1 || count > 99) return message.channel.send(' __**Le nombre de message doit être compris entre 1 et 99 !**__ ')
  const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
  message.channel.send(`__**${size - 1} messages ont été supprimés**__ `).then(sent => sent.delete({timeout: 5e3}))
}

module.exports.config = {
  name: "clear"
}
