const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        const args = message.content.split(" ").slice(1)
        const embed = new Discord.RichEmbed()
        .setTitle("You said what?")
        .setColor(0xffa5f1)
        .setDescription("" + message.author.username + " says: " + args.join(" "))
        message.channel.send(embed)
    };
