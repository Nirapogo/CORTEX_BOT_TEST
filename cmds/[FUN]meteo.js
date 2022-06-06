const { MessageEmbed } = require("discord.js");
const weather = require("weather-js");

module.exports.run = (bot, message, args) => {

  weather.find({ search: args.join(" "), degreeType: "C" }, function (
    error,
    result
  ) {
      try {
      if (!result) {
        message.channel.send(
          "*Merci, de founir un emplacement valide !* <a:Alerte1:754441316905123994>"
        );
        return;
      }
      if (error) message.channel.send(error);

      const current = result[0].current;
      if (!current) return message.channel.send("*Merci, de founir un emplacement valide !* <a:Alerte1:754441316905123994>");
      let frTemps;
      switch (current.skytext) {
        case "Sunny":
          frTemps = "Ensoleillé";
          break;
        case "Clear":
          frTemps = "Clair";
          break;
        case "Mostly Clear":
          frTemps = "Globalement clair"
          break;
        case "Partly Clear":
          frTemps = "Partiellement clair"
          break;
        case "Mostly Sunny":
          frTemps = "Globalement ensoleillé";
          break;
        case "Cloudy":
          frTemps = "Nuageux";
          break;
        case "Mostly Cloudy":
          frTemps = "Globalement nuageux";
          break;
        case "Partly Cloudy":
          frTemps = "Partiellement nuageux";
          break;
        case "Partly Sunny":
          frTemps = "Partiellement ensoleillé";
          break;
        case "Blowing Dust":
          frTemps = "De la poussière dans l'air";
          break;
        case "Light Rain":
          frTemps = "Pluie légère";
          break;
        case "Haze":
          frTemps = "Brumeux";
          break;
        case "Smoke":
          frTemps = "De la fumée dans l'air";
          break;
        case "Fair": 
          frTemps = "Brumeux";
          break;
        case "Snow":
          frTemps = "Neige";
          break;
        case "Hail":
          frTemps = "Grêle";
          break;
        case "Rain Showers":
          frTemps = "Très pluvieux";
          break;
        case "Rain":
          frTemps = "Pluvieux";
          break;
        
      }

      let vitesse = current.winddisplay.substring(0, current.winddisplay.indexOf("h") + 1);
      let Dir;
      switch (current.winddisplay.substring(current.winddisplay.indexOf("h") + 2)) {
        case "Northeast":
          Dir = "Nord-Est";
          break;
        case "Southeast":
          Dir = "Sud-Est";
          break;
        case "Southwest":
          Dir = "Sud-Ouest";
          break;
        case "Northwest":
          Dir = "Nord-Ouest";
          break;
        case "North":
          Dir = "Nord";
          break;
        case "South":
          Dir = "Sud";
          break;
        case "East":
          Dir = "Est";
          break;
        case "West":
          Dir = "Ouest";
          break;
        default:
          Dir = "Aucun vent";
          break;
      }

      let embed = new MessageEmbed()
        .setDescription(`**${frTemps}**`)
        .setAuthor(`Météo pour ${current.observationpoint} 🌡️`)
        .setThumbnail(current.imageUrl)
        .setColor("RANDOM")
        .addField("Fuseau horaire 🕑", `UTC${result[0].location.timezone}`, true)
        .addField("Température 🌡️", `${current.temperature} Degrés`, true)
        .addField("Ressenti", `${current.feelslike} Degrés`, true)
        .addField("Vitesse du vent :", vitesse, true)
        .addField("Direction du vent :", Dir, true)
        .addField("Humidité", `${current.humidity}%`, true);
      message.channel.send({ embed: embed });
    }catch {
      message.channel.send("*Merci, de founir un emplacement valide !* <a:Alerte1:754441316905123994>")
    }})
  };

  module.exports.config = {
    name: "meteo",
    description: "Envoi les informations métérologique d'une ville",
    usage: "meteo <ville>",
  }