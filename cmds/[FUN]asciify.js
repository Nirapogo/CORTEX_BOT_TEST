
const Discord = require('discord.js')
var access = require("request");

module.exports.run = async (client, message, args) => {

    // Variables
    let words = args.join(" ");
    const msg = message

        // Input Checking
        const noInputErr = new Discord.MessageEmbed()
          .setDescription('Veuillez founir un message ! <a:Alerte1:754441316905123994>')
          .setColor('RED')
        if (!words) return message.channel.send(noInputErr);

        const textLength = new Discord.MessageEmbed()
          .setDescription('Erreur! L\'argument d\'entrée ne peut pas dépasser la limite de 15 caractères! ')
          .setColor('RED')
        if (words.length > 15) return message.channel.send(textLength)

        // Executing
        access("https://artii.herokuapp.com/make?text=" + words, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            message.channel.send("\n```" + body + "```");
          }
          else {
            message.channel.send("Une erreur inattendue s'est produite ");
          }
        });
      }
    
    module.exports.config = {
      name: "asciify",
      description: "Permet d'écrire un message en Asciify !",
      usage: "asciify <Message>"
    
    };