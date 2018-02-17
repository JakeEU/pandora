const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("You cannot use this command, you must have the `ADMINISTRATOR` permission!").then(msg => { msg.react("❌") });
        const embed5 = new Discord.RichEmbed()
        .setTitle("This may come in useful!")
        .setColor(0xffa5f1)
        .setDescription(`Hi, ${message.guild.owner} thanks for adding me to **${message.guild.name}**!, You can use p.help to get started! Make sure you have a **mod-log** channel so i can use my moderation commands correctly! `)
        .setFooter('v1.1')
        message.channel.send(embed5)
    };
