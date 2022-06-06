const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

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
        const member = message.mentions.members.first()
  
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!user) {
            return message.channel.send("**Woaaah ralentit, qui piratons-nous ?**");

        }
    if(member.id === message.author.id) return message.channel.send('*Bruh, vous ne pouvez pas vous auto-hack !*');

       

        message.channel
        .send(`**Commencement du __Hack__ de : **${member},** en cours, veuillez patientez !** <a:Alerte1:754441316905123994>`)
        .then(async (msg) => {
            setTimeout(async function () {
                await msg.edit("Récupération du Token de l'utilisateur en cours : <a:Online:841100069154979910> ")
            }, 10000);
        
            setTimeout(async function () {
                await msg.edit("Changement du Token en cours, veuillez patientez ! <a:Attente1:754441322059923538>")
            }, 20000);

            setTimeout(async function () {
                await msg.edit("Changement Fini à 20%, <a:Nonoxdrugs:774729285348098099> ")
            }, 30000);
            setTimeout(async function () {
                await msg.edit("Changement Fini à 50%, <a:nonoxCatdoigtdanslecul:841399403490574347> ")
            }, 40000);

            setTimeout(async function () {
                await msg.edit("Changement Fini à 90%, <a:Nonoxdeppression:774729282362277889> ")
            }, 50000);

            setTimeout(async function () {
                await msg.edit("Changement Effectuer ! <a:Nonoxsueur:774729286367707157> ")
            }, 60000);

            setTimeout(async function () {
                await msg.edit("Vente du compte en cours, veuillez patientez ! <a:Attente1:754441322059923538>")
            }, 70000);

            setTimeout(async function () {
                await msg.edit("Compte Vendu !<a:Youpi:754441340368191519> ")
            }, 80000);

            setTimeout(async function () {
                await msg.edit("Le compte seras déconnecter dans dans 10 min ! <a:Cheh22:785554431324192839> ")
            }, 90000);

            setTimeout(async function () {
                await msg.edit("Suppression des preuves en cours, veuillez patientez !<a:Attente1:754441322059923538>")
            }, 100000);

            setTimeout(async function () {
                await msg.edit("**Hack fini !** <a:Valide_Or:836611453851140097> ")
            }, 130000);

            setTimeout(async function () {
                await msg.edit("*Ce message s'auto-détruiras dans 1 min* <a:alerterouge:754441340435038379>")
            }, 160000);

            setTimeout(async function () {
                await msg.edit("Il fait beau aujourd'hui ?")
            }, 190000);

        
        })
        

}}

module.exports.config = {
    name: "hack"
}



