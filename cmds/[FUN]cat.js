const axios = require('axios');

const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {



    const url = "https://some-random-api.ml/img/cat";
    const facts = "https://some-random-api.ml/facts/cat"

    let image, response;
    let fact, responses;
    try {
        response = await axios.get(url);
        image = response.data;

        responses = await axios.get(facts)
        fact = responses.data

    } catch (e) {
        return message.channel.send(`Une erreur s'est produite, veuillez réessayer!`)
    }

    const embed = new MessageEmbed()
        .setTitle(`Image de chat aléatoire `)
        .setColor('RANDOM')
                .setImage(image.link)

     message.channel.send(embed)

};


module.exports.config = {
    name: "cat",
    description: "Envoi une image de chat",
    usage: "cat"

  };