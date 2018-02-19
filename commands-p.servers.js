const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        const servercount = new Discord.RichEmbed()
        .setTitle("Here is how many servers i am on!")
        .setColor(0xffa5f1)
        .setDescription(`${client.guilds.size}`)
        .setFooter('v1.1')
        message.channel.send(servercount);
      };
