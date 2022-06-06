
const Discord = require('discord.js')
const guildEmbedColor = new Map();

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Vous n\'avez pas la permission **MANAGE_MESSAGES** donc l\'action est imposible ')
    if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la __permission:__ __**'ADMINISTRATEUR'**__, je ne peux donc pas faire le *lock le salon !*")
        const lockAllOn = args[0] == 'all' && args[1] == "on";
        const lockAllOff =  args[0] == 'all' && args[1] == "off";
        const on = args[0] == 'on';
        const off = args[0] == 'off';
        const color = guildEmbedColor.get(message.guild.id)

        const channels = message.guild.channels.cache.filter(ch => ch.type != 'category')
        const ch = message.channel
        
        if(!args[0]){
            const hEmbed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`HELP DU LOCK :`)
                .setDescription(`**e!lock off =** *Ferme le salon !*\n**e!lock on =** *Ouvre le Salon !*`)
                .setTimestamp();
            return message.channel.send(hEmbed)
        }
        
        if(lockAllOn){
            channels.forEach(channel =>{
                channel.updateOverwrite(message.guild.roles.everyone,{
                    SEND_MESSAGES : false
                })

            })
            message.channel.send(" Tout les salons on été fermé.")


          
        }else if(lockAllOff){
            channels.forEach(channel =>{
                channel.updateOverwrite(message.guild.roles.everyone,{
                    SEND_MESSAGES : true
                })

            })
            message.channel.send("<a:emoji2:784750660905861161> \`SUCCÈS\` Tout les salons on été ouvert.")

        }else if(on){
            ch.updateOverwrite(message.guild.roles.everyone,{
                SEND_MESSAGES : false
            }).then(() =>{
                message.channel.send(" __**La salon a été Fermé !**__ ")
            })
        }else if(off){
            ch.updateOverwrite(message.guild.roles.everyone,{
                SEND_MESSAGES : true
            }).then(() =>{
                message.channel.send(" __**La salon a été Ouvert !**__ ")

            })
        }
    }



    module.exports.config = {
      name: "lock"
    }
