const axios = require('axios');
const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = async (client, message, args) => {

    const url = `http://some-random-api.ml/binary?decode=${args}`;

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`Une erreur s'est produite, veuillez réessayer!`)
    }

    const embed = new MessageEmbed()
        .setTitle('Décoder le binaire')
        .setDescription(data.text)
        .setColor('RANDOM')

     message.channel.send(embed)
}



module.exports.config = {
    name: "decode",
    description: "Decode binary",
    usage: "decode <binary>"
  };