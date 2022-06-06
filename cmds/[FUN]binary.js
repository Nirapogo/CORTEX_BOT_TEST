const axios = require('axios');
const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = async (client, message, args) => {
    let lien = args[0];
    if(!lien) return message.channel.send("Veuillez founir un message ! <a:Alerte1:754441316905123994>");
    const url = `http://some-random-api.ml/binary?text=${args}`;
 
    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`Une erreur s'est produite, veuillez réessayer!`)
    }

    const embed = new MessageEmbed()
        .setTitle('Texte en binaire')
        .setDescription(data.binary)
        .setColor('RANDOM')
     message.channel.send(embed)
};


module.exports.config = {
    name: "binary",
    description: "Code binary ton text.",
    usage: "binary <texte>"
  };