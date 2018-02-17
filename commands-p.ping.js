const Discord = require ('discord.js');
module.exports.run = (client, message, args) => {
        const embed = new Discord.RichEmbed()
        .setColor(0xffa5f1)
        .addField('Pong! :ping_pong:', 'This message took me!')
        .setFooter(`${Math.floor(client.ping)}ms`)
      message.channel.send(embed);
      };
