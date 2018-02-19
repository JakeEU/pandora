const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
        let word = message.content.split(' ').splice(1).join(' ');
        let result = "";
        let array = definition.define(word).definitions
        console.log(array.definitions)
        array.forEach((v, i) => result += `${i + 1}) ${v}\n`)
        const embed = new Discord.RichEmbed()
            .setAuthor(`Definition of ${word}`)
            .setDescription(result)
            .setFooter(definition.define(word).type)
            .setColor(0xffa5f1)
            .setFooter("v1.1");
        message.channel.send(embed)
    };
