const qrcode = require("qrcode");
const tempy = require("tempy");
 
module.exports.run = (bot, message, args) => {

    const channel = message.guild.channels.cache.find(c => c.id === '812759458241445888'); //Votre bot doit être sur le serveur.
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('./prem.json');
    const db = low(adapter);
    let author = message.author.id;

    if(!db.get('Premium').find({ user_id: author }).value()) {
        message.channel.send("Vous ne possédez pas le __**\"Premium du Bot\"**__, <a:Nop:836606008964415529> \n\nfaite ``e!premium`` pour savoir comment l'avoir ! <a:couronne:836754425133006918>").catch(console.error); 
    }

    else {
 
        const qrOutput = tempy.file({ extension: "png" });
        message.channel.startTyping();
        if (args.length > 0) {
            qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
                if (error) throw new Error(error);
                message.channel.stopTyping();
                message.channel.send(`*Voici votre QR Code sous le lien de: ${args}*`)
                message.channel.send({
                    files: [{
                        attachment: qrOutput,
                        name: `${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}.png`
                    }]
                });
            });
        }
    }};
    module.exports.config = {
        name: "bug"
    }