const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    const embed2 = new Discord.RichEmbed()
    var date = new Date(client.uptime);
    var uptime = '';
       embed2.setColor(0xffa5f1)
       embed2.setTitle("I have been up for!")
       embed2.setDescription(uptime += date.getUTCDate() - 1 + ' days, ')
       embed2.setDescription(uptime += date.getUTCHours() + ' hours, ')
       embed2.setDescription(uptime += date.getUTCMinutes() + ' minutes, ')
       embed2.setDescription(uptime += date.getUTCSeconds() + ' seconds')
       embed2.setFooter("v1.1")
    message.channel.send({embed: embed2}).then(msg => { msg.react("🕐") });
};
