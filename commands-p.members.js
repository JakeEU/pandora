const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        const embed3 = new Discord.RichEmbed()
        embed3.setColor(0xffa5f1)
        embed3.setTitle('Our current member list sits at!')
        embed3.setDescription(`${message.guild.memberCount}`)
        embed3.setFooter('v1.1')
        message.channel.send({embed: embed3})
    };
